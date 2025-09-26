import "./Header.css";

function Header() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h3>💝 DonateNow</h3>
        </div>
        <nav className="nav-menu">
          <a href="#home">Trang chủ</a>
          <a href="#campaigns">Chiến dịch</a>
          <a href="#about">Về chúng tôi</a>
          <a href="#contact">Liên hệ</a>
          <button className="nav-donate-btn">Ủng hộ ngay</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
