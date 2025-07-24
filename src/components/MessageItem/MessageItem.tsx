import React from 'react';
import { Avatar, Typography, Card, Button, Tooltip, Image } from 'antd';
import { RobotOutlined, DownloadOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Message } from '../../store/chatSlice';
import './MessageItem.scss';

const { Text, Paragraph } = Typography;

interface MessageItemProps {
  message: Message;
  isLastMessage?: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, isLastMessage = false }) => {
  const { currentUser } = useAppSelector((state) => state.chat);
  const isDark = useAppSelector((state) => state.theme.isDark);

  const handleFilePreview = (attachment: any) => {
    if (attachment.preview) {
      const imageElement = document.querySelector(`img[src="${attachment.preview}"]`) as HTMLImageElement;
      if (imageElement) {
        imageElement.click();
      }
    }
  };

  const handleDownload = (attachment: any) => {
    if (attachment.downloadUrl) {
      const link = document.createElement('a');
      link.href = attachment.downloadUrl;
      link.download = attachment.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (attachment.url) {
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
    <div className={`message-item message-item--${isUser ? 'user' : 'ai'}`}>
      <Avatar
        size={40}
        className={`message-avatar ${isLastMessage ? 'last-message-avatar' : ''} ${isUser ? 'user-avatar' : 'ai-avatar'}`}
        icon={!isUser ? <RobotOutlined /> : undefined}
      >
        {isUser ? getUserInitials() : 'AI'}
      </Avatar>

      <div className={`message-content message-content--${isUser ? 'user' : 'ai'}`}>
        <Card
          size="small"
          className={`message-card message-card--${isUser ? 'user' : 'ai'}-${isDark ? 'dark' : 'light'}`}
          styles={{
            body: {
              padding: '12px 16px',
            },
          }}
        >
          <Paragraph className={`message-text message-text--${isUser ? 'user' : `ai-${isDark ? 'dark' : 'light'}`}`}>
            {message.content}
          </Paragraph>

          {/* Render Attachments */}
          {message.attachments && message.attachments.length > 0 && (
            <div className={`attachments-container attachments-container--${isUser ? 'user' : 'ai'} ${message.content ? 'attachments-container--has-content' : ''}`}>
              {message.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className={`attachment-item attachment-item--${isUser ? 'user' : 'ai'}-${isDark ? 'dark' : 'light'}`}
                >
                  {/* File Preview/Icon */}
                  {attachment.preview ? (
                    <Image
                      src={attachment.preview}
                      alt={attachment.name}
                      width={50}
                      height={50}
                      className="file-preview"
                      preview={{
                        mask: <div style={{ fontSize: '11px' }}>View</div>
                      }}
                    />
                  ) : (
                    <div
                      className={`file-icon-container file-icon-container--${isUser ? 'user' : 'ai'}-${isDark ? 'dark' : 'light'} ${attachment.preview ? 'file-icon-container--clickable' : ''}`}
                      onClick={() => attachment.preview && handleFilePreview(attachment)}
                    >
                      {getFileIcon(attachment.type)}
                      {attachment.preview && (
                        <div className="view-overlay">
                          View
                        </div>
                      )}
                    </div>
                  )}

                  {/* File Info */}
                  <div 
                    className={`file-info-container ${attachment.preview ? 'file-info-container--clickable' : ''}`}
                    onClick={() => attachment.preview && handleFilePreview(attachment)}
                  >
                    <div
                      className={`file-name file-name--${isUser ? 'user' : 'ai'}-${isDark ? 'dark' : 'light'}`}
                      title={attachment.name}
                    >
                      {attachment.name}
                    </div>
                    <div className={`file-size file-size--${isUser ? 'user' : 'ai'}-${isDark ? 'dark' : 'light'}`}>
                      {formatFileSize(attachment.size)}
                    </div>
                    {attachment.preview && (
                      <Tooltip title="View file">
                        <div className={`file-name-overlay file-name-overlay--${isUser ? 'user' : 'ai'}-${isDark ? 'dark' : 'light'}`}>
                          Click to view
                        </div>
                      </Tooltip>
                    )}
                  </div>

                  {/* Download Button (for AI messages) */}
                  {!isUser && (attachment.downloadUrl || attachment.url) && (
                    <Tooltip title="Download file">
                      <Button
                        type="text"
                        size="small"
                        icon={<DownloadOutlined />}
                        onClick={() => handleDownload(attachment)}
                        className="download-btn"
                      />
                    </Tooltip>
                  )}
                </div>
              ))}
            </div>
          )}
        </Card>

        <Text className={`message-time message-time--${isUser ? 'user' : 'ai'} message-time--${isDark ? 'dark' : 'light'}`}>
          {formattedTime}
        </Text>
      </div>
    </div>
  );
};

export default MessageItem;