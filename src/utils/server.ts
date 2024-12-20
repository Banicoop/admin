import axios from "axios";

// Axios instance
const SERVER = axios.create({
    baseURL: 'https://banicoop-server-testing.onrender.com/api/v1/', 
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json', 
    },
});


SERVER.interceptors.request.use(
    (config) => {
        try {
            const token = localStorage.getItem('token'); 
            if (token) {
                config.headers.Authorization = `Bearer ${token}`; 
            }
            return config;
        } catch (error) {
            console.error('Request Interceptor Error:', error);
            throw error; 
        }
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error); 
    }
);


SERVER.interceptors.response.use(
    (response) => {

        return response;
    },
    (error) => {

        if (error.response) {
            console.error('Response Error:', error.response.data);
            if (error.response.status === 401) {

                localStorage.removeItem('token'); 
                window.location.replace('/auth/login'); 
            }
        } else if (error.request) {

            console.error('No Response Received:', error.request);
        } else {

            console.error('Error Setting Up Request:', error.message);
        }
        return Promise.reject(error); 
    }
);

export default SERVER;
