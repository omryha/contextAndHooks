import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        width: '100%',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '50px',
        cursor: 'pointer',
      }}
    >
      {isLightTheme ? (
        <span role='img' aria-label='Light'>
          🌞
        </span>
      ) : (
        <span role='img' aria-label='Dark'>
          🌑
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
