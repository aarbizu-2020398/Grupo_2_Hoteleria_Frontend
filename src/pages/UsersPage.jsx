import Navbar from '../components/Navbar/Navbar';
import UserTable from '../components/users/UserTable';

const UsersPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
        <Navbar/>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Administración de Usuarios</h1>
      <UserTable />
    </div>
  );
};

export default UsersPage;