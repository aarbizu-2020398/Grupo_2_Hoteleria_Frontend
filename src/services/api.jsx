import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/Hotel/V1',
    timeout: 5000,
    httpAgent: false
});

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem("user");
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

export const login = async (data) => {
    try {
        const response = await apiClient.post('/auth/login', data);
        if(response.data.userDetails) {
            localStorage.setItem("user", JSON.stringify(response.data.userDetails));
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