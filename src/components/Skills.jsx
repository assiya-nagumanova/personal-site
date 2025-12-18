import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';

const Skills = () => {
  const { content } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  // NOT: Dosya isimlerini kendi public klasöründeki isimlerle değiştir
  const skills = [
    { name: "JAVASCRIPT", img: "/js.png" },
    { name: "NODE.JS", img: "/node.png" },
    { name: "REACT.JS", img: "/react.png" },
    { name: "VS CODE", img: "/vs.png" },
    { name: "REDUX", img: "/redux.svg" },
    { name: "FIGMA", img: "/figma.png" },
  ];

  // Listeyi ikiye bölüyoruz: İlk 3 ve Son 3
  const firstColumnSkills = skills.slice(0, 3);
  const secondColumnSkills = skills.slice(3, 6);

  return (
    <section className={`py-20 px-4 md:px-0 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#484148]' : 'bg-white'}`}>
       <div className="container mx-auto max-w-6xl px-6">
        
        {/* ANA GRID: Mobilde tek sütun, Masaüstünde 3 eşit sütun */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* --- 1. SÜTUN: BAŞLIK --- */}
            <div className="col-span-1">
                <h3 className={`text-4xl font-bold ${theme === 'dark' ? 'text-[#CBF281]' : 'text-[#4832D3]'}`}>
                    {content.skills}
                </h3>
            </div>

            {/* --- 2. SÜTUN: İLK 3 LOGO --- */}
            <div className="col-span-1 flex flex-col gap-8">
                {firstColumnSkills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                        {/* KARE LOGO KUTUSU */}
                        <div className="w-24 h-24 rounded-md overflow-hidden shadow-lg shrink-0">
                            <img 
                                src={skill.img} 
                                alt={skill.name} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        {/* SKILL ADI */}
                        <span className={`text-lg font-medium uppercase ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* --- 3. SÜTUN: SON 3 LOGO --- */}
            <div className="col-span-1 flex flex-col gap-8">
                {secondColumnSkills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                        {/* KARE LOGO KUTUSU */}
                        <div className="w-24 h-24 rounded-md overflow-hidden shadow-lg shrink-0">
                            <img 
                                src={skill.img} 
                                alt={skill.name} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        {/* SKILL ADI */}
                        <span className={`text-lg font-medium uppercase ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;