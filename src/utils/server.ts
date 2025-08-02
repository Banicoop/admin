import axios from "axios";
import isTokenExpired from "./isTokenExp";
import { refreshAccessToken } from "../redux/slice/authSlice";



// const DEMO = 'https://banicoop-server-testing.onrender.com/api/v1/';
const LIVE = 'https://architecture-bound.onrender.com/api/v1'


// Axios instance
const SERVER = axios.create({
    // baseURL: process.env.REACT_APP_API_URL, 
    baseURL: LIVE,
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json', 
    },
});


SERVER.interceptors.request.use(
    async (config) => {
        try {
            let token = localStorage.getItem('token');
            const refreshToken = localStorage.getItem('refreshToken');

            if (token && isTokenExpired(token) && refreshToken) {
                //@ts-ignore
                token = refreshAccessToken(); 
            }

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
