import { useState, useEffect } from 'react';
import { 
  listUsers as listUsersApi,
  updateUser as updateUserApi,
  deleteUser as deleteUserApi
} from '../services/api.jsx';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0
  });

  const fetchUsers = async (page = 1, filters = {}) => {
    setLoading(true);
    setError(null);
    try {
      const params = {
        desde: (page - 1) * pagination.limit,
        limite: pagination.limit,
        ...filters
      };
      
      const { success, data, error } = await listUsersApi(params);
      
      if (success) {
        setUsers(data.users);
        setPagination(prev => ({
          ...prev,
          page,
          total: data.total
        }));
      } else {
        setError(error);
      }
    } catch (err) {
      setError(err.message || 'Error al cargar usuarios');
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id, userData) => {
    try {
      const { success, data, error } = await updateUserApi(id, userData);
      if (success) {
        setUsers(users.map(user => 
          user._id === id ? data.user : user
        ));
        return { success: true, data };
      } else {
        throw new Error(error);
      }
    } catch (err) {
      throw err;
    }
  };

  const deleteUser = async (id) => {
    try {
      const { success, error } = await deleteUserApi(id);
      if (success) {
        setUsers(users.filter(user => user._id !== id));
        return true;
      } else {
        throw new Error(error);
      }
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    error,
    pagination,
    fetchUsers,
    updateUser,
    deleteUser
  };
};