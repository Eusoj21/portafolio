'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Skills = () => {
  // CONFIGURACIÓN: CAMBIA EL "#" POR LA URL REAL
  const skillsData = [
    {
      name: "Vue.js",
      desc: "Frontend Framework",
      img: "/images/vue.png",
      url: "https://vuejs.org/" // <--- PEGA AQUÍ TU ENLACE (Ej: https://vuejs.org/)
    },
    {
      name: "C#",
      desc: "Desktop & Backend Development",
      img: "/images/c.png",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/" // <--- PEGA AQUÍ TU ENLACE
    },
    {
      name: "Laravel",
      desc: "Web Development",
      img: "/images/laravel.png",
      url: "https://laravel.com/" // <--- PEGA AQUÍ TU ENLACE
    },
    {
      name: "Python",
      desc: "Programming Language",
      img: "/images/py.webp",
      url: "https://www.python.org/" // <--- PEGA AQUÍ TU ENLACE
    },
    {
      name: "SQL Server",
      desc: "Database Management",
      img: "/images/sql.png",
      url: "https://www.microsoft.com/en-us/sql-server" // <--- PEGA AQUÍ TU ENLACE
    },
    {
      name: "PHP",
      desc: "Backend Development",
      img: "/images/php.png",
      url: "https://www.php.net/" // <--- PEGA AQUÍ TU ENLACE
    },
    {
      name: "TailwindCSS",
      desc: "Utility-First CSS Framework",
      img: "/images/tailwind.png",
      url: "https://tailwindcss.com/" // <--- PEGA AQUÍ TU ENLACE
    },
    {
      name: "HTML",
      desc: "Web Markup Language",
      img: "/images/html.png",
      url: "https://developer.mozilla.org/es/docs/Web/HTML" // <--- PEGA AQUÍ TU ENLACE
    },
  ];

  // --- Configuración de Animación ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-24 bg-black text-white relative overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        
        {/* Título */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-slate-700/50 p-2 rounded-lg">
               <code className="text-blue-400 font-bold">{'</>'}</code>
            </div>
            <h2 className="text-4xl font-bold text-white">My Stacks</h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl">
            Core technologies I focus on for software development and problem solving.
          </p>
        </motion.div>

        {/* Grid de Tarjetas */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillsData.map((skill, index) => (
            <motion.a 
              key={index}
              href={skill.url}
              target="_blank" 
              rel="noopener noreferrer" 
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "rgba(30, 41, 59, 0.8)",
                borderColor: "rgba(96, 165, 250, 0.3)"
              }}
              // Agregamos z-index relativo para asegurar que sea cliqueable
              className="group relative z-20 flex items-center p-5 bg-[#111827] rounded-2xl border border-slate-800/60 transition-all cursor-pointer shadow-lg shadow-black/20"
            >
              {/* Imagen del Logo */}
              <div className="w-14 h-14 flex-shrink-0 mr-5 p-1 flex items-center justify-center">
                <img 
                  src={skill.img} 
                  alt={`${skill.name} logo`} 
                  className="w-full h-full object-contain filter drop-shadow-sm"
                />
              </div>
              
              {/* Texto */}
              <div className="flex-1 overflow-hidden">
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h4>
                <p className="text-sm text-slate-400 truncate">
                  {skill.desc}
                </p>
              </div>

              {/* Flecha */}
              <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;