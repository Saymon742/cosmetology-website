import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import './Header.css';

const Header = () => {
    const { getCartItemsCount } = useCart();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const handleLogin = () => {
        alert('Форма входа будет скоро!');
    };

    const handleRegister = () => {
        alert('Форма регистрации будет скоро!');
    };

    const isActivePage = (path) => {
        return location.pathname === path;
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="container">
                <nav className="nav">
                    {/* Логотип */}
                    <Link to="/" className="logo">
                        <span className="logo-icon">💄</span>
                        <span className="logo-text">Cosmetology</span>
                    </Link>

                    {/* Кнопка бургер-меню для мобильных */}
                    <button 
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Меню"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Навигация */}
                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <Link 
                            to="/" 
                            className={`nav-link ${isActivePage('/') ? 'active' : ''}`}
                        >
                            <span className="nav-icon">🏠</span>
                            Главная
                        </Link>
                        <Link 
                            to="/catalog" 
                            className={`nav-link ${isActivePage('/catalog') ? 'active' : ''}`}
                        >
                            <span className="nav-icon">📦</span>
                            Каталог
                        </Link>
                        <Link 
                            to="/about" 
                            className={`nav-link ${isActivePage('/about') ? 'active' : ''}`}
                        >
                            <span className="nav-icon">ℹ️</span>
                            О нас
                        </Link>
                    </div>

                    <div className={`nav-actions ${isMenuOpen ? 'active' : ''}`}>
                        <div className="auth-buttons">
                            <button onClick={handleLogin} className="auth-btn login-btn">
                                <span className="btn-icon">🔐</span>
                                <span className="btn-text">Вход</span>
                            </button>
                            <button onClick={handleRegister} className="auth-btn register-btn">
                                <span className="btn-icon">👤</span>
                                <span className="btn-text">Регистрация</span>
                            </button>
                        </div>

                        <Link to="/cart" className="cart-link">
                            <span className="cart-icon">🛒</span>
                            <span className="cart-text">Корзина</span>
                            {getCartItemsCount() > 0 && (
                                <span className="cart-badge">{getCartItemsCount()}</span>
                            )}
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;