import React from 'react';
import { useApp } from '../../context/AppContext';
import './AdminHomePage.css';

const AdminHomePage = () => {
  const { user } = useApp();

  console.log('Admin Page - User:', user); // Отладочная информация

  // Если пользователь не админ
  if (!user || user.role !== 'admin') {
    return (
      <div style={{ 
        padding: '4rem', 
        textAlign: 'center', 
        background: '#1f2937', 
        color: 'white',
        minHeight: '100vh'
      }}>
        <h1>🚫 Доступ заборонено</h1>
        <p>У вас немає прав адміністратора</p>
        <p>Спробуйте увійти через налаштування</p>
        <p>Поточний користувач: {JSON.stringify(user)}</p>
      </div>
    );
  }

  // Упрощенная админ-панель
  return (
    <div style={{ 
      padding: '2rem', 
      background: '#1f2937', 
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1>👑 Панель адміністратора</h1>
      <p>Ласкаво просимо, {user.name}!</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1rem', 
        margin: '2rem 0' 
      }}>
        <div style={{ background: '#374151', padding: '1.5rem', borderRadius: '10px' }}>
          <h3>📊 Статистика</h3>
          <p>Замовлень: 1247</p>
          <p>Дохід: 284 500 ₴</p>
        </div>
        
        <div style={{ background: '#374151', padding: '1.5rem', borderRadius: '10px' }}>
          <h3>📦 Управління</h3>
          <p>Замовлень в очікуванні: 23</p>
          <p>Нових клієнтів: 48</p>
        </div>
      </div>

      <div style={{ background: '#374151', padding: '1.5rem', borderRadius: '10px' }}>
        <h3>Швидкі дії</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button style={{ 
            padding: '1rem', 
            background: '#10b981', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            ➕ Додати товар
          </button>
          <button style={{ 
            padding: '1rem', 
            background: '#3b82f6', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            📊 Переглянути аналітику
          </button>
          <button style={{ 
            padding: '1rem', 
            background: '#f59e0b', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            👥 Керувати клієнтами
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;