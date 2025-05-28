import NavbarAdmin from '../../components/Navbar/NavbarDashboardAdmin';
import { useNavigate } from 'react-router-dom';

export const DashboardPageAdmin = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='my-12'>
      <NavbarAdmin/>
    </div>
      <div className="min-h-screen bg-[#ead6cb] flex flex-col">

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-[#034a8a] to-[#2a3d74] text-white py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Panel de Administración</h1>
            <p className="text-xl md:text-2xl text-[#cceeff] max-w-3xl mx-auto">
              Control total de tu almacenadora desde un solo lugar
            </p>
          </div>
        </header>

        {/* Stats Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: '+50', label: 'Usuarios Registrados' },
              { number: '+300', label: 'Eventos Realizados' },
              { number: '85%', label: 'Demanda de Hoteles' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-[#03c9e6] hover:shadow-2xl transition-shadow">
                <h2 className="text-4xl font-bold text-[#034a8a] mb-2">{item.number}</h2>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* System Cards Section */}
        <section className="py-12 px-6 flex-grow">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2a3d74] mb-8 text-center">Gestión de Hoteles</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Gestion de Hoteles',
                  desc: 'Administra los Hoteles de forma eficiente',
                  img: 'https://i.postimg.cc/kgqz1gDV/image.png',
                  route: '/hotel-form',
                },
                {
                  title: 'Servicios',
                  desc: 'Controla todos los servicios de los hoteles',
                  img: 'https://i.postimg.cc/13djB3QZ/image.png',
                  route: '/services-form', // pendiente
                },
                {
                  title: 'Cuartos',
                  desc: 'Controla todos los Cuartos de los hoteles',
                  img: 'https://i.postimg.cc/Lskq5W9g/image.png',
                  route: '/room-form',
                },
                {
                  title: 'Reservaciones',
                  desc: 'Gestiona tus reservaciones de manera organizada',
                  img: 'https://i.postimg.cc/ZRRNYpRG/image.png',
                  route: '', // pendiente
                },
                {
                  title: 'Usuarios y Permisos',
                  desc: 'Controla los accesos y roles dentro del sistema.',
                  img: 'https://i.postimg.cc/Pr4vsC31/image.png',
                  route: '', // pendiente
                },
                {
                  title: 'Salones',
                  desc: 'Controla todos los salones de los hoteles',
                  img: 'https://i.postimg.cc/yNxhxmgm/image.png',
                  route: '', // pendiente
                },
                {
                  title: 'Eventos',
                  desc: 'Controla todos los Eventos',
                  img: 'https://i.postimg.cc/Lsqcf0nv/image.png',
                  route: '', // pendiente
                },
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => item.route && navigate(item.route)}
                  className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-[#3e9254]"
                >
                  <div className="w-16 h-16 bg-[#03c9e6]/20 rounded-full flex items-center justify-center mb-4">
                    <img src={item.img} alt={`icon for ${item.title}`} />
                  </div>
                  <h4 className="text-xl font-semibold text-[#034a8a] mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#2a3d74] text-white py-6 px-6">
          <div className="max-w-7xl mx-auto text-center text-sm md:text-base">
            <p>© 2025 SCRUM maya &nbsp; | &nbsp; Panel de Administración &nbsp; | &nbsp; contacto@hotelmar.com</p>
          </div>
        </footer>
      </div>
    </>
  );
};
