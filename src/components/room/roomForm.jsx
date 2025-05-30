// components/RoomForm.js
import React from 'react';
import { useRoomForm } from "../../hooks/useRooms";
import { Link, Navigate } from 'react-router';
import NavbarAdmin from '../Navbar/NavbarDashboardAdmin';

const RoomForm = () => {
  const {
    formData,
    file,
    hotels,
    loading,
    error,
    success,
    handleInputChange,
    handleComfortChange,
    handleFileChange,
    handleSubmit,
    setSuccess
  } = useRoomForm();

  const comfortOptions = [
    'WiFi',
    'TV',
    'Aire acondicionado',
    'Minibar',
    'Caja fuerte',
    'Servicio a la habitación',
    'Jacuzzi'
  ];

  return (
    <>
    <div className='py-12'>
      <NavbarAdmin/>
    </div>
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-[#ead6cb]/20 to-[#03c9e6]/10 rounded-2xl shadow-xl border border-[#034a8a]/20 backdrop-blur-sm">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-[#034a8a] to-[#2a3d74] rounded-t-xl -mt-8 mx-8 py-4 px-6 shadow-md">
        <h2 className="text-2xl font-bold text-center text-white">Añadir Nueva Habitación</h2>
      </div>
      
      {/* Mensajes de estado */}
      {error && (
        <div className="mt-6 mx-8 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-r shadow">
          <div className="flex justify-between items-center">
            <span>{error}</span>
            <button onClick={() => setSuccess(false)} className="text-red-700 font-bold">×</button>
          </div>
        </div>
      )}
      
      {success && (
        <div className="mt-6 mx-8 p-4 bg-green-100 border-l-4 border-[#3e9254] text-[#056c68] rounded-r shadow">
          <div className="flex justify-between items-center">
            <span>Habitación añadida con éxito!</span>
            <Navigate to={"/room-form"}/>
            <button onClick={() => setSuccess(false)} className="text-[#056c68] font-bold">×</button>
          </div>
        </div>
      )}
      
      {/* Formulario */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-6 px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Columna izquierda */}
          <div className="space-y-6">
            {/* Hotel */}
            <div>
              <label className="block text-sm font-medium text-[#034a8a] mb-1">Hotel</label>
              <div className="relative">
                <select
                  name="hotel"
                  value={formData.hotel}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-3 pr-10 py-2 border border-[#03c9e6]/50 rounded-lg focus:ring-2 focus:ring-[#034a8a] focus:border-[#034a8a] bg-white/80 shadow-sm"
                  >
                  <option value="">Seleccione un hotel</option>
                  {hotels.map(hotel => (
                    <option key={hotel._id} value={hotel.nameHotel}>
                      {hotel.nameHotel}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-[#034a8a]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Número de habitación */}
            <div>
              <label className="block text-sm font-medium text-[#034a8a] mb-1">Número de habitación</label>
              <input
                type="text"
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-[#03c9e6]/50 rounded-lg focus:ring-2 focus:ring-[#034a8a] focus:border-[#034a8a] bg-white/80 shadow-sm"
                />
            </div>

            {/* Piso y Capacidad */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#034a8a] mb-1">Piso</label>
                <input
                  type="number"
                  name="floor"
                  value={formData.floor}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-[#03c9e6]/50 rounded-lg focus:ring-2 focus:ring-[#034a8a] focus:border-[#034a8a] bg-white/80 shadow-sm"
                  />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#034a8a] mb-1">Capacidad</label>
                <input
                  type="number"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-[#03c9e6]/50 rounded-lg focus:ring-2 focus:ring-[#034a8a] focus:border-[#034a8a] bg-white/80 shadow-sm"
                />
              </div>
            </div>

            {/* Tipo de habitación */}
            <div>
              <label className="block text-sm font-medium text-[#034a8a] mb-1">Tipo de habitación</label>
              <div className="relative">
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-3 pr-10 py-2 border border-[#03c9e6]/50 rounded-lg focus:ring-2 focus:ring-[#034a8a] focus:border-[#034a8a] bg-white/80 shadow-sm"
                  >
                  <option value="Individual">Individual</option>
                  <option value="Doble">Doble</option>
                  <option value="Suite">Suite</option>
                  <option value="Familiar">Familiar</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-[#034a8a]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-6">
            {/* Descripción */}
            <div>
              <label className="block text-sm font-medium text-[#034a8a] mb-1">Descripción</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full px-3 py-2 border border-[#03c9e6]/50 rounded-lg focus:ring-2 focus:ring-[#034a8a] focus:border-[#034a8a] bg-white/80 shadow-sm"
              />
            </div>

            {/* Precio por noche */}
            <div>
              <label className="block text-sm font-medium text-[#034a8a] mb-1">Precio por noche</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="number"
                  name="priceNight"
                  value={formData.priceNight}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-7 pr-3 py-2 border border-[#03c9e6]/50 rounded-lg focus:ring-2 focus:ring-[#034a8a] focus:border-[#034a8a] bg-white/80 shadow-sm"
                  />
              </div>
            </div>

            {/* Estado */}
            <div>
              <label className="block text-sm font-medium text-[#034a8a] mb-1">Estado</label>
              <div className="relative">
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full pl-3 pr-10 py-2 border border-[#03c9e6]/50 rounded-lg focus:ring-2 focus:ring-[#034a8a] focus:border-[#034a8a] bg-white/80 shadow-sm"
                  >
                  <option value="available">Disponible</option>
                  <option value="occupied">Ocupada</option>
                  <option value="maintenance">En mantenimiento</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-[#034a8a]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comodidades */}
        <div>
          <label className="block text-sm font-medium text-[#034a8a] mb-2">Comodidades</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {comfortOptions.map(option => (
              <div key={option} className="flex items-center">
                <input
                  type="checkbox"
                  id={`comfort-${option}`}
                  value={option}
                  checked={formData.comfort.some(c => c.comodidades === option)}
                  onChange={handleComfortChange}
                  className="h-4 w-4 rounded border-[#03c9e6] text-[#034a8a] focus:ring-[#034a8a]"
                  />
                <label htmlFor={`comfort-${option}`} className="ml-2 text-sm text-gray-700">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div>
          <label className="block text-sm font-medium text-[#034a8a] mb-1">Imagen de la habitación</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-[#03c9e6]/50 rounded-lg bg-white/80">
            <div className="space-y-1 text-center">
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-[#034a8a] hover:text-[#2a3d74] focus-within:outline-none"
                  >
                  <span>Subir archivo</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    />
                </label>
                <p className="pl-1">o arrastrar y soltar</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF hasta 10MB</p>
              {file && (
                <p className="text-sm text-[#056c68] mt-2">
                  <svg className="inline h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {file.name}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Botón de enviar */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-gradient-to-r from-[#034a8a] to-[#2a3d74] hover:from-[#2a3d74] hover:to-[#034a8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#03c9e6] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando...
              </>
            ) : (
              <>
                <svg className="-ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Añadir Habitación
              </>
            )}
          </button>
        </div>
      </form>
      <div className="container mx-auto p-4 pt-20">
          <div className="flex justify-between items-center mb-6">
          <button className='px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-700'>
            <Link to="/room-form">
              Regresar
            </Link>
          </button>
        </div>
      </div>
    </div>
  </>
  );
};

export default RoomForm;