"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  Briefcase,
  Instagram,
  Mail,
} from "lucide-react";
// 1. IMPORTAR EL HOOK
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
  const [time, setTime] = useState(new Date());
  // 2. USAR EL DICCIONARIO (t)
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const svTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "America/El_Salvador",
  });

  const stackIcons = [
    { name: "React", src: "/images/react.png" },
    { name: "Node.js", src: "/images/node.png" },
    { name: "TypeScript", src: "/images/typescript.png" },
    { name: "Laravel", src: "/images/laravel.png" },
    { name: "SQL", src: "/images/sql.png" },
  ];

  return (
    <section
      id="home"
      className="pt-32 pb-16 relative flex items-center min-h-[90vh]"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-auto md:h-[600px]">
          {/* Perfil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-2 md:row-span-2 bg-[#0B1120]/80 backdrop-blur-md border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-violet-500/50 transition-all"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-600/20 transition-all"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-4 border border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {/* 3. REEMPLAZAR TEXTO DURO POR VARIABLE */}
                {t.hero.badge}
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
                {t.hero.greeting} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 animate-gradient">
                  Josué Alvarado
                </span>
              </h1>
              <p className="text-slate-400 text-base md:text-lg max-w-md leading-relaxed mt-2">
                {t.hero.role}
              </p>
            </div>
            {/* Redes... (El código de los iconos es igual) */}
            <div className="flex flex-wrap gap-3 mt-6 md:mt-0 relative z-20">
              {/* ... Iconos GitHub, Linkedin, Instagram igual que antes ... */}
              <a
                href="https://github.com/Eusoj21"
                target="_blank"
                className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-white hover:text-black transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/josu%C3%A9-alvarado-2ab2a2331/"
                target="_blank"
                className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-[#0077b5] hover:text-white transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/_josueag._/"
                target="_blank"
                className="p-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-pink-600 hover:text-white transition-all"
              >
                <Instagram size={24} />
              </a>

              <a
                href="mailto:clarens2015cedral@gmail.com"
                className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center gap-2 shadow-lg hover:shadow-white/20 ml-auto md:ml-0"
              >
                {t.hero.contactBtn} <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Foto (Igual que antes) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-2 bg-slate-900 rounded-3xl overflow-hidden relative border border-slate-800 group h-80 md:h-full"
          >
            <img
              src="/images/yo.jpeg"
              alt="Josué Alvarado"
              className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-white font-medium flex items-center gap-2">
                <MapPin size={16} className="text-fuchsia-400" /> El Salvador
              </p>
              <p className="text-slate-400 text-sm font-mono">{svTime} (SV)</p>
            </div>
          </motion.div>

          {/* Estado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 bg-[#160d24] border border-violet-900/30 rounded-3xl p-6 flex flex-col justify-center hover:border-violet-500/50 transition-colors relative overflow-hidden"
          >
            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-violet-500/10 rounded-full blur-xl"></div>
            <div className="flex items-center gap-3 mb-2 relative z-10">
              <div className="p-2 bg-violet-500/20 rounded-lg text-violet-300">
                <Briefcase size={20} />
              </div>
              <h3 className="text-violet-200 font-bold">
                {t.hero.statusTitle}
              </h3>
            </div>
            <p className="text-xl font-bold text-white mb-1 relative z-10">
              {t.hero.statusText}
            </p>
            <p className="text-slate-400 text-sm relative z-10">
              {t.hero.statusSub}
            </p>
          </motion.div>

          {/* Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-violet-900/50 to-fuchsia-900/50 border border-white/10 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
            <div className="relative z-10 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-white font-bold text-2xl mb-1">
                {t.hero.stackTitle}
              </h3>
              <p className="text-slate-300 text-sm">{t.hero.stackSub}</p>
            </div>
            <div className="flex gap-4 relative z-10 flex-wrap justify-center">
              {stackIcons.map((icon, i) => (
                <div
                  key={i}
                  className="w-14 h-14 bg-black/30 rounded-2xl p-3 backdrop-blur-md border border-white/10 hover:scale-110 hover:border-violet-400 transition-all shadow-lg"
                >
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
