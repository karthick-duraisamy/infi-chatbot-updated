import React, { useState, useRef, useEffect } from 'react';
import { Input, Button, Upload, Card, Tooltip, message as antMessage } from 'antd';
import { SendOutlined, PaperClipOutlined, CloseOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd/es/upload';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { addUserMessage, sendMessageToAI } from '../../store/chatSlice';
import './ChatInput.scss';

const { TextArea } = Input;

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const dispatch = useAppDispatch();
  const { isTyping } = useAppSelector((state) => state.chat);
  const isDark = useAppSelector((state) => state.theme.isDark);
  const textAreaRef = useRef<any>(null);
  const uploadRef = useRef<any>(null);

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isTyping) {
      setTimeout(() => {
        textAreaRef.current?.focus();
      }, 100);
    }
  }, [isTyping]);

  const handleFileChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    if (newFileList.length > 5) {
      antMessage.warning('You can upload maximum 5 files at once');
      return;
    }

    const validFiles = newFileList.filter(file => {
      if (file.size && file.size > 10 * 1024 * 1024) {
        antMessage.error(`${file.name} is too large. Maximum file size is 10MB.`);
        return false;
      }
      return true;
    });

    setFileList(validFiles);
  };

  const removeFile = (file: UploadFile) => {
    setFileList(prev => prev.filter(f => f.uid !== file.uid));
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return '🖼️';
    if (type.includes('pdf')) return '📄';
    if (type.includes('word') || type.includes('document')) return '📝';
    if (type.includes('excel') || type.includes('spreadsheet')) return '📊';
    if (type.includes('text')) return '📋';
    return '📎';
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSend = async () => {
    const trimmedMessage = message.trim();
    if ((trimmedMessage || fileList.length > 0) && !isTyping) {
      const attachments = fileList.map(file => ({
        id: file.uid,
        name: file.name,
        type: file.type || 'application/octet-stream',
        size: file.size || 0,
        preview: file.type?.startsWith('image/') ? URL.createObjectURL(file.originFileObj as File) : undefined,
        file: file.originFileObj, // Keep reference to original file for non-image preview
        url: !file.type?.startsWith('image/') ? URL.createObjectURL(file.originFileObj as File) : undefined,
      }));

      dispatch(addUserMessage({ 
        content: trimmedMessage || 'Sent files', 
        attachments: attachments.length > 0 ? attachments : undefined 
      }));
      setMessage('');
      setFileList([]);
      dispatch(sendMessageToAI({ 
        message: trimmedMessage || 'Please analyze these files', 
        attachments: attachments.length > 0 ? attachments : undefined 
      }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const trimmedMessage = message.trim();
      if ((trimmedMessage || fileList.length > 0) && !isTyping) {
        handleSend();
      }
    }
  };

  const uploadProps: UploadProps = {
    multiple: true,
    beforeUpload: () => false,
    onChange: handleFileChange,
    fileList,
    showUploadList: false,
    accept: '.pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.png,.jpg,.jpeg,.gif,.bmp,.webp',
  };

  return (
    <div className={`chat-input chat-input--${isDark ? 'dark' : 'light'}`}>
      {/* File Attachments */}
      {fileList.length > 0 && (
        <div className="file-attachments">
          {fileList.map((file) => (
            <Card
              key={file.uid}
              size="small"
              className={`file-card file-card--${isDark ? 'dark' : 'light'}`}
              bodyStyle={{ padding: '8px 12px' }}
            >
              <div className="file-card-content">
                <div className="file-info">
                  <span className="file-icon">
                    {getFileIcon(file.type || '')}
                  </span>
                  <div className="file-details">
                    <div className={`file-name file-name--${isDark ? 'dark' : 'light'}`}>
                      {file.name}
                    </div>
                    <div className={`file-size file-size--${isDark ? 'dark' : 'light'}`}>
                      {formatFileSize(file.size || 0)}
                    </div>
                  </div>
                </div>
                <Button
                  type="text"
                  size="small"
                  icon={<CloseOutlined />}
                  onClick={() => removeFile(file)}
                  className={`remove-file-btn remove-file-btn--${isDark ? 'dark' : 'light'}`}
                />
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Input Container */}
      <div className="input-container">
        <div className={`input-wrapper input-wrapper--${isDark ? 'dark' : 'light'}`}>
          <Upload {...uploadProps} ref={uploadRef}>
            <Tooltip title="Attach files (PDF, Images, Documents)">
              <Button
                type="text"
                icon={<PaperClipOutlined />}
                disabled={isTyping}
                className={`attach-button attach-button--${isDark ? 'dark' : 'light'}`}
              />
            </Tooltip>
          </Upload>

          <TextArea
            ref={textAreaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={fileList.length > 0 ? "Add a message (optional)..." : "Type a message..."}
            autoSize={{ minRows: 1, maxRows: 4 }}
            disabled={isTyping}
            variant="borderless"
            className={`text-area text-area--${isDark ? 'dark' : 'light'}`}
            styles={{
              textarea: {
                background: 'transparent !important',
              }
            }}
          />

          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSend}
            disabled={isTyping || (!message.trim() && fileList.length === 0)}
            className="send-button"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;