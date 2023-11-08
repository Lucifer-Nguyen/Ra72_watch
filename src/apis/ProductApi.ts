import { AxiosRequestConfig } from "axios";
import axiosClient from "./index";

const getProduct = (request: any) => {
  return axiosClient.post("product/search", {
    productTypes: [request],
  });
};

const getProductPaging = async (body: any, config?: AxiosRequestConfig) => {
  const response = await axiosClient.post("product/search", body, config);
  const data = response.data.content;
  const total = response.data.totalElements;
  return { data, total };
};

const deleteProduct = (id: number) => {
  return axiosClient.delete(`product/${id}`);
};

const addProduct = (
  name: String,
  image: String,
  gender: String,
  productManufacturing: String,
  productType: String,
  price: number
) => {
  return axiosClient.post("product/create", {
    name,
    image,
    gender,
    productManufacturing,
    productType,
    price,
  });
};
const updateProduct = (
  id: number,
  name: String,
  image: String,
  gender: String,
  productManufacturing: String,
  price: number,
  productType: String
) => {
  return axiosClient.put("product/edit", {
    id,
    name,
    image,
    productType,
    gender,
    productManufacturing,
    price,
  });
};
export {
  getProduct,
  deleteProduct,
  addProduct,
  updateProduct,
  getProductPaging,
};
