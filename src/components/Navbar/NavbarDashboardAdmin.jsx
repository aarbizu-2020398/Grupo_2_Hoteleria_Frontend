import React from 'react';
import { Link } from 'react-router';

const NavbarAdmin = () => {
return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-50 shadow-sm">
      <div className="max-w-8xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/logoHotel.png"
            alt="Logo" 
            className="h-10 w-auto"
          />
        </div>

        {/* Menú con texto blanco para contrastar con la imagen */}
        <div className="hidden md:flex space-x-8">
          <Link to="/HomePage" className="text-blue-800 font-medium hover:text-blue-200 transition">Home</Link>
          <a href="#" className="text-blue-800 font-medium hover:text-blue-200 transition">Hoteles</a>
          <a href="#" className="text-blue-800 font-medium hover:text-blue-200 transition">Eventos</a>
          <a href="#" className="text-blue-800 font-medium hover:text-blue-200 transition">Reservaciones</a>
        </div>

        {/* Botón de perfil */}
        <div className="relative">
          <button className="flex items-center text-white">
            <img 
              src="/userIcon.png"
              alt="Perfil"
              className="h-15 w-15 rounded-full"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};


export default NavbarAdmin;