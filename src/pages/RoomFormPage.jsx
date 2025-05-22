import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

const RoomFormPage = () => {
  const [formData, setFormData] = useState({
    hotel: '',
    numero: '',
    capacidad: '',
    comodidades: '',
    tipo: '',
    descripcion: '',
    precio: '',
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
    console.log('Datos del cuarto:', formData);
    // Aquí iría la lógica para enviar los datos del cuarto
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-center text-2xl font-bold mb-6">
            Registro de Cuarto
          </h2>
          
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="numero" className="block text-sm font-medium text-gray-700 mb-1">
                Número de cuarto
              </label>
              <input
                id="numero"
                name="numero"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.numero}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="capacidad" className="block text-sm font-medium text-gray-700 mb-1">
                Capacidad máxima de personas
              </label>
              <input
                id="capacidad"
                name="capacidad"
                type="number"
                min="1"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.capacidad}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="comodidades" className="block text-sm font-medium text-gray-700 mb-1">
                Comodidades
              </label>
              <input
                id="comodidades"
                name="comodidades"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.comodidades}
                onChange={handleChange}
                placeholder="Ej: WiFi, TV, Aire acondicionado..."
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de cuarto
              </label>
              <input
                id="tipo"
                name="tipo"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.tipo}
                onChange={handleChange}
                placeholder="Ej: Individual, Doble, Suite..."
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
              <label htmlFor="precio" className="block text-sm font-medium text-gray-700 mb-1">
                Precio por noche
              </label>
              <input
                id="precio"
                name="precio"
                type="number"
                min="0"
                step="0.01"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                value={formData.precio}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="foto" className="block text-sm font-medium text-gray-700 mb-1">
                Foto del cuarto
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

export default RoomFormPage;