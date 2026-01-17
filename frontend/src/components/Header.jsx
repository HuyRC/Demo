import{FaShoppingCart,FaUser,FaSearch} from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Header({cartcount=0}) {
  return (
    <header className="header">
      {/* Phần: logo-tìm kiếm--giỏ hàng/tài khoản */}
      <div className='header-top'>
        <div className="header-left">
          <h1 className="logo">HRCGUMDAM</h1>
        </div>

        <div className='header-search'>
          <input type="text" placeholder='Tìm kiếm sản phẩm...'/>
          <button><FaSearch /></button>
        </div>

        <div className='header-right'>
          <button className='cart-btn' aria-label="Giỏ hàng"> 
            <FaShoppingCart/>
            <span className='cart-count'>{cartcount}</span>
          </button>
          <button className='login-btn' aria-label="Tài khoản">
            <FaUser />
          </button>
        </div>
      </div>
      
      {/* Phần: thanh điều hướng */}
      <nav className="header-nav">
        
        {/* ⭐ Menu 1: Bandai Grade */}
        <div className="nav-item dropdown">
          <a href="#" className="nav-link">
            Bandai Grade <MdKeyboardArrowDown />
          </a>
          <div className="dropdown-menu">
            <a href="#">SD – Super Deformed</a>
            <a href="#">HG – High Grade 1/144 <span className="badge">NỔI BẬT</span></a>
            <a href="#">RG – Real Grade 1/144 <span className="badge">NỔI BẬT</span></a>
            <a href="#">Entry Grade</a>
            <a href="#">MG – Master Grade 1/100 <span className="badge">NỔI BẬT</span></a>
            <a href="#">PG – Perfect Grade 1/60</a>
          </div>
        </div>

        {/* ⭐ Menu 2: Dụng cụ */}
        <div className="nav-item dropdown">
          <a href="#" className="nav-link">
            Dụng cụ <MdKeyboardArrowDown />
          </a>
          <div className="dropdown-menu">
            <a href="#">Kìm cắt</a>
            <a href="#">Dao cắt</a>
            <a href="#">Giũa mài</a>
            <a href="#">Keo dán</a>
            <a href="#">Thớt cắt</a>
          </div>
        </div>

        {/* ⭐ Menu 3: Sơn-bút kẻ */}
        <div className="nav-item dropdown">
          <a href="#" className="nav-link">
            Sơn-bút kẻ <MdKeyboardArrowDown />
          </a>
          <div className="dropdown-menu">
            <a href="#">Sơn xịt</a>
            <a href="#">Sơn pha</a>
            <a href="#">Bút kẻ Gundam Marker</a>
            <a href="#">Sơn phủ bóng</a>
            <a href="#">Sơn lót</a>
          </div>
        </div>

        {/* ⭐ Menu 4: Phụ kiện */}
        <div className="nav-item dropdown">
          <a href="#" className="nav-link">
            Phụ kiện <MdKeyboardArrowDown />
          </a>
          <div className="dropdown-menu">
            <a href="#">Đế trưng bày</a>
            <a href="#">LED</a>
            <a href="#">Decal nước</a>
            <a href="#">Action Base</a>
          </div>
        </div>

        {/* ⭐ Menu 5: Mô hình lắp sẵn */}
        <div className="nav-item dropdown">
          <a href="#" className="nav-link">
            Mô hình lắp sẵn <MdKeyboardArrowDown />
          </a>
          <div className="dropdown-menu">
            <a href="#">Robot Spirits</a>
            <a href="#">Metal Build</a>
            <a href="#">Figure-rise Standard</a>
            <a href="#">Nendoroid</a>
          </div>
        </div>

      </nav>

    </header>
  );
}
export default Header;
