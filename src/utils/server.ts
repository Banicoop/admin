import axios from "axios";

const SERVER = axios.create({
    // baseURL: process.env.REACT_APP_API_URL
    baseURL: 'https://banicoop-server-testing.onrender.com/api/v1/'
})

SERVER.interceptors.request.use(
    (config) => {

      const token = localStorage.getItem('token') || null;
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
  
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

export default SERVER;
