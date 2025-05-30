// hooks/useUsers.js
import { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '../services/api';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [pagination, setPagination] = useState({
    desde: 0,
    limit: 10
  });

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await getUsers(pagination.desde, pagination.limit);
      
      if (result.success) {
        setUsers(result.data.users);
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

  useEffect(() => {
    fetchUsers();
  }, [pagination]);

  const handleDeleteUser = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const result = await deleteUser(id);
      
      if (result.success) {
        setSuccess(true);
        await fetchUsers();
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newDesde) => {
    setPagination(prev => ({
      ...prev,
      desde: newDesde
    }));
  };

  return {
    users,
    total,
    loading,
    error,
    success,
    pagination,
    handleDeleteUser,
    handlePageChange,
    setSuccess,
    refreshUsers: fetchUsers
  };
};