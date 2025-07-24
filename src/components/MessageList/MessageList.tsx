import React, { useEffect, useRef } from 'react';
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
        padding: '0',
        background: isDark ? '#141414' : '#f5f5f5',
      }}
    >
      {messages.length === 0 ? (
        <div
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            <h1
              style={{
                fontSize: '32px',
                fontWeight: 600,
                color: isDark ? '#ffffff' : '#000000',
                margin: '0 0 16px 0',
                lineHeight: 1.2,
              }}
            >
              Welcome to Airline Report Assistant!
            </h1>
            <p
              style={{
                fontSize: '16px',
                color: isDark ? '#d9d9d9' : '#666666',
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              Ask me about airline reports, schedules, or analytics to get started.
            </p>
          </div>
        </div>
      ) : (
        <div style={{ padding: '20px' }}>
          {messages.map((message, index) => (
              <MessageItem 
                key={message.id} 
                message={message} 
                isLastMessage={index === messages.length - 1}
              />
            ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
};

export default MessageList;