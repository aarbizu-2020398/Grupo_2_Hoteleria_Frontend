import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmarPassword: ''
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      <div className={`pt-12 pb-12 px-4 transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${mounted ? 'translate-y-0' : 'translate-y-5'}`}>
          <div className="flex flex-col md:flex-row">
            {/* Columna de la imagen */}
            <div className="w-full md:w-1/2 bg-gray-800 flex items-center justify-center p-8">
              <div className={`transition-all duration-500 delay-100 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <img 
                  src="https://firefliesrenders.com/wp-content/uploads/2023/08/Beach-Hotel-E3-4K-1024x769.jpg" 
                  alt="Register illustration"
                  className="w-full h-auto rounded-lg shadow-xl object-cover"
                />
                <div className="mt-6 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Bienvenido a nuestra plataforma</h3>
                  <p className="text-gray-300">Crea tu cuenta y descubre todas las funcionalidades</p>
                </div>
              </div>
            </div>
            
            {/* Columna del formulario */}
            <div className="w-full md:w-1/2 p-8 md:p-10">
              <h2 className={`text-3xl font-bold text-center text-gray-800 mb-4 transition-all duration-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                Create new Account
              </h2>
              
              <div className="mb-6 text-center">
                <p className="text-sm text-gray-600">
                  Already Registered?{' '}
                  <a href="/login" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                    Login
                  </a>
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className={`transition-all duration-300 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                    NAME
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                  />
                </div>
                
                <div className={`transition-all duration-300 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                    APELLIDO
                  </label>
                  <input
                    id="apellido"
                    name="apellido"
                    type="text"
                    required
                    value={formData.apellido}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                  />
                </div>
                
                <div className={`transition-all duration-300 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                    EMAIL
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                  />
                </div>
                
                <div className={`transition-all duration-300 delay-250 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                    PASSWORD
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                  />
                </div>
                
                <div className={`transition-all duration-300 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <label htmlFor="confirmarPassword" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                    CONFIRM PASSWORD
                  </label>
                  <input
                    id="confirmarPassword"
                    name="confirmarPassword"
                    type="password"
                    required
                    value={formData.confirmarPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                  />
                </div>
                
                <div className={`pt-2 transition-all duration-300 delay-350 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-black hover:bg-gray-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              
              <div className={`mt-6 text-center transition-all duration-300 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <a href="/" className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors">
                  Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;