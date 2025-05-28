const HotelCard = ({ hotel }) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-[#ead6cb]">
      {/* Imagen del hotel */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={`/uploads/Hotel_Media/${hotel.media}`} 
          alt={hotel.nameHotel}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#034a8a]/90 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{hotel.nameHotel}</h3>
          <p className="text-[#03c9e6] text-sm">{hotel.address}</p>
        </div>
        
        {/* Rating */}
        {hotel.rating && (
          <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full flex items-center">
            <svg className="w-4 h-4 text-[#3e9254]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm font-medium text-[#034a8a]">{hotel.rating}</span>
          </div>
        )}
      </div>
      
      {/* Contenido */}
      <div className="p-5">
        <p className="text-gray-600 mb-4">{hotel.description || "Hotel con excelentes comodidades."}</p>
        
        {/* Servicios */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#034a8a] mb-2">Servicios destacados:</h4>
          <div className="flex flex-wrap gap-2">
            {hotel.services.map((service, index) => (
              <span 
                key={index}
                className="text-xs bg-[#ead6cb] text-[#034a8a] px-2 py-1 rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
        
        {/* Botón */}
        <button
          className="w-full px-4 py-2 bg-[#3e9254] hover:bg-[#2a3d74] text-white font-medium rounded-lg transition-colors duration-300 text-sm"
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default HotelCard;