import { Link } from 'react-router'
import NavbarAdmin from '../components/Navbar/NavbarDashboardAdmin'

const RoomFormPages = () => {
  return (
    <>
    <div className='my-12'>
      <NavbarAdmin/>
    </div>
      <div className="min-h-screen bg-gradient-to-br from-[#2a3d74] to-[#034a8a] p-6">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[#ead6cb] text-center mb-2">Panel de Habitaciones</h1>
        <p className="text-center text-[#03c9e6]">Gestión completa de habitaciones</p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add Room Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(2,_112,_179,_0.3)]">
            <div className="h-2 bg-[#3e9254]"></div>
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#056c68]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[#2a3d74] mb-4 text-center">Agregar Nueva Habitación</h2>
              <p className="text-gray-600 mb-8 text-center">Registra nuevas habitaciones en el sistema con toda su información y características.</p>
              <div className="flex justify-center">
                <Link 
                  to="/add-room"
                  className="px-8 py-3 bg-[#034a8a] hover:bg-[#2a3d74] text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center"
                >
                  <span>Agregar Cuarto</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Room List Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(2,_112,_179,_0.3)]">
            <div className="h-2 bg-[#03c9e6]"></div>
            <div className="p-8">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#056c68]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[#2a3d74] mb-4 text-center">Lista de Habitaciones</h2>
              <p className="text-gray-600 mb-8 text-center">Visualiza, edita o elimina las habitaciones registradas en el sistema.</p>
              <div className="flex justify-center">
                <Link 
                  to="/room-list"
                  className="px-8 py-3 bg-[#3e9254] hover:bg-[#056c68] text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center"
                >
                  <span>Lista de Cuartos</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="container mx-auto p-4 pt-20">
          <div className="flex justify-between items-center mb-6">
          <button className='px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-700'>
            <Link to="/dashboard">
              Regresar
            </Link>
          </button>
        </div>
      </div>
      {/* Footer */}
      <footer className="mt-16 text-center text-[#ead6cb]/70 text-sm">
        <p>© SCRUM Maya {new Date().getFullYear()} Sistema de Administración Hotelera. Todos los derechos reservados.</p>
      </footer>
    </div>
    </>
  )
}
export default RoomFormPages