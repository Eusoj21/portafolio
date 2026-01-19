"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  X,
  Database,
  Layout,
  Server,
  Code2,
} from "lucide-react";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  const projects = [
    // 1. PROYECTO CLARO
    {
      id: 1,
      title: "Sistema de Gestión de Activos",
      category: "Proyecto Empresarial (Claro)",
      image: "/images/claro-placeholder.jpg",
      shortDesc:
        "Plataforma Full Stack para la administración y trazabilidad de activos fijos en el área de soporte.",
      fullDesc:
        "Desarrollé una solución integral para digitalizar el control de inventario de Claro. El sistema permite registrar entradas/salidas de equipos, asignar activos a empleados y generar reportes en tiempo real, eliminando el uso de hojas de cálculo manuales.",
      responsibilities: [
        "Diseño de arquitectura SPA moderna con React y Vite.",
        "Implementación de TypeScript para garantizar código robusto.",
        "Desarrollo de API REST con Node.js y Express.",
        "Optimización de consultas a base de datos.",
      ],
      stack: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS"],
      github: null,
      demo: null,
    },
    // 2. NUTRITIME
    {
      id: 2,
      title: "Nutri Time Frontend",
      category: "Proyecto Académico",
      image: "/images/NutriTime.jpg",
      shortDesc:
        "Aplicación Web Frontend construida con Vue.js para la plataforma Nutri Time.",
      fullDesc:
        "Desarrollo del frontend completo como una Single Page Application (SPA) interactiva y responsiva. La aplicación consume una API RESTful de Laravel para mostrar recetas, gestionar categorías y autenticar usuarios.",
      responsibilities: [
        "Construcción de componentes de UI con Tailwind CSS.",
        "Configuración de Axios para comunicación segura con la API.",
        "Implementación del chatbot interactivo 'Chef AI'.",
        "Manejo de estado global con Pinia.",
      ],
      stack: ["Vue.js", "Vue Router", "Pinia", "Tailwind CSS", "Axios"],
      github: "https://github.com/nick503-droid/recipe_vue_front",
      demo: null,
    },
    // 3. CLUB DEPORTIVO
    {
      id: 3,
      title: "Gestión Club Deportivo",
      category: "Web App",
      image: "/images/club.png",
      shortDesc:
        "Aplicación para la administración de torneos, jugadores, estadísticas y control de pagos.",
      fullDesc:
        "Solución web desarrollada con Laravel para digitalizar la gestión de un club deportivo. Facilita el registro de jugadores, la creación de fixtures de torneos y el seguimiento de estados financieros y pagos de membresías.",
      responsibilities: [
        "Desarrollo Backend robusto con Laravel.",
        "Interfaz administrativa limpia con Bootstrap.",
        "Generación automática de estadísticas.",
        "Reportes en PDF para fichas de jugadores.",
      ],
      stack: ["Laravel", "PHP", "Bootstrap", "MySQL"],
      github: "https://github.com/Steven-c4/club-deportivo-php",
      demo: null,
    },
    // 4. EDUCODES
    {
      id: 4,
      title: "EduCodes Platform",
      category: "Plataforma Educativa",
      image: "/images/educodes.png",
      shortDesc:
        "Sistema web para la gestión de cursos online, foros de discusión y perfiles de estudiantes.",
      fullDesc:
        "Una plataforma educativa completa que permite a los instructores crear cursos y a los estudiantes inscribirse, ver lecciones y participar en foros.",
      responsibilities: [
        "Modelado de base de datos relacional en MySQL.",
        "Sistema de autenticación y roles de usuario.",
        "Foros interactivos con respuestas anidadas.",
        "Diseño responsivo con HTML5 y CSS3.",
      ],
      stack: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      github: "https://github.com/Steven-c4",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Fondo decorativo (Opcional, si quieres que se vea más limpio lo puedes quitar) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent pointer-events-none"></div>

      {/* AQUÍ ESTÁ LA CLAVE: max-w-7xl permite que se expanda más */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Soluciones tecnológicas desarrolladas para resolver problemas
            reales.
          </p>
        </motion.div>

        {/* --- GRID MÁS ANCHA --- */}
        {/* gap-10 separa más las tarjetas ahora que son más grandes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#0B1120] border border-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:border-fuchsia-500/50 hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all group flex flex-col h-full"
            >
              {/* Imagen Tarjeta - Altura ajustada a h-64 para que luzca la imagen ancha */}
              <motion.div
                layoutId={`card-image-${project.id}`}
                className="h-64 overflow-hidden relative bg-slate-900"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10" />

                {/* Fallback Icono */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50 flex items-center justify-center">
                  <Code2 className="text-white/20 w-16 h-16" />
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-0"
                />
              </motion.div>

              {/* Contenido Tarjeta */}
              <div className="p-8 flex-1 flex flex-col">
                <motion.h3
                  layoutId={`card-title-${project.id}`}
                  className="text-2xl font-bold text-white mb-3 group-hover:text-fuchsia-400 transition-colors"
                >
                  {project.title}
                </motion.h3>
                <p className="text-slate-400 text-base line-clamp-3 mb-6 flex-1 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 bg-slate-800/80 text-violet-300 rounded-lg border border-slate-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="text-xs px-3 py-1.5 bg-slate-800/80 text-slate-400 rounded-lg border border-slate-700 font-medium">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>

                <div className="text-fuchsia-400 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto pt-4 border-t border-slate-800/50">
                  Ver detalles <span className="text-xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MODAL (POPUP) --- */}
        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
              />

              <div className="fixed inset-0 grid place-items-center z-50 p-4 pointer-events-none">
                {projects.map(
                  (project) =>
                    project.id === selectedId && (
                      <motion.div
                        key={project.id}
                        layoutId={`card-container-${project.id}`}
                        className="bg-[#0f172a] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700 pointer-events-auto shadow-2xl shadow-violet-500/20 relative"
                      >
                        <button
                          onClick={() => setSelectedId(null)}
                          className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur rounded-full text-white hover:bg-red-500 hover:rotate-90 transition-all z-20"
                        >
                          <X size={20} />
                        </button>

                        <motion.div
                          layoutId={`card-image-${project.id}`}
                          className="relative h-72 md:h-96 w-full bg-slate-900"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-fuchsia-900/20 flex items-center justify-center">
                            <Server className="text-slate-700 w-24 h-24" />
                          </div>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover relative z-10"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-20"></div>
                        </motion.div>

                        <div className="p-8 md:p-12 -mt-24 relative z-30">
                          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold rounded-full mb-6 shadow-lg shadow-violet-500/30">
                            {project.category}
                          </span>

                          <motion.h3
                            layoutId={`card-title-${project.id}`}
                            className="text-3xl md:text-5xl font-bold text-white mb-8"
                          >
                            {project.title}
                          </motion.h3>

                          <div className="space-y-10">
                            <div>
                              <h4 className="flex items-center gap-2 text-xl font-semibold text-violet-300 mb-4">
                                <Layout size={24} /> Sobre el Proyecto
                              </h4>
                              <p className="text-slate-300 leading-relaxed text-lg">
                                {project.fullDesc}
                              </p>
                            </div>

                            <div>
                              <h4 className="flex items-center gap-2 text-xl font-semibold text-fuchsia-300 mb-4">
                                <Database size={24} /> Responsabilidades Clave
                              </h4>
                              <ul className="grid gap-4">
                                {project.responsibilities.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-3 text-slate-300 text-base p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-violet-500/30 transition-colors"
                                  >
                                    <span className="mt-2 w-2 h-2 rounded-full bg-fuchsia-500 shrink-0"></span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-xl font-semibold text-white mb-4">
                                Tech Stack
                              </h4>
                              <div className="flex flex-wrap gap-3">
                                {project.stack.map((tech, i) => (
                                  <span
                                    key={i}
                                    className="px-5 py-2.5 bg-slate-800 text-violet-200 rounded-xl border border-slate-700 text-sm font-medium hover:bg-slate-700 hover:border-violet-500 transition-all cursor-default"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-8 border-t border-slate-800 mt-10">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors text-lg"
                                >
                                  <Github size={24} /> Ver Código
                                </a>
                              )}
                              {project.demo && (
                                <a
                                  href={project.demo}
                                  target="_blank"
                                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg shadow-violet-500/20 text-lg"
                                >
                                  Live Demo <ExternalLink size={24} />
                                </a>
                              )}
                              {!project.github && !project.demo && (
                                <div className="w-full text-center text-slate-500 text-base italic py-2 border border-slate-800 rounded-xl bg-slate-900/50">
                                  🔒 Este proyecto es de uso interno (Propiedad
                                  de Claro SV)
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ),
                )}
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
