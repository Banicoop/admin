import axios from "axios";

// Create the Axios instance
const SERVER = axios.create({
    baseURL: 'https://banicoop-server-testing.onrender.com/api/v1/', // Ensure this is correct
    timeout: 10000, // Optional: Set a timeout for requests
    headers: {
        'Content-Type': 'application/json', // Default headers for JSON
    },
});

// Request Interceptor
SERVER.interceptors.request.use(
    (config) => {
        try {
            const token = localStorage.getItem('token'); // Get the token from local storage
            if (token) {
                config.headers.Authorization = `Bearer ${token}`; // Attach token if available
            }
            return config;
        } catch (error) {
            console.error('Request Interceptor Error:', error);
            throw error; // Re-throw error to catch issues with token retrieval
        }
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error); // Reject the request if there's an error
    }
);

// Response Interceptor
SERVER.interceptors.response.use(
    (response) => {
        // Successful response
        return response;
    },
    (error) => {
        // Handle common response errors
        if (error.response) {
            console.error('Response Error:', error.response.data);
            if (error.response.status === 401) {
                // Handle unauthorized errors (e.g., token expired)
                console.error('Unauthorized - Redirecting to login.');
                localStorage.removeItem('token'); // Optional: Remove invalid token
                window.location.replace('/login'); // Redirect to login page
            }
        } else if (error.request) {
            // Network errors
            console.error('No Response Received:', error.request);
        } else {
            // Other errors
            console.error('Error Setting Up Request:', error.message);
        }
        return Promise.reject(error); // Reject the response to handle in the caller
    }
);

export default SERVER;
