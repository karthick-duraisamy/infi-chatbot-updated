import React from 'react';
import { Card, Avatar, Button, Tooltip } from 'antd';
import { UserOutlined, RobotOutlined, DownloadOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Message, addUserMessage, sendMessageToAI } from '../../store/chatSlice';
import './MessageItem.scss';

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isDark = useAppSelector((state) => state.theme.isDark);
  const dispatch = useAppDispatch();
  const isUser = message.sender === 'user';

  const handleDownload = (attachment: any) => {
    if (attachment.downloadUrl) {
      const link = document.createElement('a');
      link.href = attachment.downloadUrl;
      link.download = attachment.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleImageClick = (attachment: any) => {
    if (attachment.url || attachment.preview) {
      window.open(attachment.url || attachment.preview, '_blank');
    }
  };

  const handleChoiceClick = (choiceContent: string) => {
    // Send the choice as a new user message
    dispatch(addUserMessage({ content: choiceContent }));
    dispatch(sendMessageToAI({ message: choiceContent }));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatTime = (timestamp: number): string => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const renderContent = (content: string) => {
    // Use a regular expression to match all <table> tags and their content
    const tableRegex = /(<table[^>]*>[\s\S]*?<\/table>)/gi;
    // Replace each table with the table wrapped in a div with class 'table-scroll-container'
    const modifiedContent = content.replace(tableRegex, '<div class="table-scroll-container">$1</div>');

    return <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />;
  };

  return (
    <div className={`message-item message-item--${isUser ? 'user' : 'ai'} message-item--${isDark ? 'dark' : 'light'}`}>
      <Avatar 
        size={40} 
        icon={isUser ? <UserOutlined /> : <RobotOutlined />}
        className={`message-avatar ${isUser ? 'user-avatar' : 'ai-avatar'}`}
      >
        {isUser ? 'U' : 'AI'}
      </Avatar>

      <div className={`message-content message-content--${isUser ? 'user' : 'ai'}`}>
        <div className="message-bubble-container">
          <Card 
            size="small"
            className={`message-card message-card--${isUser ? 'user' : 'ai'}-${isDark ? 'dark' : 'light'}`}
            styles={{
              body: { padding: '12px 16px' }
            }}
          >
            <div className={`message-text message-text--${isUser ? 'user' : 'ai'} message-text--${isDark ? 'dark' : 'light'}`}>
              {renderContent(message.content)}
            </div>

            {/* Choices/Options */}
            {!isUser && message.choices && message.choices.length > 1 && (
              <div className="message-choices">
                <div className="choices-label">Choose an option:</div>
                {message.choices.slice(1).map((choice, index) => (
                  <Button
                    key={index}
                    type="default"
                    size="small"
                    onClick={() => handleChoiceClick(choice.message.content)}
                    className={`choice-button choice-button--${isDark ? 'dark' : 'light'}`}
                  >
                    {choice.message.content}
                  </Button>
                ))}
              </div>
            )}

            {/* File Attachments */}
            {message.attachments && message.attachments.length > 0 && (
              <div className="message-attachments">
                {message.attachments.map((attachment) => (
                  <div key={attachment.id} className="attachment-item">
                    {attachment.type.startsWith('image/') ? (
                      <div 
                        className="attachment-image" 
                        onClick={() => handleImageClick(attachment)}
                        style={{ cursor: 'pointer' }}
                      >
                        {attachment.preview && (
                          <img 
                            src={attachment.preview} 
                            alt={attachment.name}
                            style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '8px' }}
                          />
                        )}
                        <div className={`file-name-overlay file-name-overlay--${isUser ? 'user' : 'ai'}-${isDark ? 'dark' : 'light'}`}>
                          Click to view
                        </div>
                      </div>
                    ) : (
                      <div className={`attachment-file attachment-file--${isDark ? 'dark' : 'light'}`}>
                        <div className="file-info">
                          <div className="file-name">{attachment.name}</div>
                          <div className="file-size">{formatFileSize(attachment.size)}</div>
                        </div>
                      </div>
                    )}

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

          <div className={`message-time message-time--${isUser ? 'user' : 'ai'} message-time--${isDark ? 'dark' : 'light'}`}>
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;