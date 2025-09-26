import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './HomePage.css';

const HomePage = () => {
    const { addToCart } = useCart();

    const featuredProducts = [
        {
            id: 1,
            name: "Вітамінна сироватка з вітаміном С",
            description: "Освітлення та омолодження шкіри",
            price: 1800,
            image: "/images/products/serum.jpg",
            badge: "Хіт продажів"
        },
        {
            id: 2,
            name: "Зволожуючий крем з гіалуроновою кислотою",
            description: "Глибоке зволоження на 24 години",
            price: 1500,
            image: "/images/products/cream.jpg",
            badge: "Новинка"
        },
        {
            id: 3,
            name: "Очищаючий гель для вмивання",
            description: "Ніжне очищення без сухості",
            price: 800,
            image: "/images/products/cleanser.jpg",
            badge: "Бестселер"
        }
    ];

    const benefits = [
        { icon: "🌿", title: "Натуральні компоненти", description: "Тільки безпечні та ефективні інгредієнти" },
        { icon: "⚡", title: "Швидкий результат", description: "Помітний ефект вже після першого застосування" },
        { icon: "💎", title: "Преміум якість", description: "Перевірені бренди з усього світу" },
        { icon: "🚚", title: "Швидка доставка", description: "Безкоштовна доставка від 1000 грн" }
    ];

    return (
        <div className="home-page">
            {/* Герой секция */}
            <section className="hero-section">
                <div className="hero-background">
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            🎯 Премальна косметика
                        </div>
                        <h1 className="hero-title">
                            Краса починається з <span className="highlight">правильного догляду</span>
                        </h1>
                        <p className="hero-description">
                            Відкрийте для себе премальну косметику для бездоганної шкіри та впевненості в собі. 
                            Професійні засоби, що дбають про вашу природну красу.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/catalog" className="btn btn-primary">
                                <span className="btn-icon">🛒</span>
                                Почати покупки
                            </Link>
                            <Link to="/about" className="btn btn-secondary">
                                <span className="btn-icon">ℹ️</span>
                                Дізнатися більше
                            </Link>
                        </div>
                        
                        {/* Статистика */}
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Товарів</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10K+</span>
                                <span className="stat-label">Клієнтів</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">99%</span>
                                <span className="stat-label">Відгуків</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Изображение продукта */}
                    <div className="hero-image">
                        <div className="product-showcase">
                            <img src="/images/hero-product.png" alt="Косметика" />
                            <div className="floating-card card-1">
                                <span>🌿 Натурально</span>
                            </div>
                            <div className="floating-card card-2">
                                <span>⚡ Ефективно</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Преимущества */}
            <section className="benefits-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Чому обирають нас</h2>
                        <p>Ми дбаємо про вашу красу та комфорт</p>
                    </div>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Популярные товары */}
            <section className="featured-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Популярні товари</h2>
                        <p>Найкращі засоби для вашого догляду</p>
                    </div>
                    <div className="products-grid">
                        {featuredProducts.map(product => (
                            <div key={product.id} className="product-card">
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                    {product.badge && (
                                        <span className={`product-badge ${product.badge.includes('Хіт') ? 'badge-hit' : 
                                                         product.badge.includes('Новинка') ? 'badge-new' : 'badge-bestseller'}`}>
                                            {product.badge}
                                        </span>
                                    )}
                                    <button 
                                        className="quick-add-btn"
                                        onClick={() => addToCart(product)}
                                    >
                                        🛒
                                    </button>
                                </div>
                                <div className="product-info">
                                    <h3>{product.name}</h3>
                                    <p>{product.description}</p>
                                    <div className="product-footer">
                                        <span className="price">{product.price} ₴</span>
                                        <button 
                                            className="add-to-cart-btn"
                                            onClick={() => addToCart(product)}
                                        >
                                            В кошик
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="section-footer">
                        <Link to="/catalog" className="view-all-btn">
                            Переглянути всі товары →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA секция */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Готові до бездоганної шкіри?</h2>
                        <p>Приєднуйтесь до тисяч задоволених клієнтів</p>
                        <div className="cta-buttons">
                            <Link to="/catalog" className="btn btn-primary btn-large">
                                Обрати косметику
                            </Link>
                            <Link to="/contact" className="btn btn-outline btn-large">
                                Консультація
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;