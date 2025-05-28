const RoomForm = ({ 
  formData, 
  handleChange, 
  handleFileChange, 
  handleSubmit, 
  loading,
  hotels,
  error
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="hotel" className="block text-sm font-medium text-gray-700 mb-1">
          Hotel
        </label>
        <select
          id="hotel"
          name="hotel"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.hotel}
          onChange={handleChange}
        >
          <option value="">Seleccione un hotel</option>
          {hotels.map(hotel => (
            <option key={hotel._id} value={hotel._id}>
              {hotel.nameHotel}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="roomNumber" className="block text-sm font-medium text-gray-700 mb-1">
          Número de Habitación
        </label>
        <input
          id="roomNumber"
          name="roomNumber"
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.roomNumber}
          onChange={handleChange}
        />
      </div>

      {/* Añade más campos según el modelo Room */}
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
          Tipo de Habitación
        </label>
        <select
          id="type"
          name="type"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="">Seleccione un tipo</option>
          <option value="Individual">Individual</option>
          <option value="Doble">Doble</option>
          <option value="Suite">Suite</option>
          <option value="Familiar">Familiar</option>
        </select>
      </div>

      <div>
        <label htmlFor="media" className="block text-sm font-medium text-gray-700 mb-1">
          Imagen de la Habitación
        </label>
        <input
          id="media"
          name="media"
          type="file"
          accept="image/*"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          onChange={handleFileChange}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Guardando...' : 'Guardar Habitación'}
      </button>
    </form>
  );
};

export default RoomForm;