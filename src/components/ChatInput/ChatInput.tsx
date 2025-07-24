import React, { useState, useRef, useEffect } from 'react';
import { Input, Button, Upload, Card, Tooltip, message as antMessage } from 'antd';
import { SendOutlined, PaperClipOutlined, CloseOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd/es/upload';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { addUserMessage, sendMessageToAI } from '../store/chatSlice';

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
      handleSend();
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
    <div
      style={{
        padding: '20px 24px 24px 24px',
        background: isDark ? '#141414' : '#f5f5f5',
        borderTop: 'none',
      }}
    >
      {/* File Attachments */}
      {fileList.length > 0 && (
        <div
          style={{
            marginBottom: '12px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {fileList.map((file) => (
            <Card
              key={file.uid}
              size="small"
              style={{
                minWidth: '200px',
                background: isDark ? '#262626' : '#ffffff',
                border: `1px solid ${isDark ? '#424242' : '#d9d9d9'}`,
              }}
              bodyStyle={{ padding: '8px 12px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
                  <span style={{ marginRight: '8px', fontSize: '16px' }}>
                    {getFileIcon(file.type || '')}
                  </span>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        fontSize: '12px',
                        fontWeight: 500,
                        color: isDark ? '#ffffff' : '#000000',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {file.name}
                    </div>
                    <div
                      style={{
                        fontSize: '11px',
                        color: isDark ? '#d9d9d9' : '#666666',
                        marginTop: '2px',
                      }}
                    >
                      {formatFileSize(file.size || 0)}
                    </div>
                  </div>
                </div>
                <Button
                  type="text"
                  size="small"
                  icon={<CloseOutlined />}
                  onClick={() => removeFile(file)}
                  style={{
                    marginLeft: '8px',
                    color: isDark ? '#d9d9d9' : '#666666',
                    minWidth: 'auto',
                    width: '20px',
                    height: '20px',
                    padding: 0,
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Input Container */}
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            background: isDark ? '#262626' : '#ffffff',
            border: `1px solid ${isDark ? '#424242' : '#d9d9d9'}`,
            borderRadius: '24px',
            padding: '8px',
            boxShadow: isDark ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <Upload {...uploadProps} ref={uploadRef}>
            <Tooltip title="Attach files (PDF, Images, Documents)">
              <Button
                type="text"
                icon={<PaperClipOutlined />}
                disabled={isTyping}
                style={{
                  height: '40px',
                  width: '40px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  color: isDark ? '#d9d9d9' : '#666666',
                  margin: '0 4px',
                }}
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
            style={{
              flex: 1,
              resize: 'none',
              padding: '8px 12px',
              fontSize: '14px',
              lineHeight: '20px',
              background: 'transparent',
              color: isDark ? '#ffffff' : '#000000',
            }}
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
            style={{
              height: '40px',
              width: '40px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '4px',
              background: '#4285f4',
              borderColor: '#4285f4',
              opacity: (isTyping || (!message.trim() && fileList.length === 0)) ? 0.5 : 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;