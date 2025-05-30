import { useState, useEffect } from 'react';
import { registerHotel, listHotels } from '../services/api';
import  HotelList  from "../components/hotel/hotelList"

export const useHotelRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitHotel = async (formData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const formDataToSend = new FormData();
      formDataToSend.append('nameHotel', formData.nameHotel);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('comfort', formData.comfort);
      formDataToSend.append('pictureHotel', formData.foto);
      formDataToSend.append('description', formData.description);

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

export const useHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHotels = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await listHotels();
      
      if (Array.isArray(response)) {
        setHotels(response);
      } else if (response?.success === false) {
        setError(response.error);
      }
    } catch (err) {
      setError('Error al cargar los hoteles');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const refresh = () => {
    fetchHotels();
  };

  return {
    hotels,
    loading,
    error,
    refresh
  };
};