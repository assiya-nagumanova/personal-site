import React, { createContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('app.theme', 'light');

  // Tema değişikliğini saklamak için useEffect
  useEffect(() => {
    const t = theme || 'light';
    document.documentElement.classList.toggle('dark', t === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme: theme || 'light', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};