import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Product from "./components/Product";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import MaleProduct from "./components/Male";
import FeMaleProduct from "./components/FeMale";
import LoginPage from "./pages/Login";
import UserList from "./components/AccountList";
import AccountList from "./components/AccountList";
import Home from "./pages/Home";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
