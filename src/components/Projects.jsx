import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';

const Projects = () => {
  const { content } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  
  return (
    <section className={`py-20 px-4 md:px-0 transition-colors duration-300 ${theme === 'dark' ? 'bg-dark-green' : 'bg-[#CBF281]'}`}>
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[#4731D3] text-4xl font-bold mb-12">{content.projects.title}</h3>
        
        <div className="flex flex-col gap-10">
            {content.projects.items.map((item) => (
                // KART KAPSAYICISI: Mobilde alt alta (flex-col), Masaüstünde yan yana (md:flex-row)
                <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row h-auto">
                     
                     {/* SOL TARA: RESİM ALANI (%40) */}
                     <div className="w-full md:w-[40%] h-64 md:h-auto bg-gray-200 relative group">
                         {item.image && <img src={item.image} alt={item.title} className="w-full h-full object-cover" />}
                     </div>

                     {/* SAĞ TARAF: METİN ALANI (%60) */}
                     <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-between">
                        <div>
                            <h4 className="text-[#4731D3] text-3xl font-bold mb-4">{item.title}</h4>
                            <p className="text-gray-600 mb-6 text-base leading-relaxed">
                                {item.desc}
                            </p>
                            
                            {/* Etiketler */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {item.tags.map(tag => (
                                    <span key={tag} className="bg-[#4731D3] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Linkler */}
                        <div className="flex items-center gap-6 mt-auto">
                            <a href="#" className="text-[#120B39] font-bold underline hover:text-[#4731D3] transition-colors">
                                {content.projects.link}
                            </a>
                            <a href="#" className="text-[#120B39] font-bold underline hover:text-[#4731D3] transition-colors">
                                Github
                            </a>
                        </div>
                     </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;