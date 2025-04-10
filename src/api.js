import axios from "axios";


axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, 
});

export default api;
