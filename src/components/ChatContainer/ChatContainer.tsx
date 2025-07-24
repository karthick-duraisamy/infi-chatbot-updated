import React, { useEffect } from 'react';
import { ConfigProvider, theme, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { clearMessages } from '../../store/chatSlice';
import MessageList from '../MessageList/MessageList';
import ChatInput from '../ChatInput/ChatInput';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useLazyGetresponse1dataQuery } from '../../services/chatService';
import './ChatContainer.scss';

const ChatContainer: React.FC = () => {
  const [getResponse, getResponseStatus] = useLazyGetresponse1dataQuery();
  const dispatch = useAppDispatch();

  const handleNewChat = () => {
    dispatch(clearMessages());
  };

  useEffect(() => {
    getResponse();
  }, [])

  useEffect(() => {
    console.log(getResponseStatus)
  }, [getResponseStatus])

  const isDark = useAppSelector((state) => state.theme.isDark);

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.height = '100vh';
    document.body.style.overflow = 'hidden';
  }, []);

  const themeConfig = {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
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
      <div className={`chat-container chat-container--${isDark ? 'dark' : 'light'}`}>
        {/* Left Sidebar */}
        <div className={`sidebar sidebar--${isDark ? 'dark' : 'light'}`}>
          {/* Sidebar Header */}
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

          {/* Theme Toggle at bottom */}
          <div className="theme-toggle-container">
            <ThemeToggle />
          </div>
        </div>

        {/* Main Chat Area */}
        <div className={`main-chat-area main-chat-area--${isDark ? 'dark' : 'light'}`}>
          {/* Chat Header */}
          <div className={`chat-header chat-header--${isDark ? 'dark' : 'light'}`}>
            <div>
              <h3 className={`chat-header__title--${isDark ? 'dark' : 'light'}`}>
                Airline Report Assistant
              </h3>
              <div className="status-indicator">
                <div className="status-dot" />
                <span className="status-text">Online</span>
              </div>
            </div>
          </div>

          {/* Chat Content */}
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