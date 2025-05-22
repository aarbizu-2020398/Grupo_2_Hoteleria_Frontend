import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
return (
    <nav className="fixed top-0 left-0 right-0 z-50  shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
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
          <Link to="/HomePage" className="text-white font-medium hover:text-blue-200 transition">Home</Link>
          <a href="#" className="text-white font-medium hover:text-blue-200 transition">About Us</a>
          <a href="#" className="text-white font-medium hover:text-blue-200 transition">Explore</a>
          <a href="#" className="text-white font-medium hover:text-blue-200 transition">Activity</a>
        </div>

        {/* Barra de búsqueda eliminada */}
        
        {/* Botón de registro */}
        <div className="flex items-center ml-4">
          <Link 
            to="/login" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;