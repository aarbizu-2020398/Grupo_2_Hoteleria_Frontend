import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { isAuthenticated } from '../services/api';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mounted, setMounted] = useState(false);
    const { loginUser, loading, error } = useLogin();
    const navigate = useNavigate();

    useEffect(() => {
        setMounted(true);
        
        // Redirige si ya está autenticado
        if(isAuthenticated()) {
            navigate('/login');
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginUser({ email, password });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className={`min-h-[calc(100vh-4rem)] flex items-center justify-center transition-opacity duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${mounted ? 'translate-y-0' : 'translate-y-5'}`}>
                    <div className="flex flex-col md:flex-row">
                        {/* Columna de la imagen */}
                        <div className="w-full md:w-1/2 bg-gray-800 flex items-center justify-center p-8">
                            <div className={`transition-all duration-500 delay-100 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                                <img 
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/433896744.jpg?k=dc6eb49746df343dc7b91c5c8ab034d5d53eedc820ea910ca3a9e889bc4a62cd&o=&hp=1" 
                                    alt="Login illustration"
                                    className="w-full h-auto rounded-lg shadow-xl object-cover"
                                />
                                <div className="mt-6 text-center text-white">
                                    <h3 className="text-2xl font-bold mb-2">Bienvenido de vuelta</h3>
                                    <p className="text-gray-300">Inicia sesión para acceder a tu cuenta</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Columna del formulario */}
                        <div className="w-full md:w-1/2 p-8 md:p-10">
                            <h2 className={`text-3xl font-bold text-center text-gray-800 mb-2 transition-all duration-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                                Sign in to continue
                            </h2>
                            
                            {error && (
                                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
                                    {error}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                <div className={`transition-all duration-300 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                                        EMAIL
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                
                                <div className={`transition-all duration-300 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                                        PASSWORD
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
            
                                <div className={`transition-all duration-300 delay-250 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full py-3 px-4 bg-black hover:bg-gray-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                                    >
                                        {loading ? 'Processing...' : 'Login'}
                                    </button>
                                </div>
                            </form>
                            
                            <div className={`mt-6 text-center transition-all duration-300 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                <p className="text-sm text-gray-600">
                                    ¿No tienes una cuenta?{' '}
                                    <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
                                        Regístrate
                                    </Link>
                                </p>
                            </div>
                            
                            <div className={`mt-4 text-center transition-all duration-300 delay-350 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors">
                                    Back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;