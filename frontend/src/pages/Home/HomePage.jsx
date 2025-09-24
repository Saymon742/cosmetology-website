import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './HomePage.css';

const HomePage = () => {
  const { addToCart } = useCart();

  const featuredProducts = [
    {
      id: 1,
      name: 'Омолоджуючий крем',
      price: 2500,
      category: 'Обличчя',
      description: 'Глибоке зволоження та розгладжування зморшок'
    },
    {
      id: 2,
      name: 'Вітамінна сироватка', 
      price: 1800,
      category: 'Сироватка',
      description: 'Освітлення та сяйво шкіри'
    },
    {
      id: 3,
      name: 'Натуральна помада',
      price: 1200,
      category: 'Макіяж',
      description: 'Стійке покриття з зволоженням'
    }
  ];

  const features = [
    {
      icon: '🌿',
      title: 'Натуральні компоненти',
      description: 'Використовуємо лише безпечні та ефективні інгредієнти'
    },
    {
      icon: '⚡', 
      title: 'Швидка доставка',
      description: 'Доставляємо замовлення по всій Україні за 1-3 дні'
    },
    {
      icon: '💎',
      title: 'Преміум якість',
      description: 'Продукція від перевірених світових брендів'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Краса починається з правильного догляду</h1>
            <p>Відкрийте для себе преміальну косметику для бездоганної шкіри та впевненості в собі</p>
            <div className="hero-buttons">
              <Link to="/catalog" className="btn btn-primary">
                Почати покупки
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Дізнатися більше
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Чому обирають нас?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-preview">
        <div className="container">
          <h2 className="section-title">Популярні товари</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-badge">{product.category}</div>
                <div className="product-image">
                  <span>✨</span>
                </div>
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-price">{product.price} ₴</div>
                  <button 
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                    style={{width: '100%'}}
                  >
                    В кошик
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/catalog" className="btn btn-secondary">
              Дивитися всі товари
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;