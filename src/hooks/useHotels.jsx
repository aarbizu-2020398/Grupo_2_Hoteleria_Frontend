import { useState } from 'react';
import { registerHotel } from '../services/api';

export const useHotelRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitHotel = async (formData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      // Crear FormData para enviar la imagen
      const formDataToSend = new FormData();
      formDataToSend.append('nameHotel', formData.nameHotel);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('comfort', formData.comfort);
      formDataToSend.append('pictureHotel', formData.foto);

      // Llamar al servicio con FormData
      const result = await registerHotel(formDataToSend);
      
      if (!result.success) {
        setError(result.error);
        return result;
      }
      
      setSuccess(true);
      return result;
    } catch (err) {
      const errorMsg = err.message || 'Error al registrar el hotel';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  return { 
    submitHotel, 
    loading, 
    error, 
    success,
    reset: () => {
      setError(null);
      setSuccess(false);
    }
  };
};