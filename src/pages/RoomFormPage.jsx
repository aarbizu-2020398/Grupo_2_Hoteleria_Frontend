import  { useState, useEffect } from 'react';
import { useAddRoom } from '../hooks/useRooms';
import RoomForm from '../components/Room/RoomForm';
import Navbar from '../components/Navbar/Navbar';
import { apiClient } from '../services/api'; 

const AddRoomPage = () => {
  const [formData, setFormData] = useState({
    hotel: '',
    roomNumber: '',
    floor: '',
    capacity: '',
    type: '',
    description: '',
    priceNight: '',
    media: null
  });

  const [hotels, setHotels] = useState([]);
  const { submitRoom, loading, error, success } = useAddRoom();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await apiClient.get('/hotels');
        setHotels(response.data);
      } catch (err) {
        console.error('Error al cargar hoteles:', err);
      }
    };
    fetchHotels();
  }, []);

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
      media: e.target.files[0] // Guarda el archivo directamente
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitRoom(formData); // Envía el objeto completo
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-6">Añadir Nueva Habitación</h1>
          
          {success ? (
            <div className="p-4 bg-green-100 text-green-700 rounded-md text-center">
              Habitación añadida con éxito! Redirigiendo...
            </div>
          ) : (
            <RoomForm 
              formData={formData}
              handleChange={handleChange}
              handleFileChange={handleFileChange}
              handleSubmit={handleSubmit}
              loading={loading}
              hotels={hotels}
              error={error}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddRoomPage;