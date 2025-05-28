import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-50 shadow-md">
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
          <Link to="/HomePage" className="text-blue-800 font-medium hover:text-blue-200 transition">Home</Link>
          <Link to="/Eventos" className="text-blue-800 font-medium hover:text-blue-200 transition">Eventos</Link>
          <Link to="/Reservaciones" className="text-blue-800 font-medium hover:text-blue-200 transition">Reservaciones</Link>
          <Link to="/MyAccount" className="text-blue-800 font-medium hover:text-blue-200 transition">My Account</Link>
        </div>        
        
      </div>
    </nav>
  );
};


export default Navbar;