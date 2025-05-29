import { useResources } from '../hooks/useResources';
import ResourceList from '../components/resources/resourcesList';
import ResourceForm from '../components/resources/resourceForm';
import { Link } from 'react-router';

const AddResourcePage = () => {
  const {
    resources,
    formData,
    categories,
    loading,
    error,
    success,
    showForm,
    setShowForm,
    handleInputChange,
    handleSubmit,
    setSuccess,
    refreshResources
  } = useResources();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#034a8a]">Gestión de Recursos</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className={`px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-white 
              ${showForm ? 'bg-[#056c68] hover:bg-[#034a8a]' : 'bg-[#034a8a] hover:bg-[#2a3d74]'} 
              transition-colors duration-300 flex items-center`}
          >
            {showForm ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Cancelar
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Agregar Recurso
              </>
            )}
          </button>
        </div>

        <ResourceForm 
          formData={formData}
          categories={categories}
          loading={loading}
          error={error}
          success={success}
          showForm={showForm}
          setShowForm={setShowForm}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          setSuccess={setSuccess}
        />

        <div className="bg-white shadow overflow-hidden rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Recursos Disponibles</h2>
            <button
              onClick={refreshResources}
              className="flex items-center px-3 py-1 bg-[#03c9e6] text-white rounded-md text-sm hover:bg-[#02a8c4]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              Actualizar
            </button>
          </div>
          <ResourceList 
            resources={resources} 
            loading={loading} 
            error={error}
            refreshResources={refreshResources}
          />
        </div>
      </div>
      <div className="container mx-auto p-4 pt-20">
          <div className="flex justify-between items-center mb-6">
          <button className='px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-700'>
            <Link to="/ServicesAndResources">
              Regresar
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddResourcePage;