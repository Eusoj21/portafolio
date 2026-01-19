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
import { useLanguage } from "../../context/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  // Mapeamos los iconos manualmente para que coincidan con el orden del diccionario
  const workIcons = [
    {
      icon: <Code2 className="text-white w-5 h-5" />,
      color: "bg-violet-500",
      tags: ["React", "Node.js", "TS", "SQL"],
    },
    {
      icon: <Server className="text-white w-5 h-5" />,
      color: "bg-fuchsia-500",
      tags: ["Hardware", "AD", "Redes"],
    },
    {
      icon: <Globe className="text-white w-5 h-5" />,
      color: "bg-cyan-500",
      tags: ["Laravel", "PHP", "MySQL"],
    },
  ];

  const eduIcons = [
    {
      icon: <GraduationCap className="text-white w-5 h-5" />,
      color: "bg-emerald-500",
    },
    { icon: <Award className="text-white w-5 h-5" />, color: "bg-blue-500" },
    {
      icon: <BookOpen className="text-white w-5 h-5" />,
      color: "bg-amber-500",
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t.experience.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* EXPERIENCIA */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-violet-500/20 rounded-lg text-violet-300 border border-violet-500/30">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t.experience.workTitle}
              </h3>
            </div>
            <div className="space-y-8 border-l-2 border-slate-800 ml-3 relative">
              {t.experience.jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 group"
                >
                  <div
                    className={`absolute -left-[19px] top-0 w-10 h-10 rounded-full ${workIcons[index].color} flex items-center justify-center shadow-lg border-4 border-black z-10`}
                  >
                    {workIcons[index].icon}
                  </div>
                  <div className="bg-[#0B1120]/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 hover:border-violet-500/30 transition-all hover:bg-slate-900/40">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {job.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {job.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {workIcons[index].tags.map((tag, i) => (
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

          {/* EDUCACIÓN */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-300 border border-emerald-500/30">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t.experience.eduTitle}
              </h3>
            </div>
            <div className="space-y-8 border-l-2 border-slate-800 ml-3 relative">
              {t.experience.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 group"
                >
                  <div
                    className={`absolute -left-[19px] top-0 w-10 h-10 rounded-full ${eduIcons[index].color} flex items-center justify-center shadow-lg border-4 border-black z-10`}
                  >
                    {eduIcons[index].icon}
                  </div>
                  <div className="bg-[#0B1120]/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 hover:border-emerald-500/30 transition-all hover:bg-slate-900/40">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {edu.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {edu.desc}
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
