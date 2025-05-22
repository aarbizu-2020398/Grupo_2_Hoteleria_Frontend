import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar flotante sobre la imagen */}
      <div className="relative h-screen"> {/* Contenedor para la imagen y navbar */}
        {/* Imagen de fondo ahora en el contenedor padre */}
        <div 
          className="absolute inset-0 bg-[url('https://firefliesrenders.com/wp-content/uploads/2023/08/Evento-Jardin-E3-4K.jpg')] bg-cover bg-center"
        ></div>
        
        {/* Navbar transparente y flotante */}
        <Navbar />
        
        {/* Contenido centrado sobre la imagen */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Un oceano de opciones!
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl  text-white mb-8">
              Habitaciones <span className="font-bold">al mejor precio</span>
            </h2>
            
            <Link to="/register" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl inline-block">
              REGISTRATE
            </Link>
          </div>
        </div>
      </div>

      {/* Resto del contenido */}
      <section className="py-1 px-6 max-w-7xl mx-auto">
        {/* Otras secciones */}
      </section>
      <section className="bg-blue-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Habitaciones en todos los Hoteles<span className="text-yellow-300">*</span>
            </h2>
            <p className="text-xl md:text-2xl">
              Reserva antes del <span className="font-bold">12 de mayo de 2025</span><br />
              y disfruta de todo lo que quieras hasta <span className="font-bold">31 de mayo de 2025</span>
            </p>
            <p className="text-sm mt-4 text-blue-200">
              *NO DISPONIBLE PARA TODAS LAS HABITACIONES
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <p>Facturación por móvil</p>
            </div>

            <div className="p-4">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <p>Acceso a la sala VIP</p>
            </div>

            <div className="p-4">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                </svg>
              </div>
              <p>Entretenimiento multimedia</p>
            </div>

            <div className="p-4">
              <div className="bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
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
    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
      Hoteles
    </h2>
    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Tarjeta América */}
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative h-48 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-blue-800/40 flex items-end justify-center pb-6">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition">América</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-600 mb-4">
          Desde resorts caribeños hasta hoteles urbanos en las principales capitales.
        </p>
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
          Explorar
        </button>
      </div>
    </div>

    {/* Tarjeta Europa */}
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative h-48 bg-[url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-blue-800/40 flex items-end justify-center pb-6">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition">Europa</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-600 mb-4">
          Elegancia clásica y diseño vanguardista en las capitales más visitadas.
        </p>
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
          Explorar
        </button>
      </div>
    </div>

    {/* Tarjeta Asia */}
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative h-48 bg-[url('https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-blue-800/40 flex items-end justify-center pb-6">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition">Asia</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-600 mb-4">
          Fusión perfecta entre tradición milenaria y modernidad arquitectónica.
        </p>
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
          Explorar
        </button>
      </div>
    </div>

    {/* Tarjeta África */}
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="relative h-48 bg-[url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-blue-800/40 flex items-end justify-center pb-6">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition">África</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-600 mb-4">
          Lodges de safari y resorts playeros en entornos naturales espectaculares.
        </p>
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
          Explorar
        </button>
      </div>
    </div>
  </div>
</section>
<section className="relative py-28 lg:py-36 bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
  {/* Avión decorativo animado */}
  <div className="absolute top-1/4 left-10 w-16 h-16 z-0 animate-float">
    <svg viewBox="0 0 24 24" fill="none" className="text-yellow-300 opacity-30">
      <path d="M2.5 19H21.5V21H2.5V19ZM19.07 8.07C20.837 9.835 20.837 12.73 19.07 14.49L16.76 12.17L14.45 9.85L19.07 8.07ZM12.2 6.29L9.3 9.17L4.91 5.25L7.45 3.29C8.32 2.5 9.7 2.5 10.56 3.29L12.2 6.29ZM6.18 7.89L8.5 10.2L4.28 14.91L2.5 12.2L6.18 7.89ZM13.91 14.91L11.6 12.59L8.69 15.5L10.82 19.5L13.91 14.91ZM15.5 10.2L18.11 12.2L15.5 14.29L12.89 12.2L15.5 10.2Z" fill="currentColor"/>
    </svg>
  </div>

  {/* Nubes decorativas */}
  <div className="absolute top-20 right-20 w-24 h-12 opacity-20">
    <svg viewBox="0 0 100 50" className="text-white">
      <path d="M25,25 Q30,10 45,15 Q60,5 75,20 Q90,15 95,30 Q110,25 85,40 Q100,45 75,40 Q60,50 45,35 Q30,50 15,35 Q5,40 25,25" fill="currentColor"/>
    </svg>
  </div>

  <div className="relative max-w-6xl mx-auto px-6 z-10">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Imagen ilustrativa */}
      <div className="lg:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Viajeros felices"
          className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
        />
      </div>

      {/* Contenido del formulario */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="text-yellow-300">Ofertas exclusivas</span> en vuelos
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-lg mx-auto lg:mx-0">
          Únete a la lista de correos de Soarée y recibe descuentos especiales antes que nadie
        </p>
        
        <div className="max-w-md mx-auto lg:mx-0">
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-300 text-blue-900"
              required
            />
            <button 
              type="submit" 
              className="w-full px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              INSCRÍBETE AHORA
            </button>
          </form>
          <p className="text-sm text-blue-200 mt-4">
            * Prometemos no enviarte spam. Más de 50,000 viajeros ya confían en nosotros.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Efectos decorativos adicionales */}
  <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-yellow-400 rounded-full opacity-10 transform -translate-x-1/2"></div>
  <div className="absolute top-1/3 right-32 w-16 h-16 bg-white rounded-full opacity-10"></div>
</section>

<section className="relative py-20 lg:py-28 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
  {/* Elementos decorativos */}
  <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-600 rounded-full opacity-10 transform translate-x-1/2 translate-y-1/2"></div>
  
  <div className="relative max-w-7xl mx-auto px-6 z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
        Directamente de <span className="text-yellow-500">nuestros pasajeros</span>
      </h2>
      <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Testimonio 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-400">
        <div className="text-5xl font-bold text-blue-600 mb-4">11</div>
        <p className="text-gray-700 italic mb-6">
          "Esta es mi aerolínea preferida, por su servicio de primera categoría y su relación calidad-precio."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold mr-4">
            B
          </div>
          <div>
            <p className="font-bold text-blue-900">BLANCA</p>
            <p className="text-sm text-blue-600">EJECUTIVA</p>
          </div>
        </div>
      </div>

      {/* Testimonio 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-400">
        <div className="text-5xl font-bold text-blue-600 mb-4">12</div>
        <p className="text-gray-700 italic mb-6">
          "Soarée tiene ofertas inmejorables y vuela a muchos destinos."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-800 font-bold mr-4">
            A
          </div>
          <div>
            <p className="font-bold text-blue-900">ANA</p>
            <p className="text-sm text-blue-600">GERENTE</p>
          </div>
        </div>
      </div>

      {/* Testimonio 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-yellow-400">
        <div className="text-5xl font-bold text-blue-600 mb-4">13</div>
        <p className="text-gray-700 italic mb-6">
          "Volar con Soarée se convierte en un verdadero lujo, gracias a la atención del personal que nos mima."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold mr-4">
            E
          </div>
          <div>
            <p className="font-bold text-blue-900">ENRIQUE</p>
            <p className="text-sm text-blue-600">EMPRESARIO</p>
          </div>
        </div>
      </div>
    </div>

    {/* Flechas decorativas */}
    <div className="hidden md:flex justify-between items-center mt-12 px-12">
      <svg className="w-10 h-10 text-blue-400 hover:text-blue-600 cursor-pointer transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
      </svg>
      <div className="flex space-x-2">
        {[1, 2, 3].map((item) => (
          <div key={item} className={`w-3 h-3 rounded-full ${item === 1 ? 'bg-yellow-400' : 'bg-blue-200'}`}></div>
        ))}
      </div>
      <svg className="w-10 h-10 text-blue-400 hover:text-blue-600 cursor-pointer transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
      </svg>
    </div>
  </div>
</section>




<section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-light text-gray-800 mb-2">Aerolínea Soarée</h2>
      <div className="w-16 h-0.5 bg-blue-500 mx-auto"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Columna Contacto */}
      <div>
        <h3 className="text-xl font-medium text-gray-700 mb-6">CONTACTA CON NOSOTROS</h3>
        <ul className="space-y-3">
          {[
            { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
            { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
            { name: 'Facebook', icon: 'M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z' },
            { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
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

      {/* Columna Ubicaciones */}
      <div>
        <h3 className="text-xl font-medium text-gray-700 mb-6">NUESTRAS OFICINAS</h3>
        <div className="space-y-6">
          {[
            {
              ciudad: 'Amsterdam',
              direccion: ['Van Diemenstraat 38', '1013NH Amsterdam', 'Países Bajos']
            },
            {
              ciudad: 'Oslo',
              direccion: ['Trondheimsveien 135', '0570 Oslo', 'Noruega']
            },
            {
              ciudad: 'Londres',
              direccion: ['23 Englefield Rd', 'London N1 4JX', 'Reino Unido']
            }
          ].map((loc, index) => (
            <div key={index} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
              <h4 className="font-medium text-gray-800 mb-2">{loc.ciudad}</h4>
              <address className="not-italic text-gray-600">
                {loc.direccion.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </address>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-medium text-gray-700 mb-4">CORREO ELECTRÓNICO</h3>
          <a href="mailto:hola@unstliogenial.es" className="text-blue-500 hover:text-blue-700 transition">
            hola@unstliogenial.es
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};
export default HomePage;