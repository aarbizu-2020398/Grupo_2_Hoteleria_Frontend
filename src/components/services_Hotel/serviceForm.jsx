const ServiceForm = ({ 
  formData, 
  loading, 
  error, 
  success, 
  showForm,
  setShowForm,
  handleInputChange, 
  handleSubmit,
  setSuccess 
}) => {
  const unitTypes = ["Hora", "Dias", "Unidad", "Paquete"];

  if (!showForm) return null;

  return (
    <div className="mb-8 p-6 bg-gradient-to-br from-[#ead6cb]/20 to-[#03c9e6]/10 rounded-2xl shadow-xl border border-[#034a8a]/20 backdrop-blur-sm">
      {/* Header con gradiente */}
      <div className="bg-gradient-to-r from-[#034a8a] to-[#2a3d74] rounded-t-xl -mt-6 mx-6 py-3 px-6 shadow-md flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Añadir Nuevo Servicio</h2>
        <button 
          onClick={() => setShowForm(false)}
          className="text-white hover:text-[#ead6cb]"
        >
          ×
        </button>
      </div>
      
      {/* Mensajes de estado */}
      {error && (
        <div className="mt-4 mx-6 p-3 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-r shadow">
          <div className="flex justify-between items-center">
            <span>{error}</span>
            <button onClick={() => setSuccess(false)} className="text-red-700 font-bold">×</button>
          </div>
        </div>
      )}
      
      {success && (
        <div className="mt-4 mx-6 p-3 bg-green-100 border-l-4 border-[#3e9254] text-[#056c68] rounded-r shadow">
          <div className="flex justify-between items-center">
            <span>Servicio añadido con éxito!</span>
            <button onClick={() => setSuccess(false)} className="text-[#056c68] font-bold">×</button>
          </div>
        </div>
      )}
      
      {/* Formulario */}
      <form onSubmit={handleSubmit} className="mt-4 space-y-4 px-6 pb-4">
        <div>
          <label className="block text-sm font-medium text-[#034a8a] mb-1">Nombre del Servicio</label>
          <input
            type="text"
            name="nameService"
            value={formData.nameService}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-[#03c9e6]/50 rounded-lg focus:ring-2 focus:ring-[#034a8a] focus:border-[#034a8a] bg-white/80 shadow-sm"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-[#034a8a] mb-1">Precio</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
              min="0"
              step="0.01"
              className="w-full pl-7 pr-3 py-2 border border-[#03c9e6]/50 rounded-lg focus:ring-2 focus:ring-[#034a8a] focus:border-[#034a8a] bg-white/80 shadow-sm"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-[#034a8a] mb-1">Tipo de Unidad</label>
          <div className="relative">
            <select
              name="unitType"
              value={formData.unitType}
              onChange={handleInputChange}
              required
              className="w-full pl-3 pr-10 py-2 border border-[#03c9e6]/50 rounded-lg focus:ring-2 focus:ring-[#034a8a] focus:border-[#034a8a] bg-white/80 shadow-sm"
            >
              {unitTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg className="h-5 w-5 text-[#034a8a]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            name="statusActive"
            id="statusActive"
            checked={formData.statusActive}
            onChange={handleInputChange}
            className="h-4 w-4 rounded border-[#03c9e6] text-[#034a8a] focus:ring-[#034a8a]"
          />
          <label htmlFor="statusActive" className="ml-2 text-sm text-gray-700">
            Servicio activo
          </label>
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#034a8a] to-[#2a3d74] hover:from-[#2a3d74] hover:to-[#034a8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#03c9e6] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando...
              </>
            ) : 'Añadir Servicio'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;