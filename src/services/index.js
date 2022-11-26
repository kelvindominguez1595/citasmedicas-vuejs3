import axios from "axios";
/**
 * Configuraciones para conexion axios
 * */

axios.defaults.baseURL = "http://localhost:9000/api/";

axios.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    if (token) {
      config.headers.tokenauthentication = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
