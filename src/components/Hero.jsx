import React, { useContext } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { content } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <section className="relative w-full overflow-hidden min-h-[500px] flex items-center">
      
      {/* --- ARKA PLAN KATMANI --- */}
      <div className="absolute inset-0 flex h-full w-full">
        {/* Sol Taraf (Mor) - Ekranın %60-70'ini kaplar */}
        <div className={`w-2/3 h-full transition-colors duration-300 ${theme === 'dark' ? 'bg-dark-purple' : 'bg-brand-purple'}`} ></div>
        {/* Sağ Taraf (Yeşil) */}
        <div className={`w-1/3 h-full transition-colors duration-300 ${theme === 'dark' ? 'bg-dark-green' : 'bg-brand-green'}`}></div>
      </div>

      {/* --- İÇERİK KATMANI (Ortalanmış Container) --- */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* SOL: Yazılar */}
          <div className="flex-1 space-y-6 pt-10 md:pt-0">
            <h2 className="text-[#CBF281] font-bold text-xl">almila</h2>
            
            <h1 className="text-[#CBF281] font-bold text-4xl md:text-6xl leading-tight">
              {content.hero.line1} <br />
              <span className="text-white">{content.hero.line2}</span>
            </h1>
            
            <p className="text-white text-lg max-w-md leading-relaxed">
              {content.hero.desc}
            </p>
            
            <div className="flex gap-4 pt-2">
              {/* Github Button */}
              <button className={`flex items-center gap-2 px-6 py-2 rounded border transition-all ${theme === 'dark' ? 'bg-white text-black border-white hover:bg-[#261a77] hover:text-white': 'bg-white text-[#4731D3] border-white hover:bg-[#4731D3] hover:text-white'}`}>
                <Github size={18} /> {content.hero.github}
              </button>
              
              {/* Linkedin Button */}
              <button className={`flex items-center gap-2 px-6 py-2 rounded border transition-all ${theme === 'dark' ? 'bg-white text-black border-white hover:bg-[#261a77] hover:text-white' : 'bg-white text-[#4731D3] border-white hover:bg-[#4731D3] hover:text-white'}`}>
                <Linkedin size={18} /> {content.hero.linkedin}
              </button>
            </div>
          </div>

          {/* SAĞ: Resim */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <img 
              // DİKKAT: Vite'da public klasöründeki resimler için başına nokta koyma.
              src="/hero-profile.png" 
              alt="Profile" 
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-3xl shadow-2xl relative z-10"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;