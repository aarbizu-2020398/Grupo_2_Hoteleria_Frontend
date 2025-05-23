import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/api';

export const useRegister = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const registerUser = async (userData) => {
        setLoading(true);
        setError(null);
        
        try {
            // Validaciones básicas
            if (userData.password !== userData.confirmarPassword) {
                setError("Las contraseñas no coinciden");
                return false;
            }

            // Preparar datos para el backend
            const registrationData = {
                name: userData.name,
                username: userData.username,
                email: userData.email,
                password: userData.password,
                phone: userData.phone // Añadido el campo phone
            };

            const response = await register(registrationData);
            
            if(response.error) {
                setError(response.message || "Error en el registro");
                return false;
            }
            
            setSuccess(true);
            setTimeout(() => navigate('/login'), 2000);
            return true;
        } catch (err) {
            setError("Error en el servidor");
            return false;
        } finally {
            setLoading(false);
        }
    };

    return { registerUser, loading, error, success };
};