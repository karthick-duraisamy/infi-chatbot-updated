import React, { useEffect, useRef } from 'react';
import { List, Spin } from 'antd';
import { useAppSelector } from '../hooks/useAppSelector';
import MessageItem from './MessageItem';
import TypingIndicator from './TypingIndicator';

const MessageList: React.FC = () => {
  const { messages, isTyping } = useAppSelector((state) => state.chat);
  const isDark = useAppSelector((state) => state.theme.isDark);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div
      style={{
        flex: 1,
        overflow: 'auto',
        background: isDark ? '#141414' : '#fafafa',
      }}
    >
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '24px',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <List
          dataSource={messages}
          split={false}
          style={{ flex: 1 }}
          renderItem={(message) => (
            <List.Item style={{ border: 'none', padding: '12px 0' }}>
              <MessageItem message={message} />
            </List.Item>
          )}
        />
        
        {isTyping && (
          <div style={{ padding: '12px 0' }}>
            <TypingIndicator />
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;