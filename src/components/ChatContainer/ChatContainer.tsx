import React, { useCallback } from 'react';
import { ConfigProvider, theme as antTheme, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { clearMessages } from '../../store/chatSlice';
import { useHeightCommunication } from '../../hooks/useHeightCommunication';
import { getEmbeddingConfig, applyEmbeddingStyles } from '../../utils/embeddingUtils';
import MessageList from '../MessageList/MessageList';
import ChatInput from '../ChatInput/ChatInput';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './ChatContainer.scss';

const ChatContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector((state) => state.theme);
  const embeddingConfig = getEmbeddingConfig();

  // Enable height communication with parent window
  useHeightCommunication();

  // Apply embedding styles
  React.useEffect(() => {
    applyEmbeddingStyles(embeddingConfig);
  }, [embeddingConfig]);

  const handleNewChat = useCallback(() => {
    dispatch(clearMessages());
  }, [dispatch]);

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

  return (
    <ConfigProvider theme={themeConfig}>
      <div className={`chat-container chat-container--${isDark ? 'dark' : 'light'} ${embeddingConfig.isEmbedded ? 'embedded' : ''}`}>
        {!embeddingConfig.hideSidebar && (
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
        <div className={`main-chat-area main-chat-area--${isDark ? 'dark' : 'light'} ${embeddingConfig.hideSidebar ? 'full-width' : ''}`}>
          {!embeddingConfig.hideHeader && (
            <div className={`chat-header chat-header--${isDark ? 'dark' : 'light'}`}>
              <div>
                <h3 className={`chat-header__title--${isDark ? 'dark' : 'light'}`}>
                  Airline Report Assistant
                </h3>
              </div>
            </div>
          )}
          <div className="chat-content">
            <MessageList />
            <ChatInput />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default ChatContainer;