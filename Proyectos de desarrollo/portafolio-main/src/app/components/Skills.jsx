"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

const Skills = () => {
  const skillsData = [
    {
      name: "React",
      desc: "Modern UI Library",
      img: "/images/react.png", // ¡Descarga este logo y guárdalo!
      url: "https://react.dev/",
    },
    {
      name: "Node.js",
      desc: "JavaScript Runtime",
      img: "/images/node.png", // ¡Descarga este logo y guárdalo!
      url: "https://nodejs.org/",
    },
    {
      name: "TypeScript",
      desc: "Typed JavaScript",
      img: "/images/typescript.png", // ¡Descarga este logo y guárdalo!
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Laravel",
      desc: "PHP Framework",
      img: "/images/laravel.png",
      url: "https://laravel.com/",
    },
    {
      name: "SQL Server",
      desc: "Database Management",
      img: "/images/sql.png",
      url: "https://www.microsoft.com/en-us/sql-server",
    },
    {
      name: "C#",
      desc: ".NET Development",
      img: "/images/c.png",
      url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "Tailwind CSS",
      desc: "Utility-First CSS",
      img: "/images/tailwind.png",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Vue.js",
      desc: "Progressive Framework",
      img: "/images/vue.png",
      url: "https://vuejs.org/",
    },
  ];

  // --- Animaciones ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/10 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg shadow-lg shadow-violet-500/10">
              <Code2 className="text-fuchsia-500 w-6 h-6" />
            </div>
            <h2 className="text-4xl font-bold text-white">Tech Stack</h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto md:mx-0">
            Tecnologías y herramientas clave que utilizo para construir
            soluciones escalables.
          </p>
        </motion.div>

        {/* Grid de Tarjetas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((skill, index) => (
            <motion.a
              key={index}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(15, 23, 42, 1)",
                borderColor: "rgba(167, 139, 250, 0.5)", // Borde violeta al hover
              }}
              className="group relative flex flex-col items-center p-6 bg-[#0B1120] rounded-2xl border border-slate-800 transition-all cursor-pointer shadow-lg hover:shadow-violet-900/20"
            >
              {/* Círculo de fondo para el logo */}
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-slate-900/50 rounded-full group-hover:bg-violet-500/10 transition-colors">
                <img
                  src={skill.img}
                  alt={`${skill.name} logo`}
                  // Placeholder por si no encuentra la imagen
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                  className="w-10 h-10 object-contain filter drop-shadow-md group-hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.5)] transition-all"
                />
                {/* Icono fallback si falla la imagen */}
                <img
                  src={skill.img}
                  className="hidden"
                  onError={(e) => {
                    e.currentTarget.parentNode.innerHTML =
                      '<svg class="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>';
                  }}
                />
              </div>

              {/* Texto */}
              <div className="text-center">
                <h4 className="text-lg font-bold text-white mb-1 group-hover:text-fuchsia-400 transition-colors">
                  {skill.name}
                </h4>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                  {skill.desc}
                </p>
              </div>

              {/* Flechita discreta */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-violet-500" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
