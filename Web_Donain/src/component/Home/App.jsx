import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      {/* Banner */}
      <div className="home-banner">
        <h1>Chào mừng đến với Trang Gây Quỹ Ủng Hộ</h1>
        <p>
          Hãy chung tay giúp đỡ cộng đồng bằng cách ủng hộ các chiến dịch ý
          nghĩa!
        </p>
      </div>

      {/* Giới thiệu */}
      <section className="home-intro">
        <h2>Về chúng tôi</h2>
        <p>
          Trang web này kết nối những tấm lòng hảo tâm với các chiến dịch gây
          quỹ uy tín, minh bạch và hiệu quả.
        </p>
      </section>

      {/* Danh sách chiến dịch gây quỹ */}
      <section className="home-campaigns">
        <h2>Chiến dịch nổi bật</h2>
        <div className="campaign-list">
          <div className="campaign-item">
            <h3>Ủng hộ trẻ em vùng cao</h3>
            <p>Giúp các em nhỏ có điều kiện học tập tốt hơn.</p>
            <button className="donate-btn">Ủng hộ ngay</button>
          </div>
          <div className="campaign-item">
            <h3>Quỹ hỗ trợ bệnh nhân nghèo</h3>
            <p>Chung tay giúp đỡ những hoàn cảnh khó khăn vượt qua bệnh tật.</p>
            <button className="donate-btn">Ủng hộ ngay</button>
          </div>
          <div className="campaign-item">
            <h3>Gây quỹ bảo vệ môi trường</h3>
            <p>Hành động vì một môi trường xanh - sạch - đẹp.</p>
            <button className="donate-btn">Ủng hộ ngay</button>
          </div>
        </div>
      </section>

      {/* Liên hệ */}
      <footer className="home-footer">
        <p>Liên hệ: hotro@gayquy.com | © 2025 Gây Quỹ Ủng Hộ</p>
      </footer>
    </div>
  );
}

export default App;
