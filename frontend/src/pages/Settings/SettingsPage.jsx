import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage = () => {
  const { user, login, logout, loginAsAdmin, theme, setTheme, updateTrigger } = useApp();
  const [settings, setSettings] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    notifications: true,
    newsletter: true,
    smsNotifications: false
  });
  
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate(); 
  useEffect(() => {
    if (user?.role === 'admin') {
      console.log('User is now admin, redirecting...');
      setTimeout(() => {
        navigate('/admin');
      }, 100);
    }
  }, [user, navigate, updateTrigger]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    if (settings.name && settings.email) {
      login({ 
        name: settings.name, 
        email: settings.email,
        phone: settings.phone
      });
      alert('Налаштування успішно збережено!');
    }
  };

  const handleAdminLogin = () => {
    console.log('Admin login button clicked');
    loginAsAdmin();
    alert('Ви увійшли як адміністратор! Перенаправляємо до панелі адміністратора...');
  };

  const tabs = [
    { id: 'profile', label: 'Профіль', icon: '👤' },
    { id: 'notifications', label: 'Сповіщення', icon: '🔔' },
    { id: 'appearance', label: 'Зовнішній вигляд', icon: '🎨' },
    { id: 'admin', label: 'Адміністрування', icon: '👑' }
  ];

  return (
    <div className="settings-page">
      <div className="container">
        <div className="settings-header">
          <h1>Налаштування</h1>
          {user && (
            <div className="user-info">
              <span>Ви увійшли як: <strong>{user.name}</strong></span>
              {user.role === 'admin' && <span className="admin-badge">Адміністратор</span>}
              <button onClick={logout} className="logout-btn">Вийти</button>
            </div>
          )}
        </div>

        <div className="settings-content">
          <div className="settings-sidebar">
            <div className="sidebar-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="settings-main">
            <form onSubmit={handleSaveSettings} className="settings-form">
              
              {activeTab === 'profile' && (
                <div className="tab-content">
                  <h2>Особиста інформація</h2>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Ім'я та прізвище</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={settings.name}
                        onChange={handleInputChange}
                        placeholder="Введіть ваше ім'я"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email адреса</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={settings.email}
                        onChange={handleInputChange}
                        placeholder="Введіть ваш email"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Телефон</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={settings.phone}
                        onChange={handleInputChange}
                        placeholder="+38 (096) 123-45-67"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'admin' && (
                <div className="tab-content">
                  <h2>Адміністрування</h2>
                  
                  {user?.role === 'admin' ? (
                    <div className="admin-access-granted">
                      <div className="admin-welcome">
                        <div className="admin-icon">👑</div>
                        <h3>Ви маєте права адміністратора</h3>
                        <p>Тепер ви можете керувати панеллю адміністратора</p>
                      </div>
                      
                      <div className="admin-actions">
                        <Link to="/admin" className="admin-panel-btn">
                          Перейти до панелі адміністратора
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="admin-access-request">
                      <div className="admin-info">
                        <div className="admin-icon">🔒</div>
                        <h3>Панель адміністратора</h3>
                        <p>Для доступу до панелі адміністратора потрібні спеціальні права</p>
                        <ul className="admin-features">
                          <li>📊 Перегляд статистики продажів</li>
                          <li>📦 Керування замовленнями</li>
                          <li>👥 Управління клієнтами</li>
                          <li>🏷️ Редагування товарів</li>
                        </ul>
                      </div>
                      
                      <div className="admin-request">
                        <p>Якщо ви адміністратор, увійдіть у режимі адміністратора:</p>
                        <button 
                          type="button" 
                          onClick={handleAdminLogin}
                          className="btn btn-primary admin-login-btn"
                        >
                          👑 Увійти як адміністратор
                        </button>
                        <p className="admin-note">
                          Примітка: Ця дія надасть вам повний доступ до системи управління
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

                           {activeTab === 'notifications' && (
                <div className="tab-content">
                  <h2>Налаштування сповіщень</h2>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="notifications"
                        checked={settings.notifications}
                        onChange={handleInputChange}
                      />
                      <span className="checkmark"></span>
                      Сповіщення про статус замовлень
                    </label>
                    
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="newsletter"
                        checked={settings.newsletter}
                        onChange={handleInputChange}
                      />
                      <span className="checkmark"></span>
                      Розсилка новин та акцій
                    </label>
                    
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="smsNotifications"
                        checked={settings.smsNotifications}
                        onChange={handleInputChange}
                      />
                      <span className="checkmark"></span>
                      SMS-сповіщення
                    </label>
                  </div>
                </div>
              )}

              {activeTab === 'appearance' && (
                <div className="tab-content">
                  <h2>Налаштування зовнішнього вигляду</h2>
                  <div className="form-group">
                    <label htmlFor="theme">Кольорова тема</label>
                    <select
                      id="theme"
                      value={theme}
                      onChange={(e) => setTheme(e.target.value)}
                      className="theme-select"
                    >
                      <option value="light">🌞 Світла</option>
                      <option value="dark">🌙 Темна</option>
                      <option value="auto">⚙️ Системна</option>
                    </select>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;