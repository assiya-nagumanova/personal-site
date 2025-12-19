import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';

const Profile = () => {
  const { content } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    // Arka plan rengi değişiyor.
    <section className={`py-20 px-4 md:px-0 transition-colors duration-300 ${
    theme === 'dark' ? 'bg-dark-purple text-white' : 'bg-[#4731D3] text-white'
  }`}>
      
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* ANA BAŞLIK */}
        <h3 className="text-[#CBF281] text-4xl font-bold mb-12">{content.profile.title}</h3>
        
        {/* GRID YAPISI: 3 Sütun */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            
            {/* --- 1. SÜTUN: TEMEL BİLGİLER --- */}
            <div className="space-y-6">
                <h4 className="text-2xl font-medium">{content.profile.basicTitle}</h4>
                <div className="space-y-4 text-sm md:text-base">
                    
                    <div className="flex items-center">
                        <span className="w-24 text-[#CBF281] font-bold">{content.profile.birthDate}</span>
                        <span className="flex-1 opacity-90">{content.profile.labels.birth}</span>
                    </div>

                    <div className="flex items-center">
                        <span className="w-24 text-[#CBF281] font-bold">{content.profile.city}</span>
                        <span className="flex-1 opacity-90">{content.profile.labels.cityVal}</span>
                    </div>

                    <div className="flex items-center">
                         <span className="w-24 text-[#CBF281] font-bold">{content.profile.education}</span>
                         <span className="flex-1 opacity-90">{content.profile.labels.eduVal}</span>
                    </div>

                     <div className="flex items-center">
                         <span className="w-24 text-[#CBF281] font-bold">{content.profile.role}</span>
                         <span className="flex-1 opacity-90">{content.profile.labels.roleVal}</span>
                    </div>
                </div>
            </div>

            {/* --- 2. SÜTUN: ORTA RESİM --- */}
            <div className="h-full flex items-center justify-center">
                <div className="w-full max-w-xs aspect-square rounded-xl overflow-hidden shadow-2xl bg-gray-800">
                    <img 
                        src="/profile.png" 
                        alt="Profile" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                </div>
            </div>

            {/* --- 3. SÜTUN: HAKKIMDA --- */}
            <div className="relative">
                <h4 className="text-2xl font-medium mb-6">
                    {content.profile.aboutTitle}
                    {/* Süsleme Çizgisi */}
                    <div className="hidden lg:block absolute -left-4 top-8 w-full h-[1px] bg-transparent"></div> 
                </h4>
                
                <div className="space-y-4 font-light leading-relaxed text-sm md:text-base opacity-90">
                    <p>{content.profile.p1}</p>
                    <p>{content.profile.p2}</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Profile;