import React from 'react';
import Navbar from '../components/Navbar/Navbar';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
            un occano de opciones!
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-blue-700 mb-8">
              Habitaciones <span className="font-bold">al mejor precio</span>
            </h2>
            
            <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition text-lg shadow-lg">
              REGISTRATE
            </button>
          </div>
        </div>
      </section>

      {/* Sección adicional (opcional) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* Contenido adicional puede ir aquí */}
      </section>
    </div>
  );
};

export default HomePage;