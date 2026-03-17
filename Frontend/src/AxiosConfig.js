import axios from "axios";

// ✅ Debugging ke liye console.log
console.log("🌐 Backend URL:", import.meta.env.VITE_BACKEND_URL);

const Instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, 
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json'
  }
});

// ✅ Request interceptor (optional but helpful)
Instance.interceptors.request.use(
  (config) => {
    console.log(`🚀 Making ${config.method.toUpperCase()} request to:`, config.baseURL + config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Response interceptor
Instance.interceptors.response.use(
  (response) => {
    console.log("✅ Response received:", response.status);
    return response;
  },
  (error) => {
    console.error("❌ API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default Instance;