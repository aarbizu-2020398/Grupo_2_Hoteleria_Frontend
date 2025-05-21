import React from 'react';

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
          <a href="#" className="text-white font-medium hover:text-blue-200 transition">Home</a>
          <a href="#" className="text-white font-medium hover:text-blue-200 transition">About Us</a>
          <a href="#" className="text-white font-medium hover:text-blue-200 transition">Explore</a>
          <a href="#" className="text-white font-medium hover:text-blue-200 transition">Activity</a>
        </div>

        {/* Barra de búsqueda con fondo semitransparente */}
        <div className="hidden md:block relative w-64">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full py-2 px-4 bg-white bg-opacity-80 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;