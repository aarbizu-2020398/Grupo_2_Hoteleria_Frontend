import { useState, useEffect } from 'react';

const UserModal = ({ isOpen, onClose, user, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'USER'
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
  <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl shadow-2xl w-full max-w-md overflow-hidden border border-teal-100">
    <div className="p-5 border-b border-teal-200 flex justify-between items-center bg-gradient-to-r from-teal-600 to-blue-700">
      <h3 className="text-xl font-semibold text-white">
        {user ? 'Editar Usuario' : 'Crear Nuevo Usuario'}
      </h3>
      <button 
        onClick={onClose} 
        className="text-teal-100 hover:text-white text-2xl font-light transition-colors"
      >
        &times;
      </button>
    </div>
    
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-teal-800 mb-1">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-teal-400 text-teal-800 bg-white"
            placeholder="Ingrese el nombre"
            required
            maxLength="25"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-800 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-teal-400 text-teal-800 bg-teal-50"
            placeholder="correo@ejemplo.com"
            required
            disabled={!!user}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-800 mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder-teal-400 text-teal-800 bg-white"
            placeholder="12345678"
            required
            pattern="[0-9]{8}"
            title="Debe contener exactamente 8 dígitos"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-teal-800 mb-1">
            Rol
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-teal-800 bg-white appearance-none"
            required
          >
            <option value="USER">Usuario</option>
            <option value="ADMIN_HOTEL">Admin Hotel</option>
            <option value="ADMIN_PLATAFORM">Admin Plataforma</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-5 py-2 rounded-lg border border-teal-500 text-teal-600 hover:bg-teal-50 transition-colors duration-200 font-medium"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-gradient-to-r from-teal-600 to-blue-600 text-white hover:from-teal-700 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg font-medium"
        >
          {user ? 'Actualizar' : 'Guardar'}
        </button>
      </div>
    </form>
  </div>
</div>
  );
};

export default UserModal;