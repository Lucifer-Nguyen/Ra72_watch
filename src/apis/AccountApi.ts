import { AxiosRequestConfig } from "axios";
import axiosClient from "./index";

const token = localStorage.getItem("accesstoken")

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
}

const getAccount = () => {
  return axiosClient.get("account/get-all");
};

const getProduct = () => {
  return axiosClient.get("product/get-all");
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

const signup = (newAccount: any) => {
  return axiosClient.post("auth/register",{
    username: newAccount.username,
    password: newAccount.password,
    email: newAccount.email,
    phoneNumber: newAccount.phoneNumber,
    address: newAccount.address,
    fullName: newAccount.fullName,

  })
}

export { getAccount, getProduct, addAccount, deleteAccount, login, signup };
