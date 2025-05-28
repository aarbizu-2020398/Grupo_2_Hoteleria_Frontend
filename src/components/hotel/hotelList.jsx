import HotelCard from './hotelCard';

const HotelList = ({ hotels, loading, error }) => {
    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <span className="ml-3">Cargando hoteles...</span>
      </div>
    );
}

  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reintentar
        </button>
      </div>
    );
  }

if (hotels.total === 0) {
    return (
        <div className="text-center py-8">
        <p className="text-gray-500">No se encontraron hoteles disponibles</p>
        </div>
    );
}


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {hotels.map((hotel) => (
        <HotelCard 
          key={hotel._id || hotel.id}
          hotel={{
            ...hotel,
            services: hotel.comfort || ["Piscina", "Spa", "WiFi gratis"]
          }}
        />
      ))}
    </div>
  );
};

export default HotelList;