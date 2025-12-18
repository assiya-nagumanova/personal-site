import React, { useEffect, useContext, useRef } from 'react';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import { LanguageProvider, LanguageContext } from './context/LanguageContext';
import { postDataToApi } from './services/api';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

const MainContent = () => {
  const { theme } = useContext(ThemeContext);
  const { language, toggleLanguage, content } = useContext(LanguageContext);

  return (
    <div className={`font-sans min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#252128]' : 'bg-white'}`}>
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
    </div>
  );
};

const App = () => {
  // API İsteği simülasyonu (Component Mount)
  useEffect(() => {
    const dataToSend = {
        title: "Workintech Student Project",
        body: "Portfolio Initialized",
        userId: 1,
    };
    
    postDataToApi(dataToSend).then(response => {
        console.log("Response:", response);
    });
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;

  