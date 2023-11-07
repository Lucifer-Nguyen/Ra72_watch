import {
  createBrowserRouter,
  Link,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "../pages/Login";
import AccountList from "../components/AccountList";
import AdminLayout from "../admin/AdminLayout";
import MaleProduct from "../components/Male";
import FeMaleProduct from "../components/FeMale";
import Layout from "../Layout";
import Product from "../components/Product";
import ProductList from "../components/ProductList";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Product />,
      },
      {
        path: "dong-ho-nam",
        element: <MaleProduct />,
      },
      {
        path: "dong-ho-nu",
        element: <FeMaleProduct />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "account",
        element: <AccountList />,
      },
      {
        path: "product",
        element: <ProductList />,
      },
    ],
  },
]);
