import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400 transition-colors"></a>
          <a href="#experience" className="hover:text-blue-400 transition-colors"></a>
          <a href="#projects" className="hover:text-blue-400 transition-colors"></a>
          <a href="#contact" className="hover:text-blue-400 transition-colors"></a>
        </div>
      </nav>
    </header>
  );

  
};

export default Header;