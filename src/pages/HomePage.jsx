import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ead6cb] to-white">
      {/* Navbar flotante sobre la imagen */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-[url('https://firefliesrenders.com/wp-content/uploads/2023/08/Evento-Jardin-E3-4K.jpg')] bg-cover bg-center"
        ></div>
        
        <Navbar />
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Un oceano de opciones!
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl text-white mb-8">
              Habitaciones <span className="font-bold">al mejor precio</span>
            </h2>
            
            <Link to="/register" className="px-8 py-3 bg-[#3e9254] text-white font-bold rounded-full hover:bg-[#2a3d74] transition-all duration-300 text-lg shadow-lg hover:shadow-xl inline-block">
              REGISTRATE
            </Link>
          </div>
        </div>
      </div>

      <section className="py-1 px-6 max-w-7xl mx-auto">
        {/* Otras secciones */}
      </section>

      <section className="bg-[#034a8a] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Habitaciones en todos los Hoteles<span className="text-[#03c9e6]">*</span>
            </h2>
            <p className="text-xl md:text-2xl">
              Reserva antes del <span className="font-bold">12 de mayo de 2025</span><br />
              y disfruta de todo lo que quieras hasta <span className="font-bold">31 de mayo de 2025</span>
            </p>
            <p className="text-sm mt-4 text-[#03c9e6]">
              *NO DISPONIBLE PARA TODAS LAS HABITACIONES
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="bg-[#056c68] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <p>Facturación por móvil</p>
            </div>

            <div className="p-4">
              <div className="bg-[#056c68] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <p>Acceso a la sala VIP</p>
            </div>

            <div className="p-4">
              <div className="bg-[#056c68] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
              <p>Entretenimiento multimedia</p>
            </div>

            <div className="p-4">
              <div className="bg-[#056c68] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <p>Embarque prioritario</p>
            </div>
          </div>
        </div>
      </section>

      {/*cards */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#034a8a] mb-4">
            Hoteles
          </h2>
          <div className="w-20 h-1 bg-[#03c9e6] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tarjeta América */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="relative h-48 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[#034a8a]/70 to-[#2a3d74]/40 flex items-end justify-center pb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#03c9e6] transition">América</h3>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-4">
                Desde resorts caribeños hasta hoteles urbanos en las principales capitales.
              </p>
            </div>
          </div>

          {/* Tarjeta Europa */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="relative h-48 bg-[url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[#034a8a]/70 to-[#2a3d74]/40 flex items-end justify-center pb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#03c9e6] transition">Europa</h3>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-4">
                Elegancia clásica y diseño vanguardista en las capitales más visitadas.
              </p>
            </div>
          </div>

          {/* Tarjeta Asia */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="relative h-48 bg-[url('https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[#034a8a]/70 to-[#2a3d74]/40 flex items-end justify-center pb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#03c9e6] transition">Asia</h3>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-4">
                Fusión perfecta entre tradición milenaria y modernidad arquitectónica.
              </p>
            </div>
          </div>

          {/* Tarjeta África */}
          <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="relative h-48 bg-[url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-t from-[#034a8a]/70 to-[#2a3d74]/40 flex items-end justify-center pb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#03c9e6] transition">África</h3>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-600 mb-4">
                Lodges de safari y resorts playeros en entornos naturales espectaculares.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28 lg:py-36 bg-gradient-to-br from-[#034a8a] to-[#2a3d74] overflow-hidden">
        <div className="absolute top-1/4 left-10 w-16 h-16 z-0 animate-float">
          <svg viewBox="0 0 24 24" fill="none" className="text-[#03c9e6] opacity-30">
            <path d="M2.5 19H21.5V21H2.5V19ZM19.07 8.07C20.837 9.835 20.837 12.73 19.07 14.49L16.76 12.17L14.45 9.85L19.07 8.07ZM12.2 6.29L9.3 9.17L4.91 5.25L7.45 3.29C8.32 2.5 9.7 2.5 10.56 3.29L12.2 6.29ZM6.18 7.89L8.5 10.2L4.28 14.91L2.5 12.2L6.18 7.89ZM13.91 14.91L11.6 12.59L8.69 15.5L10.82 19.5L13.91 14.91ZM15.5 10.2L18.11 12.2L15.5 14.29L12.89 12.2L15.5 10.2Z" fill="currentColor"/>
          </svg>
        </div>

        <div className="absolute top-20 right-20 w-24 h-12 opacity-20">
          <svg viewBox="0 0 100 50" className="text-white">
            <path d="M25,25 Q30,10 45,15 Q60,5 75,20 Q90,15 95,30 Q110,25 85,40 Q100,45 75,40 Q60,50 45,35 Q30,50 15,35 Q5,40 25,25" fill="currentColor"/>
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://traveler.marriott.com/es/wp-content/uploads/sites/2/2024/06/6345971-Almare_2C_a_Luxury_Collection_Adult_All-Inclusive_Resort_2C_Isla_Mujeres-1.jpg" 
                alt="Viajeros felices"
                className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-[#03c9e6]">Ofertas exclusivas</span> en Hoteles
              </h2>
              
              <p className="text-xl text-[#ead6cb] mb-8 max-w-lg mx-auto lg:mx-0">
                Únete a la lista de correos de MAR y recibe descuentos especiales antes que nadie
              </p>
              
              <div className="max-w-md mx-auto lg:mx-0">
                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#03c9e6] text-[#034a8a]"
                    required
                  />
                  <button 
                    type="submit" 
                    className="w-full px-8 py-4 bg-[#3e9254] hover:bg-[#2a3d74] text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    INSCRÍBETE AHORA
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-[#03c9e6] rounded-full opacity-10 transform -translate-x-1/2"></div>
        <div className="absolute top-1/3 right-32 w-16 h-16 bg-white rounded-full opacity-10"></div>
      </section>

      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#ead6cb] to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#03c9e6] rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#034a8a] rounded-full opacity-10 transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#034a8a] mb-4">
              Opiniones de <span className="text-[#03c9e6]">nuestros huéspedes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre lo que dicen nuestros clientes sobre su experiencia en nuestro hotel
            </p>
            <div className="w-24 h-1 bg-[#03c9e6] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#03c9e6]">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#3e9254]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">
                "El servicio fue excepcional desde el check-in hasta el check-out. Las habitaciones son espaciosas y limpias, con una vista impresionante. ¡Volveré seguro!"
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/32.jpg" 
                  alt="Cliente" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-[#034a8a]">María González</p>
                  <p className="text-sm text-[#056c68]">Estancia en Suite Premium</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#034a8a]">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#3e9254]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">
                "El desayuno buffet es increíble, con opciones para todos los gustos. El spa del hotel es perfecto para relajarse después de un día de turismo."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/45.jpg" 
                  alt="Cliente" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-[#034a8a]">Carlos Martínez</p>
                  <p className="text-sm text-[#056c68]">Estancia en Habitación Deluxe</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#03c9e6]">
              <div className="flex mb-4">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#3e9254]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-700 italic mb-6">
                "Excelente ubicación cerca de los principales puntos turísticos. El personal fue muy atento, aunque el wifi podría mejorar en las habitaciones superiores."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://randomuser.me/api/portraits/women/68.jpg" 
                  alt="Cliente" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-[#034a8a]">Laura Fernández</p>
                  <p className="text-sm text-[#056c68]">Estancia Familiar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-between items-center mt-12 px-12">
            <svg className="w-10 h-10 text-[#03c9e6] hover:text-[#2a3d74] cursor-pointer transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
            <div className="flex space-x-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className={`w-3 h-3 rounded-full ${item === 1 ? 'bg-[#03c9e6]' : 'bg-[#034a8a]'}`}></div>
              ))}
            </div>
            <svg className="w-10 h-10 text-[#03c9e6] hover:text-[#2a3d74] cursor-pointer transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-[#034a8a] mb-2">Hotel MAR</h2>
            <p className="text-gray-600 mb-4">Lujo y confort en el corazón de la ciudad</p>
            <div className="w-16 h-0.5 bg-[#03c9e6] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-700 mb-6">CONTACTA CON NOSOTROS</h3>
              <div className="mb-8">
                <h4 className="font-medium text-gray-800 mb-2">Teléfonos</h4>
                <div className="space-y-1 text-gray-600">
                  <p>Reservas: <a href="tel:+34912345678" className="text-[#034a8a] hover:text-[#03c9e6] transition">+34 912 345 678</a></p>
                  <p>Recepción: <a href="tel:+34918765432" className="text-[#034a8a] hover:text-[#03c9e6] transition">+34 918 765 432</a></p>
                  <p>Concierge: <a href="tel:+34915555555" className="text-[#034a8a] hover:text-[#03c9e6] transition">+34 915 555 555</a></p>
                </div>
              </div>

              <h4 className="font-medium text-gray-800 mb-4">SÍGUENOS EN REDES</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                  { name: 'Facebook', icon: 'M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z' },
                  { name: 'TripAdvisor', icon: 'M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 004.072 1.598 6 6 0 006-5.998 5.982 5.982 0 00-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 00-7.644-2.353zM12 6.255c1.531 0 2.764 1.233 2.764 2.764S13.53 11.782 12 11.782s-2.764-1.233-2.764-2.764S10.469 6.255 12 6.255zM6.004 8.483a1.497 1.497 0 10-.002 2.994 1.497 1.497 0 00.002-2.994zm11.992.002a1.497 1.497 0 10-.002 2.995 1.497 1.497 0 00.002-2.995z' }
                ].map((red) => (
            <li key={red.name}>
              <a href="#" className="flex items-center text-gray-600 hover:text-blue-500 transition">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d={red.icon}/>
                </svg>
                <span>{red.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Columna Ubicación */}
      <div>
        <h3 className="text-xl font-medium text-gray-700 mb-6">NUESTRA UBICACIÓN</h3>
        <div className="mb-8">
          <h4 className="font-medium text-gray-800 mb-2">Dirección principal</h4>
          <address className="not-italic text-gray-600 space-y-1">
            <p>Paseo Cayala, 45</p>
            <p>08003 GUATEMALA</p>
            <p>Guatemala</p>
          </address>
        </div>

        <div className="mb-8">
          <h4 className="font-medium text-gray-800 mb-2">Horarios</h4>
          <div className="text-gray-600 space-y-1">
            <p>Recepción: 24 horas</p>
            <p>Check-in: desde las 15:00</p>
            <p>Check-out: hasta las 12:00</p>
            <p>Restaurante: 7:30 - 23:30</p>
            <p>Spa: 9:00 - 21:00</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-700 mb-4">CORREO ELECTRÓNICO</h3>
          <div className="space-y-2">
            <p><a href="mailto:reservas@hotelmar.com" className="text-blue-500 hover:text-blue-700 transition">reservas@hotelmar.com</a></p>
            <p><a href="mailto:info@hotelmar.com" className="text-blue-500 hover:text-blue-700 transition">info@hotelmar.com</a></p>
            <p><a href="mailto:eventos@hotelmar.com" className="text-blue-500 hover:text-blue-700 transition">eventos@hotelmar.com</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};
export default HomePage;