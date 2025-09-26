import "./Fotter.css";

function Footer() {
  return (
    <footer className="home-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>DonateNow</h4>
          <p>Kết nối yêu thương - Lan tỏa hy vọng</p>
        </div>
        <div className="footer-section">
          <h4>Liên kết</h4>
          <a href="#campaigns">Chiến dịch</a>
          <a href="#about">Về chúng tôi</a>
          <a href="#contact">Liên hệ</a>
        </div>
        <div className="footer-section">
          <h4>Hỗ trợ</h4>
          <a href="#faq">FAQ</a>
          <a href="#help">Trợ giúp</a>
          <a href="#privacy">Chính sách</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 DonateNow. All rights reserved. | Email: support@donatenow.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
