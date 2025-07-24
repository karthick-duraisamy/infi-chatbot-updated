import React, { useEffect } from 'react';
import { Layout, ConfigProvider, theme } from 'antd';
import { useAppSelector } from '../hooks/useAppSelector';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import ThemeToggle from './ThemeToggle';
import { useLazyGetresponse1dataQuery } from '../services/chatService';

const { Content, Header } = Layout;

const ChatContainer: React.FC = () => {
  const [getResponse, getResponseStatus] = useLazyGetresponse1dataQuery();

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
      <Layout style={{ height: '100vh', overflow: 'hidden' }}>
        <Header
          style={{
            background: isDark ? '#1f1f1f' : '#ffffff',
            borderBottom: `1px solid ${isDark ? '#424242' : '#f0f0f0'}`,
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
            zIndex: 1000,
          }}
        >
          {/* Left Side: Logo and Title */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '14px',
              }}
            >
              AI
            </div>
            <div style={{ lineHeight: 1.2 }}>
              <h3
                style={{
                  margin: 0,
                  color: isDark ? '#ffffff' : '#000000',
                  fontSize: '16px',
                }}
              >
                Airline Reporting Assistant
              </h3>
              <p
                style={{
                  margin: 0,
                  color: isDark ? '#d9d9d9' : '#666666',
                  fontSize: '12px',
                }}
              >
                Generate custom reports with natural language
              </p>
            </div>
          </div>

          {/* Right Side: Theme Toggle */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeToggle />
          </div>
        </Header>

        <Content
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 64px)',
            background: isDark ? '#141414' : '#fafafa',
            overflow: 'hidden',
          }}
        >
          <MessageList />
          <ChatInput />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default ChatContainer;
