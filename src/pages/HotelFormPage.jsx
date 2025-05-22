import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

const HotelFormPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    categoria: '',
    foto: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      foto: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del hotel:', formData);
    // Aquí iría la lógica para enviar los datos del hotel
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-center text-2xl font-bold mb-6">
            Registro de Hotel
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del Hotel
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-1">
                Dirección
              </label>
              <input
                id="direccion"
                name="direccion"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.direccion}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">
                Categoría del Hotel
              </label>
              <input
                id="categoria"
                name="categoria"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.categoria}
                onChange={handleChange}
                placeholder="Ej: 5 Estrellas, Boutique, Resort..."
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="foto" className="block text-sm font-medium text-gray-700 mb-1">
                Foto del Hotel
              </label>
              <input
                id="foto"
                name="foto"
                type="file"
                accept="image/*"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                onChange={handleFileChange}
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Registrar Hotel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HotelFormPage;