// hooks/useLounges.js
import { useState, useEffect } from 'react';
import { registerLounge, listLounges, listHotels } from '../services/api';

export const useLounges = () => {
  const [lounges, setLounges] = useState([]);
  const [total, setTotal] = useState(0);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [pagination, setPagination] = useState({
    desde: 0,
    limite: 30
  });
  
  const [formData, setFormData] = useState({
    name: '',
    hotel: '',
    description: '',
    pricePerHour: '',
    statusActive: 'Active',
    status: true
  });

  const [file, setFile] = useState(null);

  // Cargar salones y hoteles al montar el componente
  useEffect(() => {
    fetchLounges();
    fetchHotels();
  }, [pagination]);

  const fetchLounges = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await listLounges(pagination.desde, pagination.limite);
      
      if (result.success) {
        setLounges(result.data.lounges);
        setTotal(result.data.total);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchHotels = async () => {
    try {
      const hotelsData = await listHotels();
      if (hotelsData.success !== false) {
        setHotels(hotelsData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePageChange = (newDesde) => {
    setPagination(prev => ({
      ...prev,
      desde: newDesde
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const dataToSend = {
        ...formData,
        pricePerHour: Number(formData.pricePerHour)
      };

      const result = await registerLounge(dataToSend, file);
      if (result.success) {
        setSuccess(true);
        // Actualizar la lista de salones
        await fetchLounges();
        // Reset form
        setFormData({
          name: '',
          hotel: '',
          description: '',
          pricePerHour: '',
          statusActive: 'Active',
          status: true
        });
        setFile(null);
        // Ocultar formulario
        setShowForm(false);
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
    lounges,
    total,
    hotels,
    formData,
    file,
    loading,
    error,
    success,
    showForm,
    pagination,
    setShowForm,
    handleInputChange,
    handleFileChange,
    handleSubmit,
    handlePageChange,
    setSuccess,
    refreshLounges: fetchLounges
  };
};