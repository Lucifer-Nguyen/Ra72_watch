import {createBrowserRouter,Link,NavLink,Outlet,RouterProvider} from "react-router-dom";
import LoginPage from "../pages/Login";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import AccountList from "../components/AccountList";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/admin",
    children: [
        {
            path:"account",
            element: <AccountList />
        },
        {
            path:"product",
            element: <NoPage />
        }
    ]
  }
   
]);