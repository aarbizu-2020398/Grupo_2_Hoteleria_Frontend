import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-800">mar</div>

        {/* Menú */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-blue-800 font-medium">Home</a>
          <a href="#" className="text-blue-800 font-medium">About Us</a>
          <a href="#" className="text-blue-800 font-medium">Explore</a>
          <a href="#" className="text-blue-800 font-medium">Activity</a>
        </div>

        {/* Barra de búsqueda */}
        <div className="hidden md:block relative w-64">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;