import React from 'react';
import { Avatar, Card } from 'antd';
import { RobotOutlined } from '@ant-design/icons';
import { useAppSelector } from '../hooks/useAppSelector';

const TypingIndicator: React.FC = () => {
  const isDark = useAppSelector((state) => state.theme.isDark);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
      }}
    >
      <Avatar
        size={40}
        style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
        icon={<RobotOutlined />}
      >
        AI
      </Avatar>

      <Card
        size="small"
        style={{
          background: isDark ? '#262626' : '#ffffff',
          border: `1px solid ${isDark ? '#424242' : '#f0f0f0'}`,
          borderRadius: '16px',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <div className="typing-dot" style={{ 
            width: '8px', 
            height: '8px', 
            borderRadius: '50%', 
            background: isDark ? '#ffffff' : '#666666',
            animation: 'typing 1.4s infinite ease-in-out',
            animationDelay: '0s'
          }} />
          <div className="typing-dot" style={{ 
            width: '8px', 
            height: '8px', 
            borderRadius: '50%', 
            background: isDark ? '#ffffff' : '#666666',
            animation: 'typing 1.4s infinite ease-in-out',
            animationDelay: '0.2s'
          }} />
          <div className="typing-dot" style={{ 
            width: '8px', 
            height: '8px', 
            borderRadius: '50%', 
            background: isDark ? '#ffffff' : '#666666',
            animation: 'typing 1.4s infinite ease-in-out',
            animationDelay: '0.4s'
          }} />
        </div>
      </Card>

      <style>
        {`
          @keyframes typing {
            0%, 60%, 100% {
              transform: scale(1);
              opacity: 0.7;
            }
            30% {
              transform: scale(1.2);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TypingIndicator;