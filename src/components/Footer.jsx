import React, { useContext } from 'react';
import { Globe, Github, Linkedin, Twitter, Codepen, AtSign, Instagram } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
    const { content } = useContext(LanguageContext);
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`py-24 px-4 text-center transition-colors duration-300 ${theme === 'dark' ? 'bg-[#252128]' : 'bg-gray-50'}`}>
            <h3 className={`text-4xl font-bold mb-8 max-w-lg mx-auto leading-tight ${theme === 'dark' ? 'text-[#8F88FF]' : 'text-[#4731D3]'}`}>
                {content.footer.title}
            </h3>
            <p className={`mb-8 max-w-md mx-auto ${theme === 'dark' ? 'text-white' : 'text-[#120B39]'}`}>
                {content.footer.text}
            </p>
            <a href={`mailto:${content.footer.email}`} className={`block mb-8 underline font-medium ${theme === 'dark' ? 'text-[#8F88FF]' : 'text-[#4731D3]'}`}>
                {content.footer.email}
            </a>
            <div className="flex justify-center gap-6 text-[#4731D3]">
                <AtSign size={20} className={theme === 'dark' ? 'text-white' : ''} />
                <Twitter size={20} className={theme === 'dark' ? 'text-[#CBF281]' : ''} />
                <Codepen size={20} className={theme === 'dark' ? 'text-[#0077b5]' : ''} />
                <Instagram size={20} className={theme === 'dark' ? 'text-[#df89bb]' : ''} />
            </div>
        </section>
    );
};

export default Footer;