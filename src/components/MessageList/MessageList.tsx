import React, { useEffect, useRef } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import MessageItem from "../MessageItem/MessageItem";
import TypingIndicator from "../TypingIndicator/TypingIndicator";
import config from "../../config/config.json";
import "./MessageList.scss";

const MessageList: React.FC = () => {
  const { messages, isTyping } = useAppSelector((state) => state.chat);
  const isDark = useAppSelector((state) => state.theme.isDark);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className={`message-list message-list--${isDark ? "dark" : "light"}`}>
      {messages.length === 0 ? (
        <div className="welcome-container">
          <div className="welcome-content">
            <h1
              className={`welcome-content__title--${isDark ? "dark" : "light"}`}
            >
              {config.welcome_message || "Welcome to the Chat!"}
            </h1>
            <p
              className={`welcome-content__description--${
                isDark ? "dark" : "light"
              }`}
            >
              {config.welcome_subtitle || "Welcome to the Chat!"}
            </p>
          </div>
        </div>
      ) : (
        <div className="messages-container">
          {messages.map((message: any) => (
            <MessageItem
              key={message.id}
              message={message}
              // isLastMessage={index === messages.length - 1}
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
