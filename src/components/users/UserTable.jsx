import { useState } from 'react';
import { useUsers } from '../../hooks/useUsers';
import UserModal from './UserModal';

const UserTable = () => {
  const { 
    users, 
    loading, 
    error, 
    pagination, 
    fetchUsers, 
    updateUser, 
    deleteUser 
  } = useUsers();
  
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    role: '',
    search: ''
  });

  const handlePageChange = (newPage) => {
    fetchUsers(newPage, filters);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    fetchUsers(1, filters);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este usuario?')) {
      try {
        await deleteUser(id);
        alert('Usuario eliminado correctamente');
      } catch (error) {
        alert(error.message || 'Error al eliminar usuario');
      }
    }
  };

  const handleSave = async (userData) => {
    try {
      await updateUser(editingUser._id, userData);
      setIsModalOpen(false);
      alert('Usuario actualizado correctamente');
    } catch (error) {
      alert(error.message || 'Error al actualizar usuario');
    }
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl shadow-xl overflow-hidden border border-teal-100">
  {/* Header y Filtros */}
  <div className="p-6 border-b border-teal-200 bg-gradient-to-r from-teal-600 to-blue-700">
    <h2 className="text-2xl font-bold text-white mb-6">Gestión de Usuarios</h2>
    
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        name="search"
        placeholder="Buscar usuarios..."
        className="px-4 py-2 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent flex-grow placeholder-teal-400"
        value={filters.search}
        onChange={handleFilterChange}
      />
      
      <select
        name="role"
        value={filters.role}
        onChange={handleFilterChange}
        className="px-4 py-2 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent bg-white text-teal-800"
      >
        <option value="">Todos los roles</option>
        <option value="ADMIN_PLATAFORM">Admin Plataforma</option>
        <option value="ADMIN_HOTEL">Admin Hotel</option>
        <option value="USER">Usuario</option>
      </select>
      
      <button
        onClick={handleApplyFilters}
        className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors shadow-md hover:shadow-lg"
      >
        <span className="flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
          Filtrar
        </span>
      </button>
    </div>
  </div>

  {/* Tabla */}
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-teal-200">
      <thead className="bg-teal-500/10">
        <tr>
          <th className="px-6 py-4 text-left text-sm font-semibold text-teal-800 uppercase tracking-wider">Nombre</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-teal-800 uppercase tracking-wider">Email</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-teal-800 uppercase tracking-wider">Teléfono</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-teal-800 uppercase tracking-wider">Rol</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-teal-800 uppercase tracking-wider">Acciones</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-teal-100">
        {loading ? (
          <tr>
            <td colSpan="5" className="px-6 py-8 text-center">
              <div className="flex justify-center items-center space-x-2 text-teal-600">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Cargando usuarios...</span>
              </div>
            </td>
          </tr>
        ) : error ? (
          <tr>
            <td colSpan="5" className="px-6 py-4 text-center text-red-500">
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
            </td>
          </tr>
        ) : users.length === 0 ? (
          <tr>
            <td colSpan="5" className="px-6 py-8 text-center text-teal-600">
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="mt-2 font-medium">No se encontraron usuarios</p>
              </div>
            </td>
          </tr>
        ) : (
          users.map((user) => (
            <tr key={user._id} className="hover:bg-teal-50/50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-teal-900">{user.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-teal-700">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-teal-700">{user.phone}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  user.role === 'ADMIN_PLATAFORM' ? 'bg-blue-100 text-blue-800' :
                  user.role === 'ADMIN_HOTEL' ? 'bg-teal-100 text-teal-800' :
                  'bg-emerald-100 text-emerald-800'
                }`}>
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => handleEdit(user)}
                  className="text-blue-600 hover:text-blue-800 mr-4 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="text-rose-600 hover:text-rose-800 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>

  {/* Paginación */}
  <div className="px-6 py-4 bg-teal-50/50 border-t border-teal-200 flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="text-sm text-teal-700">
      Mostrando <span className="font-semibold">{(pagination.page - 1) * pagination.limit + 1}</span> a{' '}
      <span className="font-semibold">
        {Math.min(pagination.page * pagination.limit, pagination.total)}
      </span>{' '}
      de <span className="font-semibold">{pagination.total}</span> usuarios
    </div>
    <div className="flex space-x-2">
      <button
        onClick={() => handlePageChange(pagination.page - 1)}
        disabled={pagination.page === 1}
        className={`px-4 py-2 rounded-lg flex items-center ${pagination.page === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-teal-700 hover:bg-teal-100 border border-teal-200 shadow-sm'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Anterior
      </button>
      <button
        onClick={() => handlePageChange(pagination.page + 1)}
        disabled={pagination.page * pagination.limit >= pagination.total}
        className={`px-4 py-2 rounded-lg flex items-center ${pagination.page * pagination.limit >= pagination.total ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-teal-700 hover:bg-teal-100 border border-teal-200 shadow-sm'}`}
      >
        Siguiente
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>

  {/* Modal de edición */}
  <UserModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    user={editingUser}
    onSave={handleSave}
  />
</div>
  );
};

export default UserTable;