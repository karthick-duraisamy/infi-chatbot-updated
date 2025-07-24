import React from 'react';
import { Avatar, Typography, Card, Button, Tooltip, Image } from 'antd';
import { RobotOutlined, DownloadOutlined } from '@ant-design/icons';
import { useAppSelector } from '../hooks/useAppSelector';
import { Message } from '../store/chatSlice';

const { Text, Paragraph } = Typography;

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const { currentUser } = useAppSelector((state) => state.chat);
  const isDark = useAppSelector((state) => state.theme.isDark);

  const handleDownload = (attachment: any) => {
    if (attachment.downloadUrl) {
      // Handle base64 or blob URLs
      const link = document.createElement('a');
      link.href = attachment.downloadUrl;
      link.download = attachment.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (attachment.url) {
      // Handle regular URLs
      window.open(attachment.url, '_blank');
    }
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

  const getUserInitials = () => {
    if (currentUser.firstName && currentUser.lastName) {
      return `${currentUser.firstName[0]}${currentUser.lastName[0]}`.toUpperCase();
    }
    return currentUser.username.slice(0, 2).toUpperCase();
  };

  const isUser = message.sender === 'user';
  const formattedTime = new Date(message.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isUser ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
        gap: '12px',
        width: '100%',
        animation: 'messageSlideIn 0.4s ease-out',
      }}
    >
      <Avatar
        size={40}
        style={{
          flexShrink: 0,
          background: isUser 
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            : 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
          animation: isUser ? 'avatarBounceRight 0.5s ease-out' : 'avatarBounceLeft 0.5s ease-out',
        }}
        icon={!isUser ? <RobotOutlined /> : undefined}
        className="message-avatar"
      >
        {isUser ? getUserInitials() : 'AI'}
      </Avatar>

      <div
        style={{
          flex: 1,
          maxWidth: isUser ? '70%' : '85%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isUser ? 'flex-end' : 'flex-start',
        }}
      >
        <Card
          size="small"
          style={{
            background: isUser 
              ? (isDark ? '#1890ff' : '#1890ff')
              : (isDark ? '#262626' : '#ffffff'),
            border: isUser 
              ? 'none'
              : `1px solid ${isDark ? '#424242' : '#f0f0f0'}`,
            borderRadius: '16px',
            marginBottom: '4px',
            boxShadow: isDark 
              ? '0 2px 8px rgba(0, 0, 0, 0.3)'
              : '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
          styles={{
            body: {
              padding: '12px 16px',
            },
          }}
        >
          <Paragraph
            style={{
              margin: 0,
              color: isUser 
                ? 'white'
                : (isDark ? '#ffffff' : '#000000'),
              fontSize: '14px',
              lineHeight: '1.5',
              whiteSpace: 'pre-wrap',
            }}
          >
            {message.content}
          </Paragraph>
          
          {/* Render Attachments */}
          {message.attachments && message.attachments.length > 0 && (
            <div style={{ marginTop: message.content ? '12px' : '0' }}>
              {message.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 12px',
                    background: isUser 
                      ? 'rgba(255, 255, 255, 0.1)'
                      : (isDark ? '#1f1f1f' : '#f5f5f5'),
                    border: isUser 
                      ? '1px solid rgba(255, 255, 255, 0.2)'
                      : `1px solid ${isDark ? '#424242' : '#d9d9d9'}`,
                    borderRadius: '8px',
                    marginBottom: '8px',
                  }}
                >
                  {/* File Preview/Icon */}
                  {attachment.preview ? (
                    <Image
                      src={attachment.preview}
                      alt={attachment.name}
                      width={50}
                      height={50}
                      style={{ 
                        borderRadius: '6px',
                        objectFit: 'cover'
                      }}
                      preview={{
                        mask: <div style={{ fontSize: '11px' }}>View</div>
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        background: isUser 
                          ? 'rgba(255, 255, 255, 0.1)'
                          : (isDark ? '#262626' : '#ffffff'),
                        borderRadius: '6px',
                        border: `1px solid ${isDark ? '#424242' : '#e1e5e9'}`,
                      }}
                    >
                      {getFileIcon(attachment.type)}
                    </div>
                  )}
                  
                  {/* File Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        color: isUser 
                          ? 'rgba(255, 255, 255, 0.9)'
                          : (isDark ? '#ffffff' : '#000000'),
                        fontWeight: '500',
                        fontSize: '14px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        marginBottom: '4px',
                      }}
                      title={attachment.name}
                    >
                      {attachment.name}
                    </div>
                    <div
                      style={{
                        color: isUser 
                          ? 'rgba(255, 255, 255, 0.7)'
                          : (isDark ? '#999999' : '#666666'),
                        fontSize: '12px',
                      }}
                    >
                      {formatFileSize(attachment.size)}
                    </div>
                  </div>
                  
                  {/* Download Button (for AI messages) */}
                  {!isUser && (attachment.downloadUrl || attachment.url) && (
                    <Tooltip title="Download file">
                      <Button
                        type="text"
                        size="small"
                        icon={<DownloadOutlined />}
                        onClick={() => handleDownload(attachment)}
                        style={{
                          color: isDark ? '#1890ff' : '#1890ff',
                          padding: '6px',
                          minWidth: 'auto',
                          height: 'auto',
                          borderRadius: '6px',
                          transition: 'all 0.2s ease',
                        }}
                        className="download-btn"
                      />
                    </Tooltip>
                  )}
                </div>
              ))}
            </div>
          )}
        </Card>
        
        <Text
          type="secondary"
          style={{
            fontSize: '11px',
            color: isDark ? '#999999' : '#666666',
            marginLeft: isUser ? 0 : '4px',
            marginRight: isUser ? '4px' : 0,
          }}
        >
          {formattedTime}
        </Text>
      </div>
    </div>
  );
};

export default MessageItem;