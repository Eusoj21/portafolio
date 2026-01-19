'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Code2 } from 'lucide-react';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);

  // DATOS COMPLETOS DE LOS PROYECTOS
  const projects = [
    {
      id: 1,
      title: "Nutri Time Frontend",
      category: "Academic Project",
      image: "/images/NutriTime.jpg", // Asegúrate de tener esta imagen
      shortDesc: "Frontend Web Application built with Vue.js for the Nutri Time platform.",
      fullDesc: "Built the entire frontend as an interactive and responsive Single Page Application (SPA) using Vue.js. The application consumes Laravel's RESTful API to display recipes, manage categories, and authenticate users.",
      responsibilities: [
        "Built all user interface components (recipe cards, forms, navigation) using Tailwind CSS.",
        "Configured Axios with a centralized API client for secure communication.",
        "Developed the interactive 'Chef AI' chatbot component.",
        "Implemented localStorage logic to persist chatbot messages."
      ],
      stack: ["Vue.js", "Vue Router", "Pinia", "Tailwind CSS", "Axios"],
      github: "https://github.com/nick503-droid/recipe_vue_front",
      demo: null
    },
    {
      id: 2,
      title: "Recicladora Fernández",
      category: "Freelance Project",
      image: "/images/recicladora.png", // Asegúrate de tener esta imagen
      shortDesc: "Comprehensive management system for a recycling company.",
      fullDesc: "A full-stack web application designed to digitalize the operations of a recycling business. It manages the entire flow from purchase of materials to sales, inventory, and billing.",
      responsibilities: [
        "Backend development with PHP (Laravel) for robust data management.",
        "Frontend interface designed with Vue.js for a fluid user experience.",
        "Database administration (MySQL) ensuring data integrity.",
        "Implementation of financial reporting and role-based access control."
      ],
      stack: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
      github: "https://github.com/Steven-c4/proyectorf-vue",
      demo: "null"
    },
    {
      id: 3,
      title: "Mentari",
      category: "Business Management",
      image: "/images/mentari.jpg", // Asegúrate de tener esta imagen
      shortDesc: "Business Management System designed to manage employees and products.",
      fullDesc: "Full-stack web application designed to manage employees, products, and sales operations, including real-time reporting and analytics dashboards.",
      responsibilities: [
        "Designed relational database schema and RESTful API architecture.",
        "Developed frontend interface with dynamic tables and modals.",
        "Integrated authentication and authorization.",
        "Configured CRUD operations for employees and products."
      ],
      stack: ["Laravel", "Vue.js", "MySQL", "Inertia.js"],
      github: "https://github.com/Francooz/mentarip",
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white relative">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* TÍTULO DE SECCIÓN */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#111827] border border-slate-800 rounded-xl overflow-hidden cursor-pointer hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all group"
            >
              {/* Imagen Tarjeta */}
              <motion.div layoutId={`card-image-${project.id}`} className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </motion.div>

              {/* Contenido Tarjeta */}
              <div className="p-6">
                <motion.h3 layoutId={`card-title-${project.id}`} className="text-xl font-bold text-white mb-2">
                  {project.title}
                </motion.h3>
                <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                  {project.shortDesc}
                </p>
                
                {/* Tags pequeños */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-slate-800 text-slate-300 rounded border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-blue-400 text-sm font-medium group-hover:underline">
                  View details →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- MODAL (POPUP) --- */}
        <AnimatePresence>
          {selectedId && (
            <>
              {/* Fondo Oscuro (Backdrop) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              />

              {/* Contenido del Modal */}
              <div className="fixed inset-0 grid place-items-center z-50 p-4 pointer-events-none">
                {projects.map((project) => (
                  project.id === selectedId && (
                    <motion.div
                      key={project.id}
                      layoutId={`card-container-${project.id}`}
                      className="bg-[#111827] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 pointer-events-auto shadow-2xl relative"
                    >
                      
                      {/* Botón Cerrar */}
                      <button 
                        onClick={() => setSelectedId(null)}
                        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-red-500/80 transition-colors z-20"
                      >
                        <X size={20} />
                      </button>

                      {/* Imagen Modal */}
                      <motion.div layoutId={`card-image-${project.id}`} className="relative h-64 w-full">
                         <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover" 
                        />
                        {/* Overlay Gradiente para el texto */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent"></div>
                      </motion.div>

                      <div className="p-6 md:p-8 -mt-12 relative z-10">
                        {/* Etiqueta Categoría */}
                        <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-md mb-4 shadow-lg">
                          {project.category}
                        </span>

                        <motion.h3 layoutId={`card-title-${project.id}`} className="text-3xl font-bold text-white mb-6">
                          {project.title}
                        </motion.h3>

                        <div className="space-y-6">
                          {/* Descripción */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Project Description</h4>
                            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                              {project.fullDesc}
                            </p>
                          </div>

                          {/* Responsabilidades */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">My Actions & Responsibilities</h4>
                            <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm md:text-base">
                              {project.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Tecnologías */}
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.stack.map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-slate-800 text-blue-300 rounded-lg border border-slate-700 text-sm">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Botones de Acción */}
                          <div className="flex gap-4 pt-4 border-t border-slate-800 mt-6">
                            {project.github && (
                              <a 
                                href={project.github} 
                                target="_blank"
                                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors"
                              >
                                <Github size={20} /> View Code
                              </a>
                            )}
                            {project.demo && (
                              <a 
                                href={project.demo} 
                                target="_blank"
                                className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg font-bold hover:bg-slate-700 transition-colors border border-slate-600"
                              >
                                Live Demo <ExternalLink size={18} />
                              </a>
                            )}
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;