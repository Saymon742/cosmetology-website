import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Анна Іванова',
      position: 'Засновниця компанії',
      image: '👩‍💼',
      description: 'Експерт у галузі косметології з 15-річним досвідом'
    },
    {
      name: 'Марія Петрова',
      position: 'Головний косметолог',
      image: '👩‍⚕️',
      description: 'Сертифікований спеціаліст з догляду за шкірою'
    },
    {
      name: 'Олена Сидорова',
      position: 'Менеджер з якості',
      image: '🔬',
      description: 'Контролює якість всієї продукції'
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>Про компанію BeautyCosm</h1>
            <p>Ваш надійний партнер у світі краси</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>Наша місія</h2>
              <p>
                Ми прагнемо зробити якісну косметику доступною для кожного. 
                Наша мета - допомогти людям почуватися впевнено та красиво, 
                пропонуючи лише перевірені та ефективні засоби від провідних світових брендів.
              </p>
              <p>
                Ми ретельно відбираємо кожну позицію в нашому каталозі, щоб ви могли 
                бути впевнені в якості та безпеці продукції.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Товарів у каталозі</div>
              </div>
              <div className="stat">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Задоволених клієнтів</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Підтримка</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>Наші цінності</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Якість</h3>
              <p>Лише сертифікована продукція від перевірених виробників</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Чесність</h3>
              <p>Прозорі умови співпраці та чесні ціни</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Турбота</h3>
              <p>Індивідуальний підхід до кожного клієнта</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Інновації</h3>
              <p>Постійне оновлення асортименту відповідно до трендів</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Наша команда</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">{member.image}</div>
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="description">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages Section */}
        <section className="advantages-section">
          <h2>Наші переваги</h2>
          <div className="advantages-grid">
            <div className="advantage">
              <div className="advantage-icon">🚚</div>
              <h3>Швидка доставка</h3>
              <p>Доставляємо по всій Україні за 1-3 дні</p>
            </div>
            <div className="advantage">
              <div className="advantage-icon">💳</div>
              <h3>Зручна оплата</h3>
              <p>Різноманітні способи оплати для вашого комфорту</p>
            </div>
            <div className="advantage">
              <div className="advantage-icon">📞</div>
              <h3>Підтримка 24/7</h3>
              <p>Наші консультанти завжди готові допомогти</p>
            </div>
            <div className="advantage">
              <div className="advantage-icon">↩️</div>
              <h3>Легке повернення</h3>
              <p>Повернення товарів протягом 14 днів</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2>Контакти</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Київ, вул. Косметична, 15</span>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <span>+38 (096) 123-45-67</span>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <span>info@beautycosm.ua</span>
              </div>
              <div className="contact-item">
                <span className="icon">🕒</span>
                <span>Пн-Пт: 9:00-21:00, Сб-Нд: 10:00-20:00</span>
              </div>
            </div>
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p>Карта розташування нашого магазину</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;