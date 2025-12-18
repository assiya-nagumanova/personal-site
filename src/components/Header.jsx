import React, { useContext } from 'react';
import { Moon, Sun } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { content, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="relative z-10 w-full overflow-hidden pt-6 pb-6">
        
        {/* --- ARKA PLAN KATMANI (2/3 Mor - 1/3 Yeşil) --- */}
        <div className="absolute inset-0 flex w-full h-full -z-10">
            {/* SOL 2/3: Mor Alan */}
            <div className={`w-2/3 h-full transition-colors duration-300 ${theme === 'dark' ? 'bg-dark-purple' : 'bg-brand-purple'}`}></div>
            
            {/* SAĞ 1/3: Yeşil Alan */}
            <div className={`w-1/3 h-full transition-colors duration-300 ${theme === 'dark' ? 'bg-dark-green' : 'bg-brand-green'}`}></div>
        </div>
        <div className="container mx-auto max-w-6xl px-6">
            
            {/* Grid/Flex Yapısı: Hero ile aynı hizayı yakalamak için */}
            <div className="flex w-full">
                
                {/* SOL 2/3: Boşluk (Hero'nun sol tarafı ile hizalı kalır) */}
                <div className="hidden md:block w-2/3"></div>

                {/* SAĞ 1/3: İçerik (Hero'nun sağ tarafı ile hizalı) */}
                <div className="w-full md:w-1/3 flex justify-end md:justify-start items-center gap-6 font-bold tracking-widest text-xs md:text-sm text-[#CBF281]">
                    
                    {/* Dil Butonu */}
                    <button onClick={toggleLanguage} className={`hover:opacity-75 transition-opacity uppercase ${theme === 'dark' ? 'text-brand-green' : 'text-dark-purple'}`}>
                       {content.header.lang}
                    </button>

                    {/* Dark Mode Toggle */}
                    <div className="flex items-center gap-2 cursor-pointer select-none" onClick={toggleTheme}>
                        <div className={`w-10 h-5 rounded-full relative transition-colors ${theme === 'dark' ? 'bg-black' : 'bg-[#CBF281]'}`}>
                            <div className={`absolute top-0.5 w-4 h-4 rounded-full transition-all duration-300 ${theme === 'dark' ? 'left-5' : 'left-0.5'}`}>
                              {theme === 'dark' ? <Moon size={12} className="text-brand-green m-0.5"/> : <Sun size={12} className="text-brand-purple m-0.5"/>}
                            </div>
                        </div>
                        <span className={theme === 'dark' ? 'text-[#CBF281]' : 'text-green-900'}>
    {theme === 'dark' ? content.header.mode : content.header.lightMode}
  </span>
                    </div>

                </div>
            </div>
        </div>
    </header>
  );
};

export default Header; 
