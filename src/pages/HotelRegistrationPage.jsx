import { useState } from 'react';
import CreateHotelForm from '../components/hotel/hotelForm';
import { useHotelRegistration, useHotels } from '../hooks/useHotels';
import HotelList from "../components/hotel/hotelList"
import { Link } from 'react-router';
import NavbarAdmin from '../components/Navbar/NavbarDashboardAdmin';

const HotelRegistrationPage = () => {
  const [showForm, setShowForm] = useState(false);
  const { submitHotel, error, success, reset } = useHotelRegistration();
  const { hotels, loading, refresh } = useHotels();

  const handleSubmit = async (hotelData) => {
    const result = await submitHotel(hotelData);
    if (result.success) {
      setShowForm(false);
    }
  };

  return (
    <>
    <div className='my-12'>
      <NavbarAdmin/>
    </div>
      <div className="min-h-screen bg-[#ead6cb]">
        <div className="container mx-auto p-4 pt-20">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-[#2a3d74]">Gestión de Hoteles</h1>
            <button
              onClick={() => {
                reset();
                setShowForm(true);
              }}
              className="px-4 py-2 bg-[#034a8a] text-white rounded-md hover:bg-[#056c68] transition-colors"
            >
              Registrar Nuevo Hotel
            </button>
          </div>

          {error && !showForm && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded shadow">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-[#3e9254] rounded shadow">
              ¡Hotel registrado con éxito!
            </div>
          )}

          <div className="container mx-auto px-4 py-8 bg-white rounded-xl shadow-md border-l-4 border-[#03c9e6]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-[#034a8a]">Nuestros Hoteles</h2>
              <button
                onClick={refresh}
                className="px-4 py-2 bg-[#03c9e6] text-white rounded hover:bg-[#056c68] transition-colors"
              >
                Actualizar lista
              </button>
            </div>

            <HotelList 
              hotels={hotels}
              loading={loading}
              error={error}
            />
          </div>
          <div className="container mx-auto p-4 pt-20">
          <div className="flex justify-between items-center mb-6">
          <button className='px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-700'>
            <Link to="/dashboard">
              Regresar
            </Link>
          </button>
        </div>
      </div>

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
