import { useState } from 'react';
import { addRoom } from '../services/api';
import { useNavigate } from 'react-router-dom';

export const useAddRoom = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const submitRoom = async (roomData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Convertir a FormData aquí en lugar del service
      const formData = new FormData();
      
      // Añadir todos los campos
      for (const key in roomData) {
        if (roomData[key] !== null && roomData[key] !== undefined) {
          formData.append(key, roomData[key]);
        }
      }

      const response = await addRoom(formData);
      
      if (response.success) {
        setSuccess(true);
        setTimeout(() => navigate('/rooms'), 2000);
        return true;
      } else {
        setError(response.error);
        return false;
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submitRoom, loading, error, success };
};