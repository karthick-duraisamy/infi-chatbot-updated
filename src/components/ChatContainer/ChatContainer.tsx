import React, { useCallback, useState, useEffect } from 'react';
import { ConfigProvider, theme as antTheme, Button } from 'antd';
import { PlusOutlined, MessageOutlined, CloseOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { clearMessages } from '../../store/chatSlice';
import { useHeightCommunication } from '../../hooks/useHeightCommunication';
import { getEmbeddingConfig, applyEmbeddingStyles } from '../../utils/embeddingUtils';
import MessageList from '../MessageList/MessageList';
import ChatInput from '../ChatInput/ChatInput';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import config from '../../config/config.json';
import './ChatContainer.scss';

interface ChatContainerProps {
  userId?: string;
  token?: string;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ userId, token }) => {
  console.log('User ID:', userId);
  console.log('Token:', token);
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector((state) => state.theme);
  const embeddingConfig = getEmbeddingConfig();
  const [isHalfScreenOpen, setIsHalfScreenOpen] = useState(false);
  const isHalfScreenMode = config.displayView === 'half';

  // Enable height communication with parent window
  useHeightCommunication();

  // Apply embedding styles
  React.useEffect(() => {
    applyEmbeddingStyles(embeddingConfig);
  }, [embeddingConfig]);

  const handleNewChat = useCallback(() => {
    dispatch(clearMessages());
  }, [dispatch]);

  const toggleHalfScreen = useCallback(() => {
    setIsHalfScreenOpen(!isHalfScreenOpen);
  }, [isHalfScreenOpen]);

  const closeHalfScreen = useCallback(() => {
    setIsHalfScreenOpen(false);
  }, []);

  const themeConfig = {
    algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
    token: {
      colorPrimary: '#1890ff',
      borderRadius: 8,
      fontSize: 14,
      colorBgContainer: isDark ? '#1f1f1f' : '#ffffff',
      colorBgElevated: isDark ? '#262626' : '#ffffff',
      colorText: isDark ? '#ffffff' : '#000000',
      colorTextSecondary: isDark ? '#d9d9d9' : '#666666',
      colorBorder: isDark ? '#424242' : '#d9d9d9',
    },
  };

  // Render chatbot icon for half-screen mode
  if (isHalfScreenMode && !isHalfScreenOpen) {
    return (
      <ConfigProvider theme={themeConfig}>
        <button
          className={`chatbot-icon ${isHalfScreenMode ? 'show' : ''}`}
          onClick={toggleHalfScreen}
          aria-label="Open chat"
        >
          <MessageOutlined />
        </button>
      </ConfigProvider>
    );
  }

  return (
    <ConfigProvider theme={themeConfig}>
      <div className={`chat-container chat-container--${isDark ? 'dark' : 'light'} ${embeddingConfig.isEmbedded ? 'embedded' : ''} ${isHalfScreenMode ? 'half-screen' : ''} ${isHalfScreenOpen ? 'open' : ''}`}>
        {!embeddingConfig.hideSidebar && !isHalfScreenMode && (
          <div className={`sidebar sidebar--${isDark ? 'dark' : 'light'}`}>
            <div className="sidebar-header">
              <h2>Airline Assistant</h2>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                block
                onClick={handleNewChat}
                className="new-chat-button"
              >
                New Chat
              </Button>
            </div>
            <div className="theme-toggle-container">
              <ThemeToggle />
            </div>
          </div>
        )}
        <div className={`main-chat-area main-chat-area--${isDark ? 'dark' : 'light'} ${embeddingConfig.hideSidebar || isHalfScreenMode ? 'full-width' : ''}`}>
          {!embeddingConfig.hideHeader && (
            <div className={`chat-header chat-header--${isDark ? 'dark' : 'light'}`}>
              <div>
                <h3 className={`chat-header__title--${isDark ? 'dark' : 'light'}`}>
                  Airline Report Assistant
                </h3>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <button 
                  className="mobile-new-chat-btn"
                  onClick={handleNewChat}
                  aria-label="Start new chat"
                >
                  New Chat
                </button>
                {isHalfScreenMode && (
                  <button
                    className="mobile-new-chat-btn"
                    onClick={closeHalfScreen}
                    aria-label="Close chat"
                    style={{ background: '#ff4d4f' }}
                  >
                    <CloseOutlined />
                  </button>
                )}
              </div>
            </div>
          )}
          <div className="chat-content">
            <MessageList />
            <ChatInput />
          </div>
        </div>
      </div>
      {/* Chatbot icon for half-screen mode when closed */}
      {isHalfScreenMode && !isHalfScreenOpen && (
        <button
          className={`chatbot-icon ${isHalfScreenMode ? 'show' : ''}`}
          onClick={toggleHalfScreen}
          aria-label="Open chat"
        >
          <MessageOutlined />
        </button>
      )}
    </ConfigProvider>
  );
};

export default ChatContainer;