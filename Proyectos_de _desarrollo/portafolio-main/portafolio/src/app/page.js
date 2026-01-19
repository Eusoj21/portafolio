import React from 'react';
// Asegúrate de que estas rutas coincidan con tus archivos reales
// import Header from './components/Header'; // Descomenta si usas Header
import Hero from './components/Hero';
import Experience from './components/Experience'; // Trajectory
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Contact from './components/Contact'; // Descomenta si tienes un Contact separado

export default function Home() {
  return (
    // CAMBIO: Fondo negro puro (bg-black) y texto blanco
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      
      {/* <Header /> */}
      
      <Hero />
      
      {/* TRAYECTORIA (Experience) - Mantenido arriba como pediste */}
      <Experience />
      
      <Skills />
      
      <Projects />
      
      {/* <Contact /> */}
      
      {/* Footer Minimalista (Integrado y ajustado al tema Negro) */} 
      <footer className="border-t border-neutral-900 py-12 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-neutral-500">
            
            <div className="flex items-center gap-8 text-base">
              <span className="font-medium">@2025, All Rights Reserved</span>
              <span className="text-neutral-700 text-lg font-semibold">404</span>
            </div>
            
            <div className="text-center">
              <span className="font-bold text-neutral-200 text-2xl tracking-wide">Steven Alfaro</span>
            </div>
            
            <div className="text-center md:text-right text-base">
              <div className="text-neutral-500 font-medium">
                <div>Portfolio in constant</div>
                <div>development</div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}