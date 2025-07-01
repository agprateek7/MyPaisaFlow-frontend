import axios from "axios";
import { BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Set a timeout of 10 seconds
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },    
});

// Request Interceptor to add token to headers
axiosInstance.interceptors.request.use(
  (config) => { 
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor to handle errors globally
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle common errors globally
        if (error.response) {
            if(error.response.status === 401){
                // Redirect to login page if unauthorized
                window.location.href = "/login";
            } else if (error.response.status == 500) {
                console.error("Server error:", error.response.data);
            }
        } else if (error.code === 'ECONNABORTED') {
            // Handle timeout error
            console.error("Request timed out. Please try again later.");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;