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
import { useLanguage } from "../../context/LanguageContext";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión de Activos",
      category: "Claro Enterprise",
      image: "/images/claro-placeholder.jpg",
      shortDesc: t.projects.claro.short,
      fullDesc: t.projects.claro.full,
      responsibilities: [
        "React Architecture",
        "TypeScript Integration",
        "API Development",
        "DB Optimization",
      ],
      stack: ["React", "TypeScript", "Node.js", "Express", "Tailwind"],
      github: null,
      demo: null,
    },
    {
      id: 2,
      title: "Nutri Time Frontend",
      category: "Academic Project",
      image: "/images/NutriTime.jpg",
      shortDesc: t.projects.nutri.short,
      fullDesc: t.projects.nutri.full,
      responsibilities: [
        "UI/UX with Tailwind",
        "API Integration",
        "Chef AI Chatbot",
        "State Management",
      ],
      stack: ["Vue.js", "Pinia", "Tailwind", "Axios"],
      github: "https://github.com/nick503-droid/recipe_vue_front",
      demo: null,
    },
    {
      id: 3,
      title: "Gestión Club Deportivo",
      category: "Web App",
      image: "/images/club.png",
      shortDesc: t.projects.club.short,
      fullDesc: t.projects.club.full,
      responsibilities: [
        "Laravel Backend",
        "Admin Interface",
        "Stats Generation",
        "PDF Reports",
      ],
      stack: ["Laravel", "PHP", "Bootstrap", "MySQL"],
      github: "https://github.com/Steven-c4/club-deportivo-php",
      demo: null,
    },
    {
      id: 4,
      title: "EduCodes Platform",
      category: "Education",
      image: "/images/educodes.png",
      shortDesc: t.projects.educodes.short,
      fullDesc: t.projects.educodes.full,
      responsibilities: [
        "DB Modeling",
        "Auth System",
        "Interactive Forums",
        "Responsive Design",
      ],
      stack: ["HTML/CSS", "JS", "PHP", "MySQL"],
      github: "https://github.com/Steven-c4",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t.projects.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

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
              className="bg-[#0B1120] border border-slate-800 rounded-2xl overflow-hidden cursor-pointer hover:border-fuchsia-500/50 hover:shadow-2xl transition-all group flex flex-col h-full"
            >
              <motion.div
                layoutId={`card-image-${project.id}`}
                className="h-64 overflow-hidden relative bg-slate-900"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10" />
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
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 bg-slate-800/80 text-violet-300 rounded-lg border border-slate-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-fuchsia-400 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto pt-4 border-t border-slate-800/50">
                  {t.projects.details} <span className="text-xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
                                <Layout size={24} /> {t.projects.about}
                              </h4>
                              <p className="text-slate-300 leading-relaxed text-lg">
                                {project.fullDesc}
                              </p>
                            </div>
                            <div>
                              <h4 className="flex items-center gap-2 text-xl font-semibold text-fuchsia-300 mb-4">
                                <Database size={24} />{" "}
                                {t.projects.responsibilities}
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
                                {t.projects.stack}
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
                              {project.github ? (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors text-lg"
                                >
                                  <Github size={24} /> {t.projects.viewCode}
                                </a>
                              ) : (
                                <div className="w-full text-center text-slate-500 text-base italic py-2 border border-slate-800 rounded-xl bg-slate-900/50">
                                  {t.projects.private}
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
