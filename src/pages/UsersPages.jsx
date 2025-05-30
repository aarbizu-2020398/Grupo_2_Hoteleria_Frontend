import { useUsers } from '../hooks/useUsers';
import UserList from '../components/users/listUsers';
import { Link } from 'react-router';

const UsersPages = () => {
  const {
    users,
    total,
    loading,
    error,
    success,
    pagination,
    handleDeleteUser,
    handlePageChange,
    setSuccess,
    refreshUsers
  } = useUsers();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#034a8a]">Gestión de Usuarios</h1>
          <button
            onClick={refreshUsers}
            className="flex items-center px-4 py-2 bg-[#03c9e6] text-white rounded-md shadow-sm text-sm font-medium hover:bg-[#02a8c4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#03c9e6]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            Actualizar
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg p-6">
          <UserList 
            users={users}
            total={total}
            loading={loading}
            error={error}
            success={success}
            pagination={pagination}
            handleDeleteUser={handleDeleteUser}
            handlePageChange={handlePageChange}
            setSuccess={setSuccess}
            refreshUsers={refreshUsers}
          />
        </div>
        <div className="container mx-auto p-4 pt-20">
          <div className="flex justify-between items-center mb-6">
          <button className='px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-700'>
            <Link to="/dashboard">
              Regresar
            </Link>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UsersPages;