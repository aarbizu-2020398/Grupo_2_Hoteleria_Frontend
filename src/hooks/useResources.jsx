// hooks/useResources.js
import { useState, useEffect } from 'react';
import { addResource, listResources } from '../services/api';

export const useResources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    nameResource: '',
    description: '',
    price: '',
    category: 'Alimentos',
    stock: '',
    isActive: true
  });

  const categories = ["Alimentos", "Técnico", "Logística", "Personal", "Otro"];

  // Cargar recursos al montar el componente
  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await listResources();
      
      if (Array.isArray(result)) {
        setResources(result);
      } else if (result && result.success === false) {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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
        price: Number(formData.price),
        stock: Number(formData.stock)
      };

      const result = await addResource(dataToSend);
      if (result.success) {
        setSuccess(true);
        // Actualizar la lista de recursos
        await fetchResources();
        // Reset form
        setFormData({
          nameResource: '',
          description: '',
          price: '',
          category: 'Alimentos',
          stock: '',
          isActive: true
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
    resources,
    formData,
    categories,
    loading,
    error,
    success,
    showForm,
    setShowForm,
    handleInputChange,
    handleSubmit,
    setSuccess,
    refreshResources: fetchResources
  };
};