import React from 'react'
import '../css/Header.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';

function Header() {
  return (
    <header className='header'>
      <div className='inner-header containerHeader'>
        <nav>
          <ul className='left' id='menu'>
            <li><a  href="">ĐỒNG HỒ NAM</a></li>
            <li><a  href="">ĐỒNG HỒ NỮ</a></li>
          </ul>
        </nav>
        <a href="" id="logo">LUCIFER</a>
        <nav>
          <ul className='right' id='menu'>
            <li className='gh'><a href="">Giỏ Hàng</a></li>
            <li className='dn'><a href="">Đăng Nhập</a></li>
          </ul>
        </nav>
      </div>
    </header>
    
  )
}

export default Header