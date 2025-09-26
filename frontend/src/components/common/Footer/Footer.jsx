import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Лого и описание */}
                    <div className="footer-section">
                        <Link to="/" className="footer-logo">
                            💄 Cosmetology
                        </Link>
                        <p className="footer-description">
                            Ваш надежный партнер в мире красоты и ухода за кожей. 
                            Мы предлагаем только качественную косметику от проверенных брендов.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">
                                📘
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                📷
                            </a>
                            <a href="#" className="social-link" aria-label="Telegram">
                                ✈️
                            </a>
                            <a href="#" className="social-link" aria-label="Viber">
                                📱
                            </a>
                        </div>
                    </div>

                    {/* Навигация */}
                    <div className="footer-section">
                        <h3 className="footer-title">Навигация</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/catalog">Каталог</Link></li>
                            <li><Link to="/about">О нас</Link></li>
                            <li><Link to="/contact">Контакты</Link></li>
                        </ul>
                    </div>

                    {/* Категории */}
                    <div className="footer-section">
                        <h3 className="footer-title">Категории</h3>
                        <ul className="footer-links">
                            <li><a href="#">Уход за кожей</a></li>
                            <li><a href="#">Декоративная косметика</a></li>
                            <li><a href="#">Волосы</a></li>
                            <li><a href="#">Парфюмерия</a></li>
                        </ul>
                    </div>

                    {/* Контакты */}
                    <div className="footer-section">
                        <h3 className="footer-title">Контакты</h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <span>+38 (099) 123-45-67</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <span>info@cosmetology.com</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span>г. Киев, ул. Крещатик, 1</span>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">🕒</span>
                                <span>Пн-Пт: 9:00-18:00</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть футера */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; 2024 Cosmetology. Все права защищены.</p>
                        <div className="footer-bottom-links">
                            <a href="#">Политика конфиденциальности</a>
                            <a href="#">Условия использования</a>
                            <a href="#">Карта сайта</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;