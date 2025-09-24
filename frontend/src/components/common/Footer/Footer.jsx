import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BeautyCosm</h3>
            <p>Ваш надійний партнер у світі косметології</p>
          </div>
          
          <div className="footer-section">
            <h4>Контакты</h4>
            <p>📞 +38 (096) 123-45-67</p>
            <p>✉️ cosmetologyCompany@gmail.com</p>
          </div>
          
          <div className="footer-section">
            <h4>Ми в соцмережах</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                <img src="/images/facebook.png" alt="Facebook" />
              </a>
              <a href="#" className="social-link">
                <img src="/images/insta.png" alt="Instagram" />
              </a>
              <a href="#" className="social-link">
                <img src="/images/tg.png" alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 BeautyCosm. Усі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer