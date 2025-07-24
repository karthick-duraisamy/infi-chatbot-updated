import React, { useEffect } from 'react';
import { ConfigProvider, theme, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { clearMessages } from '../store/chatSlice';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import ThemeToggle from './ThemeToggle';
import { useLazyGetresponse1dataQuery } from '../services/chatService';

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
      <div
        style={{
          height: '100vh',
          display: 'flex',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          background: isDark ? '#141414' : '#f5f5f5',
        }}
      >
        {/* Left Sidebar */}
        <div
          style={{
            width: '280px',
            background: isDark ? '#1f1f1f' : '#ffffff',
            borderRight: `1px solid ${isDark ? '#424242' : '#e8e8e8'}`,
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 16px',
          }}
        >
          {/* Sidebar Header */}
          <div style={{ marginBottom: '24px' }}>
            <h2
              style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: 600,
                color: '#4285f4',
                marginBottom: '20px',
              }}
            >
              Airline Assistant
            </h2>

            <Button
              type="primary"
              icon={<PlusOutlined />}
              block
              onClick={handleNewChat}
              style={{
                height: '40px',
                borderRadius: '8px',
                fontWeight: 500,
                background: '#4285f4',
                borderColor: '#4285f4',
              }}
            >
              New Chat
            </Button>
          </div>

          {/* Theme Toggle at bottom */}
          <div style={{ marginTop: 'auto' }}>
            <ThemeToggle />
          </div>
        </div>

        {/* Main Chat Area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            background: isDark ? '#141414' : '#f5f5f5',
          }}
        >
          {/* Chat Header */}
          <div
            style={{
              padding: '16px 24px',
              background: isDark ? '#1f1f1f' : '#ffffff',
              borderBottom: `1px solid ${isDark ? '#424242' : '#e8e8e8'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: '16px',
                  fontWeight: 600,
                  color: isDark ? '#ffffff' : '#000000',
                }}
              >
                Airline Report Assistant
              </h3>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '4px',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#52c41a',
                    marginRight: '6px',
                  }}
                />
                <span
                  style={{
                    fontSize: '12px',
                    color: '#52c41a',
                    fontWeight: 500,
                  }}
                >
                  Online
                </span>
              </div>
            </div>
          </div>

          {/* Chat Content */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <MessageList />
            <ChatInput />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default ChatContainer;