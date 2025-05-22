import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

const EventRoomFormPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    hotel: '',
    descripcion: '',
    precioPorHora: '',
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
    console.log('Datos del salón:', formData);
    // Aquí iría la lógica para enviar los datos del salón
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-center text-2xl font-bold mb-6">
            Registro de Salón de Eventos
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                Nombre del Salón
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
              <label htmlFor="hotel" className="block text-sm font-medium text-gray-700 mb-1">
                Hotel al que pertenece
              </label>
              <input
                id="hotel"
                name="hotel"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.hotel}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700 mb-1">
                Descripción
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows="3"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.descripcion}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="mb-4">
              <label htmlFor="precioPorHora" className="block text-sm font-medium text-gray-700 mb-1">
                Precio por hora
              </label>
              <input
                id="precioPorHora"
                name="precioPorHora"
                type="number"
                min="0"
                step="0.01"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.precioPorHora}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="foto" className="block text-sm font-medium text-gray-700 mb-1">
                Foto del Salón
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventRoomFormPage;