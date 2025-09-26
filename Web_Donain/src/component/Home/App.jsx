import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Kết nối yêu thương - Lan tỏa hy vọng</h1>
          <p>
            Cùng nhau xây dựng một cộng đồng tốt đẹp hơn thông qua những hành
            động thiện nguyện ý nghĩa
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Khám phá chiến dịch</button>
            <button className="secondary-btn">Tạo chiến dịch mới</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">🌟</div>
        </div>
      </section>

      {/* Thống kê */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>2,458</h3>
            <p>Người ủng hộ</p>
          </div>
          <div className="stat-item">
            <h3>₫15.2M</h3>
            <p>Số tiền quyên góp</p>
          </div>
          <div className="stat-item">
            <h3>142</h3>
            <p>Chiến dịch thành công</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Độ tin cậy</p>
          </div>
        </div>
      </section>

      {/* Chiến dịch nổi bật */}
      <section className="home-campaigns">
        <div className="section-header">
          <h2>Chiến dịch nổi bật</h2>
          <p>Những chiến dịch đang cần sự hỗ trợ của bạn</p>
        </div>
        <div className="campaign-list">
          <div className="campaign-item">
            <div className="campaign-image">📚</div>
            <div className="campaign-content">
              <h3>Ủng hộ trẻ em vùng cao</h3>
              <p>
                Giúp các em nhỏ có điều kiện học tập tốt hơn với sách vở và đồ
                dùng học tập.
              </p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "68%" }}></div>
              </div>
              <div className="campaign-stats">
                <span>₫850,000 / ₫1,200,000</span>
                <span>25 ngày còn lại</span>
              </div>
              <button className="donate-btn">Ủng hộ ngay</button>
            </div>
          </div>
          <div className="campaign-item">
            <div className="campaign-image">🏥</div>
            <div className="campaign-content">
              <h3>Quỹ hỗ trợ bệnh nhân nghèo</h3>
              <p>
                Chung tay giúp đỡ những hoàn cảnh khó khăn vượt qua bệnh tật.
              </p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "45%" }}></div>
              </div>
              <div className="campaign-stats">
                <span>₫2,250,000 / ₫5,000,000</span>
                <span>15 ngày còn lại</span>
              </div>
              <button className="donate-btn">Ủng hộ ngay</button>
            </div>
          </div>
          <div className="campaign-item">
            <div className="campaign-image">🌱</div>
            <div className="campaign-content">
              <h3>Gây quỹ bảo vệ môi trường</h3>
              <p>
                Hành động vì một môi trường xanh - sạch - đẹp cho thế hệ tương
                lai.
              </p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "82%" }}></div>
              </div>
              <div className="campaign-stats">
                <span>₫1,640,000 / ₫2,000,000</span>
                <span>8 ngày còn lại</span>
              </div>
              <button className="donate-btn">Ủng hộ ngay</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>Chia sẻ từ cộng đồng</h2>
        <div className="testimonials-list">
          <div className="testimonial-item">
            <p>
              "Thật tuyệt vời khi có thể giúp đỡ các em nhỏ vùng cao. Tôi cảm
              thấy rất hạnh phúc!"
            </p>
            <div className="testimonial-author">- Nguyễn Văn A</div>
          </div>
          <div className="testimonial-item">
            <p>
              "Nền tảng minh bạch và dễ sử dụng. Tôi tin tưởng vào những chiến
              dịch ở đây."
            </p>
            <div className="testimonial-author">- Trần Thị B</div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h3>Đăng ký nhận thông tin</h3>
          <p>Nhận tin về các chiến dịch mới và câu chuyện cảm động</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Nhập email của bạn" />
            <button>Đăng ký</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
