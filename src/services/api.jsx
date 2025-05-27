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