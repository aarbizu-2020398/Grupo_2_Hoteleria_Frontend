import { useState } from 'react';

const CreateHotelForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    nameHotel: '',
    address: '',
    category: '',
    comfort: 'Standard',
    description: ""
  });
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Validar tipo de archivo
      const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!validTypes.includes(selectedFile.type)) {
        setError('Por favor sube una imagen válida (JPEG, PNG o GIF)');
        return;
      }

      // Validar tamaño (max 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('La imagen no debe exceder los 5MB');
        return;
      }

      setFile(selectedFile);
      setError('');

      // Crear preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validaciones frontend
    if (formData.nameHotel.length < 5) {
      setError('El nombre del hotel debe tener al menos 5 caracteres');
      setIsSubmitting(false);
      return;
    }

    if (formData.address.length < 10) {
      setError('La dirección debe tener al menos 10 caracteres');
      setIsSubmitting(false);
      return;
    }

    if (!formData.category) {
      setError('La categoría es requerida');
      setIsSubmitting(false);
      return;
    }

    if (!formData.description) {
      setError('La descripción es requerida');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await onSubmit({
        ...formData,
        foto: file
      });
      
      if (!result.success) {
        setError(result.error);
      }
    } catch (err) {
      setError('Error al procesar la solicitud: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Registrar Hotel</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Nombre del Hotel*
              </label>
              <input
                type="text"
                name="nameHotel"
                value={formData.nameHotel}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                minLength="5"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Dirección*
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                minLength="10"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Categoría*
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Ej: 5 Estrellas, Boutique, Resort..."
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Descripcion*
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Ej: Hotel deluxe..."
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Nivel de Comodidad
              </label>
              <select
                name="comfort"
                value={formData.comfort}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Lujo">Lujo</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Imagen del Hotel*
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
                accept="image/jpeg, image/png, image/jpg"
                required
              />
              {previewImage && (
                <div className="mt-2">
                  <img 
                    src={previewImage} 
                    alt="Preview del hotel" 
                    className="h-32 w-full object-cover rounded-md border"
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Registrar Hotel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateHotelForm;