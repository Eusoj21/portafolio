"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Server,
  Globe,
  GraduationCap,
  BookOpen,
  Award,
} from "lucide-react";

const Experience = () => {
  // --- DATOS DE EXPERIENCIA (Izquierda) ---
  const work = [
    {
      title: "Desarrollador Full Stack (Prácticas)",
      place: "Claro El Salvador",
      period: "Nov 2025 - Ene 2026",
      desc: "Lideré la creación del Sistema de Gestión de Activos. Desarrollé una solución completa (Frontend + Backend) que automatizó el inventario de equipos.",
      tags: ["React", "Node.js", "TS", "SQL"],
      icon: <Code2 className="text-white w-5 h-5" />,
      color: "bg-violet-500",
    },
    {
      title: "Soporte Técnico IT (Prácticas)",
      place: "Claro El Salvador",
      period: "Nov 2025 - Ene 2026",
      desc: "Mantenimiento operativo, gestión de usuarios en Directorio Activo, clonación de discos y soporte nivel 1 y 2.",
      tags: ["Hardware", "AD", "Redes"],
      icon: <Server className="text-white w-5 h-5" />,
      color: "bg-fuchsia-500",
    },
    {
      title: "Desarrollador Web Freelance",
      place: "Proyectos Independientes",
      period: "2023 - Presente",
      desc: "Desarrollo de soluciones a medida como plataformas educativas (EduCodes) y sistemas de gestión deportiva.",
      tags: ["Laravel", "PHP", "MySQL"],
      icon: <Globe className="text-white w-5 h-5" />,
      color: "bg-cyan-500",
    },
  ];

  // --- DATOS DE EDUCACIÓN (Derecha) ---
  const education = [
    {
      title: "Téc. en Ingeniería de Software",
      place: "ITCA-FEPADE",
      period: "2024 - Presente", // Ajusta el año si es diferente
      desc: "Especialización en desarrollo de aplicaciones web, bases de datos y arquitectura de software.",
      icon: <GraduationCap className="text-white w-5 h-5" />,
      color: "bg-emerald-500",
    },
    {
      title: "CCNAv7: Redes y Comunicaciones",
      place: "Cisco Networking Academy",
      period: "2024",
      desc: "Certificación en fundamentos de routing, switching, seguridad de redes y direccionamiento IP.",
      icon: <Award className="text-white w-5 h-5" />,
      color: "bg-blue-500",
    },
    {
      title: "Bachillerato General",
      place: "Colegio Citalá",
      period: "2022 - 2023",
      desc: "Formación académica integral con enfoque en valores y excelencia.",
      icon: <BookOpen className="text-white w-5 h-5" />,
      color: "bg-amber-500",
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl relative z-10">
        {/* Título de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Trayectoria & Formación
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* --- COLUMNA 1: EXPERIENCIA --- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-violet-500/20 rounded-lg text-violet-300 border border-violet-500/30">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Experiencia Laboral
              </h3>
            </div>

            <div className="space-y-8 border-l-2 border-slate-800 ml-3 relative">
              {work.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 group"
                >
                  {/* Punto Icono */}
                  <div
                    className={`absolute -left-[19px] top-0 w-10 h-10 rounded-full ${item.color} flex items-center justify-center shadow-lg border-4 border-black z-10`}
                  >
                    {item.icon}
                  </div>

                  {/* Tarjeta */}
                  <div className="bg-[#0B1120]/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 hover:border-violet-500/30 transition-all hover:bg-slate-900/40">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                      <h4 className="text-lg font-bold text-white">
                        {item.title}
                      </h4>
                      <span className="text-xs font-mono text-slate-500 bg-black/40 px-2 py-1 rounded border border-slate-800">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-violet-400 font-medium text-sm mb-3">
                      {item.place}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-[10px] font-bold text-slate-300 bg-slate-800 rounded border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- COLUMNA 2: EDUCACIÓN --- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-300 border border-emerald-500/30">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Formación Académica
              </h3>
            </div>

            <div className="space-y-8 border-l-2 border-slate-800 ml-3 relative">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 group"
                >
                  {/* Punto Icono */}
                  <div
                    className={`absolute -left-[19px] top-0 w-10 h-10 rounded-full ${item.color} flex items-center justify-center shadow-lg border-4 border-black z-10`}
                  >
                    {item.icon}
                  </div>

                  {/* Tarjeta */}
                  <div className="bg-[#0B1120]/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/30 transition-all hover:bg-slate-900/40">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                      <h4 className="text-lg font-bold text-white">
                        {item.title}
                      </h4>
                      <span className="text-xs font-mono text-slate-500 bg-black/40 px-2 py-1 rounded border border-slate-800">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-emerald-400 font-medium text-sm mb-3">
                      {item.place}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
