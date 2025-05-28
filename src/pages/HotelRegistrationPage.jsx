import  { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import CreateHotelForm from '../components/hotel/hotelForm';
import { useHotelRegistration } from '../hooks/useHotels';

const HotelRegistrationPage = () => {
  const [showForm, setShowForm] = useState(false);
  const { submitHotel, loading, error, success, reset } = useHotelRegistration();

  const handleSubmit = async (hotelData) => {
    const result = await submitHotel(hotelData);
    if (result.success) {
      setShowForm(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <div className="container mx-auto p-4 pt-20">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Gestión de Hoteles</h1>
            <button
              onClick={() => {
                reset();
                setShowForm(true);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
              Registrar Nuevo Hotel
            </button>
          </div>

          {error && !showForm && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
              ¡Hotel registrado con éxito!
            </div>
          )}

          {/* Aquí iría la lista de hoteles registrados */}
          
          {showForm && (
            <CreateHotelForm 
            onClose={() => setShowForm(false)} 
              onSubmit={handleSubmit}
              />
            )}
        </div>
      </div>
  </>
  );
};

export default HotelRegistrationPage;