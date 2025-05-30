// hooks/useRoomForm.js
import { useState, useEffect } from 'react';
import { addRoom, listRooms } from '../services/api';
import { listHotels } from '../services/api';

export const useRoomForm = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    hotel: '',
    roomNumber: '',
    floor: '',
    capacity: '',
    comfort: [],
    type: 'Individual',
    description: '',
    priceNight: '',
    status: 'available',
    statusActive: true
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const hotelsData = await listHotels();
        setHotels(hotelsData);
      } catch (err) {
        setError(err.message);
      }
    };
    
    fetchHotels();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleComfortChange = (e) => {
    const { value, checked } = e.target;
    let updatedComfort = [...formData.comfort];
    
    if (checked) {
      updatedComfort.push({ comodidades: value });
    } else {
      updatedComfort = updatedComfort.filter(item => item.comodidades !== value);
    }
    
    setFormData({
      ...formData,
      comfort: updatedComfort
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const result = await addRoom(formData, file);
      if (result.success) {
        setSuccess(true);
        // Reset form after successful submission
        setFormData({
          hotel: '',
          roomNumber: '',
          floor: '',
          capacity: '',
          comfort: [],
          type: 'Individual',
          description: '',
          priceNight: '',
          status: 'available',
          statusActive: true
        });
        setFile(null);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
};


export const useRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRooms = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await listRooms();
      
      if (Array.isArray(result)) {
        setRooms(result);
      } else if (result && result.success === false) {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return {
    rooms,
    loading,
    error,
    refreshRooms: fetchRooms
  };
};