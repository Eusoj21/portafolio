"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  Mail,
  Download,
  Github,
  Instagram,
  Terminal,
  Camera,
} from "lucide-react";
import { motion } from "framer-motion";

// Componente para la hora local (Sin cambios, funciona perfecto)
const LocalTime = () => {
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!currentTime) return null;

  return currentTime.toLocaleTimeString("en-US", {
    hour12: false,
    timeZone: "America/El_Salvador",
  });
};

const Hero = () => {
  // Icono de Discord personalizado
  const discordIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 71 55"
      className="w-6 h-6 fill-current text-slate-300 group-hover:text-white"
    >
      <path d="M60.104 4.552A58.563 58.563 0 0046.91 0a41.425 41.425 0 00-1.93 3.98 55.055 55.055 0 00-16.04 0A41.513 41.513 0 0026.01 0a58.31 58.31 0 00-13.18 4.55C4.33 19.098 0 33.427 0 47.65a70.33 70.33 0 0010.78 8.77c8.033 5.88 15.61 4.815 15.61 4.815l1.785-3.057a49.016 49.016 0 01-7.64-3.78c14.165 9.78 29.712 9.78 43.892 0a48.76 48.76 0 01-7.64 3.78l1.784 3.057s7.578 1.064 15.61-4.815A70.33 70.33 0 0071 47.65c0-14.223-4.33-28.552-10.896-43.098zM29.41 37.195c-3.117 0-5.672-2.857-5.672-6.374s2.53-6.375 5.672-6.375c3.164 0 5.694 2.857 5.672 6.375 0 3.517-2.53 6.374-5.672 6.374zm12.19 0c-3.117 0-5.672-2.857-5.672-6.374s2.53-6.375 5.672-6.375c3.164 0 5.672 2.857 5.672 6.375 0 3.517-2.508 6.374-5.672 6.374z" />
    </svg>
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
    >
      {/* 1. HORA LOCAL (Estilo actualizado a Violeta) */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-6 right-6 z-50 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full text-xs text-slate-300 font-mono border border-slate-700 shadow-lg shadow-violet-500/10"
      >
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        SV Time: <LocalTime />
      </motion.div>

      {/* 2. BARRA LATERAL (REDES SOCIALES) */}
      {/* OJO: Cambia los href por TUS links reales */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        <a
          href="[TU LINK DE GITHUB]"
          target="_blank"
          className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-slate-700 hover:border-white transition-all duration-300 group"
        >
          <Github size={20} className="text-slate-400 group-hover:text-white" />
        </a>
        <a
          href="[TU LINK DE INSTAGRAM]"
          target="_blank"
          className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-fuchsia-600 hover:border-fuchsia-400 transition-all duration-300 group"
        >
          <Instagram
            size={20}
            className="text-slate-400 group-hover:text-white"
          />
        </a>
        <a
          href="[TU LINK DE LINKEDIN]"
          target="_blank"
          className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-violet-600 hover:border-violet-400 transition-all duration-300 group"
        >
          <svg
            className="w-5 h-5 text-slate-400 group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="mailto:[TU CORREO]"
          className="w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-full flex items-center justify-center hover:bg-red-600 hover:border-red-400 transition-all duration-300 group"
        >
          <Mail size={20} className="text-slate-400 group-hover:text-white" />
        </a>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* --- COLUMNA IZQUIERDA: INFORMACIÓN --- */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Etiqueta Superior - Ahora es Violeta */}
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full text-violet-300 text-sm font-medium mb-6">
              <Terminal size={14} />
              <span>Ingeniero en Proceso</span>
            </div>

            {/* Nombre y Rol */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              [TU NOMBRE AQUÍ]
            </h1>
            <h2 className="text-2xl lg:text-3xl text-slate-400 mb-6 font-light">
              Full Stack Developer
            </h2>

            {/* Bio Personalizada (Claro + Fotografía) */}
            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 border-l-4 border-violet-600 pl-4">
              Desarrollador apasionado por crear soluciones reales. Actualmente
              colaborando en
              <span className="text-violet-400 font-bold"> Claro </span>
              creando sistemas de gestión con React y Node.js.
              <br className="hidden md:block" />
              Cuando no estoy tirando código, me encontrarás con mi
              <span className="text-fuchsia-400 font-bold"> Canon 70D </span>
              buscando la foto perfecta.
            </p>

            {/* Ubicación y Correo */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 text-slate-300 text-sm font-medium justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <MapPin className="text-violet-500" size={18} />
                El Salvador
              </div>
              <div className="hidden sm:block text-slate-700">|</div>
              <div className="flex items-center gap-2">
                <Mail className="text-fuchsia-500" size={18} />
                [TU CORREO AQUÍ]
              </div>
            </div>

            {/* BOTÓN DESCARGAR CV - Estilo Violeta/Fuchsia */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="/cv.pdf"
                download="CV_[TU_NOMBRE].pdf"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-200 bg-violet-600 font-lg rounded-lg hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/40 focus:outline-none ring-offset-2 focus:ring-2 ring-violet-400"
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Descargar CV
              </a>
            </div>
          </motion.div>

          {/* --- COLUMNA DERECHA: FOTO --- */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Efecto de brillo detrás de la foto (Fuchsia para contraste) */}
            <div className="absolute inset-0 bg-fuchsia-600/20 blur-[100px] rounded-full"></div>

            <div className="relative w-72 h-72 lg:w-[450px] lg:h-[450px]">
              {/* Borde decorativo giratorio sutil */}
              <div className="absolute inset-0 rounded-full border-2 border-slate-700/50"></div>

              {/* Imagen recortada en círculo */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0B1120] shadow-2xl shadow-violet-900/20">
                {/* ¡Asegurate de poner tu foto en public/images/yo.png! */}
                <img
                  src="/images/yo.png"
                  alt="Mi Foto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- ICONOS MOVIL --- */}
        <div className="flex lg:hidden justify-center gap-6 mt-16 pb-8">
          <a href="[TU GITHUB]" className="text-slate-400 hover:text-white">
            <Github size={24} />
          </a>
          <a
            href="[TU INSTAGRAM]"
            className="text-slate-400 hover:text-fuchsia-400"
          >
            <Instagram size={24} />
          </a>
          <a
            href="mailto:[TU CORREO]"
            className="text-slate-400 hover:text-red-400"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
