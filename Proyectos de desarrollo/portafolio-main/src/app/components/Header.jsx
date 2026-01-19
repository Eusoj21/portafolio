"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Iconos para el menú móvil

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lista de enlaces para no repetir código
  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Trayectoria", href: "#experience" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO / NOMBRE */}
        <a
          href="#home"
          className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Josué<span className="text-fuchsia-500">.</span>dev
        </a>

        {/* MENÚ DE ESCRITORIO (PC) */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-fuchsia-400 font-medium transition-colors text-sm uppercase tracking-wider relative group"
            >
              {item.name}
              {/* Línea animada al hacer hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuchsia-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* BOTÓN MENÚ MÓVIL (CELULAR) */}
        <button
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MENÚ DESPLEGABLE (MÓVIL) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)} // Cierra el menú al dar clic
              className="text-slate-300 hover:text-fuchsia-400 hover:bg-white/5 px-4 py-3 rounded-lg transition-all text-center font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
