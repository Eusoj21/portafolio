"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Efectos de fondo (Glow morado) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full blur-[128px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Encabezado de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full text-slate-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for opportunities
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let's work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              together
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Mi
            bandeja de entrada siempre está abierta.
          </p>
        </motion.div>

        {/* Tarjeta Principal de Contacto */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-800 bg-[#0B1120] shadow-2xl shadow-violet-900/10"
          >
            {/* Columna Izquierda: Información */}
            <div className="p-10 flex flex-col justify-between bg-gradient-to-br from-slate-900 to-[#0B1120]">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Info
                </h3>

                <div className="space-y-6">
                  {/* Item Correo */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium mb-1">
                        Mail me at
                      </p>
                      <a
                        href="mailto:stevenalfaro505@gmail.com"
                        className="text-white hover:text-violet-400 transition-colors font-medium text-lg"
                      >
                        stevenalfaro505@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Item Ubicación */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-fuchsia-500/10 rounded-lg text-fuchsia-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium mb-1">
                        Location
                      </p>
                      <p className="text-white font-medium text-lg">
                        El Salvador, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de Redes (Opcional) */}
              <div className="mt-10 pt-8 border-t border-slate-800">
                <p className="text-slate-400 text-sm mb-4">
                  También puedes encontrarme en:
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Steven-c4"
                    target="_blank"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/leonardo-landaverde-397086316/"
                    target="_blank"
                    className="text-slate-400 hover:text-violet-400 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/badtz_steven/"
                    target="_blank"
                    className="text-slate-400 hover:text-fuchsia-400 transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Llamada a la Acción (CTA) */}
            <div className="relative p-10 bg-violet-600 flex flex-col justify-center items-center text-center overflow-hidden group">
              {/* Decoración de fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 opacity-100 transition-opacity group-hover:opacity-90"></div>
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm shadow-lg rotate-3 group-hover:rotate-6 transition-transform duration-300">
                  <Send className="text-white w-8 h-8 ml-1" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Start a project?
                </h3>
                <p className="text-white/80 mb-8 max-w-xs mx-auto">
                  Siempre estoy interesado en escuchar sobre nuevos proyectos y
                  oportunidades.
                </p>

                <a
                  href="mailto:stevenalfaro505@gmail.com"
                  className="inline-flex items-center gap-2 bg-white text-violet-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 hover:scale-105 transition-all shadow-xl shadow-black/20"
                >
                  Say Hello <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer simple integrado */}
        <div className="text-center mt-20 pt-10 border-t border-slate-900">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Steven Alfaro. Built with React &
            Next.js.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
