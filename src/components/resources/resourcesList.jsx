// components/ResourceList.js
import React from 'react';

const ResourceList = ({ resources, loading, error, refreshResources }) => {
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
          onClick={refreshResources}
          className="ml-4 px-3 py-1 bg-red-600 text-white rounded text-sm"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (resources.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No hay recursos registrados
        <button 
          onClick={refreshResources}
          className="ml-2 text-[#034a8a] hover:text-[#03c9e6]"
        >
          Refrescar
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#034a8a]">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Descripción</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Categoría</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Precio</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Stock</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Estado</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {resources.map(resource => (
            <tr key={resource._id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {resource.nameResource}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                {resource.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {resource.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${resource.price?.toFixed(2) || '0.00'}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {resource.stock}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                  ${resource.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {resource.isActive ? 'Activo' : 'Inactivo'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResourceList;