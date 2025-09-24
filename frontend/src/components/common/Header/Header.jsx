import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../../context/AppContext';
import { useCart } from '../../../context/CartContext';
import './Header.css';

const Header = () => {
  const { getCartItemsCount } = useCart();
  const { user, logout } = useApp();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span className="logo-icon">💄</span>
            <span className="logo-text">BeautyCosm</span>
          </Link>

          <div className="nav-menu">
            {user?.role === 'admin' ? (
              <Link to="/admin" className={`nav-link ${isActive('/admin')}`}>
                👑 Панель адміна
              </Link>
            ) : (
              <>
                <Link to="/catalog" className={`nav-link ${isActive('/catalog')}`}>
                  Каталог
                </Link>
                <Link to="/about" className={`nav-link ${isActive('/about')}`}>
                  Про нас
                </Link>
              </>
            )}
            
            <Link to="/cart" className={`nav-link cart-icon ${isActive('/cart')}`}>
              Кошик
              {getCartItemsCount() > 0 && (
                <span className="cart-badge">{getCartItemsCount()}</span>
              )}
            </Link>

            <Link to="/settings" className={`nav-link ${isActive('/settings')}`}>
              ⚙️ Налаштування
            </Link>

            {user && (
              <div className="user-menu">
                <span className="user-greeting">Вітаємо, {user.name}</span>
                {user.role === 'admin' && (
                  <span className="admin-badge">👑</span>
                )}
                <button onClick={logout} className="logout-btn">
                  Вийти
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;