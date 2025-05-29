const LoungeList = ({ lounges, total, loading, error, pagination, handlePageChange, refreshLounges }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#034a8a]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-r shadow mb-4">
        {error}
        <button 
          onClick={refreshLounges}
          className="ml-4 px-3 py-1 bg-red-600 text-white rounded text-sm"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (lounges.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No hay salones registrados
        <button 
          onClick={refreshLounges}
          className="ml-2 text-[#034a8a] hover:text-[#03c9e6]"
        >
          Refrescar
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#034a8a]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Imagen</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Hotel</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Precio/Hora</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Estado</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {lounges.map((lounge) => (
              <tr key={lounge._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {lounge.media && (
                    <img 
                      src={`/uploads/Lounge_Media/${lounge.media}`} 
                      alt={lounge.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{lounge.name}</div>
                  <div className="text-sm text-gray-500">{lounge.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {lounge.hotel}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${lounge.pricePerHour?.toFixed(2) || '0.00'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${lounge.statusActive === 'Active' ? 'bg-green-100 text-green-800' : 
                       lounge.statusActive === 'Ocuppied' ? 'bg-yellow-100 text-yellow-800' : 
                       'bg-red-100 text-red-800'}`}>
                    {lounge.statusActive === 'Active' ? 'Activo' : 
                     lounge.statusActive === 'Ocuppied' ? 'Ocupado' : 'Pendiente'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Mostrando {pagination.desde + 1} a {Math.min(pagination.desde + pagination.limite, total)} de {total} salones
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => handlePageChange(Math.max(0, pagination.desde - pagination.limite))}
            disabled={pagination.desde === 0}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <button
            onClick={() => handlePageChange(pagination.desde + pagination.limite)}
            disabled={pagination.desde + pagination.limite >= total}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoungeList;