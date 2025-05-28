import  NavbarAdmin  from '../../components/Navbar/NavbarDashboardAdmin';
import { useNavigate } from 'react-router-dom';

export const DashboardPageAdmin = () => {
  const navigate = useNavigate();
  return (
    <> 
    
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <NavbarAdmin/>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Panel de Administración </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Control total de tu almacenadora desde un solo lugar
            </p>
          </div>
        </header>

        {/* Stats Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <h2 className="text-4xl font-bold text-blue-600 mb-2">+50</h2>
              <p className="text-gray-600"> Usuarios Registrados</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <h2 className="text-4xl font-bold text-blue-600 mb-2">+300</h2>
              <p className="text-gray-600">Eventos Realizados</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <h2 className="text-4xl font-bold text-blue-600 mb-2">85%</h2>
              <p className="text-gray-600">Demanda de Hoteles</p>
            </div>
          </div>
        </section>

        {/* System Cards Section */}
        <section className="py-12 px-6 flex-grow">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Gestión de Hoteles</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* hoteles  */}
              <div 
                onClick={() => navigate("/hotel-form")}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <i className="fas fa-box-open text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2"> Gestion de Hoteles</h4>
                <p className="text-gray-600">Administra los Hoteles de forma eficiente</p>
              </div>

              {/* Movements Management */}
              <div 
                onClick={() => navigate( /* rutas servicios*/)}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <i className="fas fa-exchange-alt text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Servicios</h4>
                <p className="text-gray-600">Controla todos los servicios de los hoteles</p>
              </div>

              {/* Suppliers Management */}
              <div 
                onClick={() => navigate(/* rutas de reservaciones*/)}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <i className="fas fa-truck text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2"> Reservaciones</h4>
                <p className="text-gray-600">Gestiona tus reservaciones de manera organizada</p>
              </div>

              {/* Clients Management */}
              <div 
                onClick={() => navigate( /*rutas de clientes */)}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <i className="fas fa-users text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Clientes</h4>
                <p className="text-gray-600">Visualiza y administra a todos tus clientes</p>
              </div>

              {/* Users Management */}
              <div 
                onClick={() => navigate(/* rutas de usuarios */)}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <i className="fas fa-user-shield text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Usuarios y Permisos</h4>
                <p className="text-gray-600">Controla los accesos y roles dentro del sistema.</p>
              </div>
              {/* Movements Management */}
              <div 
                onClick={() => navigate( /* rutas servicios*/)}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <i className="fas fa-exchange-alt text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Salones</h4>
                <p className="text-gray-600">Controla todos los salones de los hoteles</p>
              </div>
              {/* Movements Management */}
              <div 
                onClick={() => navigate( /* rutas servicios*/)}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <i className="fas fa-exchange-alt text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Eventos</h4>
                <p className="text-gray-600">Controla todos los Eventos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 px-6">
          <div className="max-w-7xl mx-auto text-center text-sm md:text-base">
            <p>© 2025 SCRUM maya &nbsp; | &nbsp; Panel de Administración &nbsp; | &nbsp; contacto@hotelmar.com</p>
          </div>
        </footer>
      </div>
  </>
  );
};