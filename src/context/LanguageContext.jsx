import React, { createContext } from 'react';
import { DATA } from '../data';
import useLocalStorage from '../hooks/useLocalStorage';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage('app.lang', 'en'); //Dil localStorage'da saklanır

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'tr' : 'en'));
  };

  const currentLang = lang || 'en';

  return (
    <LanguageContext.Provider value={{ language: currentLang, toggleLanguage, content: DATA[currentLang] }}>
      {children}
    </LanguageContext.Provider>
  );
};