// pages/ServicesPage.js
import { Link } from 'react-router';
import { useServiceForm } from '../hooks/useServices';
import ServiceList from '../components/services_Hotel/listServices';
import ServiceForm from '../components/services_Hotel/serviceForm';
import NavbarAdmin from '../components/Navbar/NavbarDashboardAdmin';

const ServicesPage = () => {
  const {
    services,
    formData,
    loading,
    error,
    success,
    showForm,
    setShowForm,
    handleInputChange,
    handleSubmit,
    setSuccess
  } = useServiceForm();

  return (
    <>
        <div className='my-12 py-1'>
            <NavbarAdmin/>
        </div>
        <div className="min-h-screen  bg-gray-50 py-8 px-7 mx-2 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#034a8a]">Gestión de Servicios</h1>
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
                    Agregar Servicio
                </>
                )}
            </button>
            </div>

            <ServiceForm 
            formData={formData}
            loading={loading}
            error={error}
            success={success}
            showForm={showForm}
            setShowForm={setShowForm}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            setSuccess={setSuccess}
            />

            <div className="bg-white shadow overflow-hidden rounded-lg">
            <ServiceList services={services} loading={loading} error={error} />
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
        
    </>
  );
};

export default ServicesPage;