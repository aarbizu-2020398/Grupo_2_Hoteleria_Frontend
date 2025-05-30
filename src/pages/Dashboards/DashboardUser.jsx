import  Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const DashboardPageUser = () => {
  const navigate = useNavigate();
  return (
    <> 
    
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar/>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-emerald-600 to-emerald-600 text-white py-25 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Panel de Usuario </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Haz todas tus reservaciones y gestiona tus eventos de forma sencilla y rápida.
            </p>
          </div>
        </header>

        {/* Stats Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <h2 className="text-4xl font-bold text-emerald-600 mb-2">+100</h2>
              <p className="text-gray-600"> Usuarios  Satisfechos</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <h2 className="text-4xl font-bold text-emerald-600  mb-2">+300</h2>
              <p className="text-gray-600">Eventos Realizados</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <h2 className="text-4xl font-bold text-emerald-600 mb-2">85%</h2>
              <p className="text-gray-600">Demanda de Reservaciones</p>
            </div>
          </div>
        </section>

        {/* System Cards Section */}
        <section className="py-12 px-6 flex-grow">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Gestión de Reservas y Eventos</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* hoteles  */}
              <div 
                onClick={() => navigate("/hotel-form")}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <i className="fas fa-box-open text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2"> Gestión de Reservas</h4>
                <p className="text-gray-600">Administra las Reservas de forma eficiente</p>
              </div>

              {/* Movements Management */}
              <div 
                onClick={() => navigate( /* rutas servicios*/)}
                className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <i className="fas fa-exchange-alt text-2xl"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Gestión de Eventos</h4>
                <p className="text-gray-600">Controla todos los eventos de los hoteles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 px-6">
          <div className="max-w-7xl mx-auto text-center text-sm md:text-base">
            <p>© 2025 SCRUM maya &nbsp; | &nbsp; Panel de Usuario &nbsp; | &nbsp; contacto@hotelmar.com</p>
          </div>
        </footer>
      </div>
  </>
  );
};
export default DashboardPageUser;