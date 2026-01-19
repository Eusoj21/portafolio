'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  // EDUCATION DATA (Based on your profile)
  const education = [
    {
      title: "Technical Software Engineering",
      place: "ITCA-FEPADE",
      period: "2024 - Present",
      desc: "Second-year student. Comprehensive training in web development, databases, and server administration."
    },
    {
      title: "Cisco Networking Essentials",
      place: "Cisco Networking Academy",
      period: "2023",
      desc: "Certification in networking fundamentals, communication protocols, and basic security."
    }
  ];

  // WORK EXPERIENCE DATA (Translated to English)
  const work = [
    {
      title: "Software Developer",
      place: "Recicladora Fernández (Freelance Project)",
      period: "2025",
      desc: `Implementation of a comprehensive management system for a recycling company, including modules for clients, providers, purchases, products, billing, and financial reports.

      • Backend development with PHP using Laravel, optimizing system architecture, scalability, and security.
      • Frontend development with Vue.js, creating a modern, dynamic interface focused on a fluid user experience.
      • MySQL database configuration and administration, ensuring data integrity and efficiency.
      • Delivery of a functional, customizable solution aligned with the company's operational processes, ready for future electronic billing integration.`,
      link: null
    },
    {
      title: "Java App Testing and Development Analyst",
      place: "Sherwin Williams Central America",
      period: "2022",
      desc: `Active participation in testing and improving an internal Java (Android Studio) application to optimize purchase and sales management.

      • Collaboration with the development team in identifying, documenting, and resolving critical errors.
      • Creation of performance reports and user manuals, facilitating system adoption by staff.
      • Strengthening of software testing skills, ensuring the quality and functionality of the final product.`,
      link: "https://www.sherwin-williams.com/"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-blacktext-white">
      <div className="container mx-auto px-6 lg:px-20 max-w-6xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Trajectory</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4">My academic and professional path.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* --- LEFT COLUMN: EDUCATION --- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-slate-800 rounded-lg">
                <GraduationCap className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-12 border-l-2 border-slate-800 ml-4 pl-8 relative">
              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-900 rounded-full border-4 border-blue-500 group-hover:bg-blue-500 transition-colors"></span>
                  
                  <h4 className="text-xl font-bold text-slate-100">{item.title}</h4>
                  <div className="text-blue-400 font-medium mb-1">{item.place}</div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-mono uppercase tracking-wide">
                    <Calendar size={12} /> {item.period}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN: EXPERIENCE --- */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-slate-800 rounded-lg">
                <Briefcase className="text-green-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-12 border-l-2 border-slate-800 ml-4 pl-8 relative">
              {work.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-900 rounded-full border-4 border-green-500 group-hover:bg-green-500 transition-colors"></span>
                  
                  <h4 className="text-xl font-bold text-slate-100">{item.title}</h4>
                  
                  {/* Company Link/Text */}
                  <div className="text-green-400 font-medium mb-1 flex items-center gap-2">
                    {item.place}
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 font-mono uppercase tracking-wide">
                    <Calendar size={12} /> {item.period}
                  </div>
                  
                  {/* Description with pre-line formatting */}
                  <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line pl-2 border-l border-slate-700/50">
                    {item.desc}
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