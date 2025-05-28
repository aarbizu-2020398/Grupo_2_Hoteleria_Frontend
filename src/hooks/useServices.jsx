// hooks/useServices.js
import { useState, useEffect } from 'react';
import { addService, listServices } from '../services/api';

export const useServiceForm = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    nameService: '',
    price: '',
    unitType: 'Unidad',
    statusActive: true
  });

  // Cargar servicios al montar el componente
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const servicesData = await listServices();
        if (servicesData.success !== false) {
          setServices(servicesData);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchServices();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const dataToSend = {
        ...formData,
        price: Number(formData.price)
      };

      const result = await addService(dataToSend);
      if (result.success) {
        setSuccess(true);
        // Actualizar la lista de servicios
        const updatedServices = await listServices();
        setServices(updatedServices);
        // Reset form
        setFormData({
          nameService: '',
          price: '',
          unitType: 'Unidad',
          statusActive: true
        });
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
    services,
    formData,
    loading,
    error,
    success,
    showForm,
    setShowForm,
    handleInputChange,
    handleSubmit,
    setSuccess
  };
};