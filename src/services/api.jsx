import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://localhost:3000/Hotel/V1',
    timeout: 5000,
    httpAgent: false
});

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem("user", "roleUser");
        if(userDetails){
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = token;
        }
        return config;
    },
    (e) => {
        return Promise.reject(e);
    }
);

export const registerHotel = async (hotelData) => {
  try {
    
    const response = await apiClient.post('/hotels/RegisterHotel', hotelData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    return { success: true, data: response.data };
  } catch (errors) {
    console.error(errors);
    if (errors.response?.data?.errors) {
      const errorMessages = errors.response.data.errors.map(err => err.msg).join(', ');
      return { success: false, error: errorMessages };
    }
    return { 
      success: false, 
      error: errors.response?.data?.msg || errors.message 
    };
  }
};

export const login = async (data) => {
    try {
        const response = await apiClient.post('/auth/login', data);
        if(response.data.userDetails) {
            localStorage.setItem("user", JSON.stringify(response.data.userDetails));
            localStorage.setItem("roleUser", response.data.userDetails.role)
        }
        return response;
    } catch (e) {
        return {
            error: true,
            message: e.response?.data?.msg || "Error al iniciar sesión",
            e
        };
    }
};

export const isAuthenticated = () => {
    const userDetails = localStorage.getItem("user");
    return !!userDetails;
};

export const register = async (data) => {
    try {
        const response = await apiClient.post('/auth/register', data);
        return {
            success: true,
            data: response.data
        };
    } catch (e) {
        console.error(e)
        return {
            error: true,
            message: e.response?.data?.message || "Error en el registro",
            details: e.response?.data?.error || e.message
        };
    }
};

export const addRoom = async (roomData, file) => {
  try {
    const formData = new FormData();
    Object.keys(roomData).forEach(key => {
      formData.append(key, roomData[key]);
    });
    if (file) {
      formData.append('pictureRoom', file);
    }
    roomData.comfort.forEach((item, index) => {
      formData.append(`comfort[${index}][comodidades]`, item.comodidades);
    });

    const response = await apiClient.post('/Rooms/addRoom', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error.response?.data?.msg || error.message
    };
  }
};

export const listHotels = async () => {
  try {
    const response = await apiClient.get('/Hotels/listAllHotels');
    return response.data.hotels
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error.response?.data?.msg || error.message
    };
  }
};


export const addService = async (serviceData) => {
  try {
    const response = await apiClient.post('/Resources/newService', serviceData);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error.response?.data?.msg || error.message
    };
  }
};

export const addResource = async(resourceData) =>{
  try {
   const response = await apiClient.post("/Resources/newResource", resourceData)
   return{
    success: true,
    data: response.data
   } 
   } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error.response?.data?.msg || error.message
    };
  }
}

export const listServices = async () => {
  try {
    const response = await apiClient.get('/Resources/listServices');
    return response.data.services || [];
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error.response?.data?.msg || error.message
    };
  }
};

export const listResources = async () => {
  try {
    const response = await apiClient.get('/Resources/listResources');
    return response.data.resources || [];
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error.response?.data?.msg || error.message
    };
  }
};

export const listRooms = async () => {
  try {
    const response = await apiClient.get('/Rooms/listAllRooms');
    return response.data.rooms
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error.response?.data?.msg || error.message
    };
  }
};

export const registerLounge = async (loungeData, file) => {
  try {
    const formData = new FormData();

    Object.keys(loungeData).forEach(key => {
      formData.append(key, loungeData[key]);
    });

    if (file) {
      formData.append('pictureLounge', file);
    }

    const response = await apiClient.post('/Lounges/newLounge', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error.response?.data?.msg || error.message
    };
  }
};

export const listLounges = async () => {
  try {
    const response = await apiClient.get('/Lounges/listAllLounges');
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error.response?.data?.msg || error.message
    };
  }
};