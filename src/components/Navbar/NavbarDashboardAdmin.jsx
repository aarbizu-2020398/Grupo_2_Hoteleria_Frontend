import React from 'react';
import { Link } from 'react-router';

const NavbarAdmin = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#034a8a] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/logoHotel.png"
            alt="Logo" 
            className="h-10 w-auto"
          />
        </div>

        {/* Menú */}
        <div className="hidden md:flex space-x-6">
          <Link to="/dashboard" className="text-[#ead6cb] font-medium hover:text-[#03c9e6] transition-colors">
            Home
          </Link>
          <a href="/hotel-form" className="text-[#ead6cb] font-medium hover:text-[#03c9e6] transition-colors">
            Hoteles
          </a>
          <a href="/room-form" className="text-[#ead6cb] font-medium hover:text-[#03c9e6] transition-colors">
            Cuartos
          </a>
          <a href="#" className="text-[#ead6cb] font-medium hover:text-[#03c9e6] transition-colors">
            Eventos
          </a>
          <a href="#" className="text-[#ead6cb] font-medium hover:text-[#03c9e6] transition-colors">
            Usuarios
          </a>
          <a href="#" className="text-[#ead6cb] font-medium hover:text-[#03c9e6] transition-colors">
            Reservaciones
          </a>
          <a href="#" className="text-[#ead6cb] font-medium hover:text-[#03c9e6] transition-colors">
            Cuenta
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
