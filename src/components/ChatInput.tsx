import React, { useState, useRef, useEffect } from 'react';
import { Input, Button, Upload, message as antMessage, Tooltip, Image } from 'antd';
import { SendOutlined, PaperClipOutlined, DeleteOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
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

  // Focus on mount
  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  // Re-focus after AI responds
  useEffect(() => {
    if (!isTyping) {
      setTimeout(() => {
        textAreaRef.current?.focus();
      }, 100);
    }
  }, [isTyping]);

  const handleFileChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    // Limit to 5 files
    if (newFileList.length > 5) {
      antMessage.warning('You can upload maximum 5 files at once');
      return;
    }
    
    // Check file size (10MB limit per file)
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
      // Process attachments
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
    beforeUpload: () => false, // Prevent auto upload
    onChange: handleFileChange,
    fileList,
    showUploadList: false,
    accept: '.pdf,.doc,.docx,.xls,.xlsx,.csv,.txt,.png,.jpg,.jpeg,.gif',
  };

  return (
    <div
      style={{
        padding: '20px 24px',
        background: isDark ? '#1f1f1f' : '#ffffff',
        borderTop: `1px solid ${isDark ? '#424242' : '#f0f0f0'}`,
        zIndex: 1000,
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* File Preview Area */}
        {fileList.length > 0 && (
          <div
            style={{
              marginBottom: '12px',
              padding: '12px',
              background: isDark ? '#262626' : '#f5f5f5',
              borderRadius: '8px',
              border: `1px solid ${isDark ? '#424242' : '#d9d9d9'}`,
            }}
          >
            <div style={{ 
              fontSize: '12px', 
              color: isDark ? '#d9d9d9' : '#666666',
              marginBottom: '8px',
              fontWeight: '500'
            }}>
              {fileList.length} file{fileList.length > 1 ? 's' : ''} selected:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {fileList.map((file) => (
                <div
                  key={file.uid}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 10px',
                    background: isDark ? '#1f1f1f' : '#ffffff',
                    border: `1px solid ${isDark ? '#424242' : '#d9d9d9'}`,
                    borderRadius: '6px',
                    fontSize: '12px',
                    maxWidth: '200px',
                  }}
                >
                  {file.type?.startsWith('image/') && file.originFileObj ? (
                    <img
                      src={URL.createObjectURL(file.originFileObj)}
                      alt={file.name}
                      style={{
                        width: '20px',
                        height: '20px',
                        objectFit: 'cover',
                        borderRadius: '3px',
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: '16px' }}>
                      {getFileIcon(file.type || '')}
                    </span>
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        color: isDark ? '#ffffff' : '#000000',
                        fontWeight: '500',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {file.name}
                    </div>
                    <div style={{ color: isDark ? '#999999' : '#666666' }}>
                      {formatFileSize(file.size || 0)}
                    </div>
                  </div>
                  <Button
                    type="text"
                    size="small"
                    icon={<DeleteOutlined />}
                    onClick={() => removeFile(file)}
                    style={{
                      color: isDark ? '#ff4d4f' : '#ff4d4f',
                      padding: '2px',
                      minWidth: 'auto',
                      height: 'auto',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '0px',
          }}
        >
          <Upload {...uploadProps} ref={uploadRef}>
            <Tooltip title="Attach files (PDF, Images, Documents)">
              <Button
                type="text"
                icon={<PaperClipOutlined />}
                disabled={isTyping}
                style={{
                  height: 'auto',
                  minHeight: '40px',
                  borderRadius: '24px 0 0 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: '16px',
                  paddingRight: '12px',
                  fontSize: '16px',
                  color: isDark ? '#d9d9d9' : '#666666',
                  background: isDark ? '#262626' : '#fafafa',
                  border: `1px solid ${isDark ? '#424242' : '#d9d9d9'}`,
                  borderRight: 'none',
                }}
              />
            </Tooltip>
          </Upload>
          <TextArea
            ref={textAreaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={fileList.length > 0 ? "Add a message (optional)..." : "Ask me about bookings, payments, or generate custom reports..."}
            autoSize={{ minRows: 1, maxRows: 4 }}
            disabled={isTyping}
            style={{
              flex: 1,
              resize: 'none',
              borderRadius: '0',
              background: isDark ? '#262626' : '#fafafa',
              border: `1px solid ${isDark ? '#424242' : '#d9d9d9'}`,
              borderLeft: 'none',
              borderRight: 'none',
              color: isDark ? '#ffffff' : '#000000',
              fontSize: '14px',
              padding: '12px 16px',
              maxHeight: '120px',
              overflowY: 'auto',
              boxSizing: 'border-box',
              minHeight: "40px !important"
            }}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSend}
            disabled={(!message.trim() && fileList.length === 0) || isTyping}
            loading={isTyping}
            style={{
              height: 'auto',
              minHeight: '40px',
              borderRadius: '0 24px 24px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: '20px',
              paddingRight: '20px',
              fontSize: '14px',
              fontWeight: '500',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ visibility: isTyping ? 'hidden' : 'visible' }}>
              {fileList.length > 0 && !message.trim() ? 'Send Files' : 'Send'}
            </span>
          </Button>
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '12px',
            color: isDark ? '#666666' : '#999999',
            fontSize: '12px',
            fontWeight: '400',
          }}
        >
          Press Enter to send, Shift+Enter for new line
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
