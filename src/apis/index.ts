import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8888/api/v1/",
  headers:{
    token: "token",
  }
});
axiosClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("accesstoken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// axiosClient.interceptors.response.use(
//   function (response: any) {
//     return response;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
export default axiosClient;
