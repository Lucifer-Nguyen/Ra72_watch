import { Outlet, Link } from "react-router-dom";
import "./css/Header.css";
import watch from "./img/watch.jpeg";
import { CheckOutlined } from "@ant-design/icons";
import SearchProduct from "./components/SearchProduct";

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="inner-header container">
          <nav>
            <ul className="left menu">
              <li className="item">
                <Link to="/dong-ho-nam">ĐÔNG HỒ NAM</Link>
              </li>
              <li className="item">
                <Link to="/dong-ho-nu">ĐỒNG HỒ NỮ</Link>
              </li>
            </ul>
          </nav>
          <Link id="logo" to="/">
            LUCIFER
          </Link>
          <nav>
            <ul className="right menu">
              <li className="item">
                <Link to="#">Giỏ Hàng</Link>
              </li>
              <li className="item">
                <Link to="/login">Đăng Nhập</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <img id="img-background" src={watch} alt="abc" />
      <>
        <div className="bh">
          <div className="bh1">
            <CheckOutlined />
               FREESHIP ĐƠN HÀNG TRÊN 700K
          </div>
          <div className="bh1">
            <CheckOutlined />
               BẢO HÀNH 10 NĂM
          </div>
          <div className="bh1">
            <CheckOutlined />
               ĐỔI TRẢ TRONG VÒNG 7 NGÀY
          </div>
        </div>
      </>
      <div className="br"></div>
      <SearchProduct />
      <Outlet></Outlet>
      <div className="br"></div>
      <>
        <footer>
          <div className="inner-footer">
            <div>
              <h3>HANOI Stores</h3>
              <div>9 B7 Phạm Ngọc Thạch, Đống Đa.</div>
              <div>173C Kim Mã, Ba Đình.</div>
            </div>
            <div>
              <h3>TP.HCM Stores</h3>
              <div>25 Nguyễn Trãi, P.Bến Thành, Quận 1.</div>
              <div>348 Lê Văn Sỹ, Phường 14, Quận 3.</div>
              <div>349 Quang Trung, Phường 10, Quận Gò Vấp.</div>
            </div>
          </div>
          <div className="br"></div>
          <div className="td">Create By Thành Đạt</div>
        </footer>
      </>
    </>
  );
};

export default Layout;
