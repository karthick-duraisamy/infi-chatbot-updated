import React from 'react';
import { Button, Tooltip } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { toggleTheme } from '../store/themeSlice';

const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.theme.isDark);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Tooltip title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
      <Button
        type="text"
        icon={isDark ? <BulbOutlined /> : <BulbFilled />}
        onClick={handleToggle}
        style={{
          color: isDark ? '#ffffff' : '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        size="large"
      />
    </Tooltip>
  );
};

export default ThemeToggle;