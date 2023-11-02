import { Outlet, Link } from "react-router-dom";
import './css/Header.css';

const Layout = () => {
  return (
    <>
      <header className='header'>
      <div className='inner-header container'>
        <nav>
          <ul className='left' id='menu'>
            <li><Link to="/dong-ho-nam">ĐÔNG HỒ NAM</Link></li>
            <li><Link to="/dong-ho-nu">ĐỒNG HỒ NỮ</Link></li>
          </ul>
        </nav>
        <Link id="logo" to="/">LUCIFER</Link>
        <nav>
          <ul className='right' id='menu'>
            <li className='gh'><Link to="/a">Giỏ Hàng</Link></li>
            <li ><Link to="/login">Đăng Nhập</Link></li>
          </ul>
        </nav>
      </div>
      </header>
      <Outlet></Outlet>
    </>
  )
};

export default Layout;