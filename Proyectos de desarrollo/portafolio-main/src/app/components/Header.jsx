"use client";

import React, { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center">
        {/* LOGO */}
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          JA.
        </a>

        {/* ÚNICO ELEMENTO: BOTÓN DE IDIOMA */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 hover:border-violet-500 hover:text-white transition-all text-xs font-bold cursor-pointer backdrop-blur-sm shadow-lg"
        >
          <Globe size={16} />
          {language === "es" ? "EN" : "ES"}
        </button>
      </div>
    </header>
  );
};

export default Header;
