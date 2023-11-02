import { AxiosRequestConfig } from "axios";
import axiosClient from "./index";

const getAccount = (config: AxiosRequestConfig) => {
  return axiosClient.get("account/get-all", config);
};
const deleteAccount = (id: string) => {
  return axiosClient.delete(`account/${id}`);
};
const addAccount = (payload: { name: string; age: number }) => {
  return axiosClient.post("account", payload);
};

const login = (username: string, password: string) => {
  return axiosClient.post(
    "auth/login-jwt",
    {},
    {
      params: {
        username,
        password,
      },
    }
  );
};
export { getAccount, addAccount, deleteAccount, login };
