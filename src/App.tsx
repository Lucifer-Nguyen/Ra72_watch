import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import MaleProduct from './components/Male';
import FeMaleProduct from './components/FeMale';
import LoginPage from './pages/Login';
import UserList from './components/AccountList';




function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Product />} />
            <Route path="dong-ho-nam" element={<MaleProduct />} />
            <Route path="dong-ho-nu" element={<FeMaleProduct />} />
            <Route path="*" element={<NoPage />} />

          </Route>
          <Route path="/">
            <Route path="login" element={<LoginPage />} />
            
            {/* <Route path="login/admin/account" element={<UserList />} /> */}
          </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
