import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    clearCart,
    getCartItemsCount 
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Ваш кошик порожній</h2>
            <p>Додайте товари з каталогу, щоб зробити замовлення</p>
            <Link to="/catalog" className="btn btn-primary">
              Перейти до каталогу
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const deliveryPrice = getCartTotal() > 3000 ? 0 : 300;
  const totalPrice = getCartTotal() + deliveryPrice;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Кошик покупок</h1>
          <div className="cart-info">
            <span>{getCartItemsCount()} товарів</span>
            <button onClick={clearCart} className="clear-cart-btn">
              Очистити кошик
            </button>
          </div>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <span className="item-emoji">{item.image || '✨'}</span>
                </div>
                
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="item-price">{item.price} ₴/шт</div>
                </div>

                <div className="item-controls">
                  <div className="quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="item-total">
                    {item.price * item.quantity} ₴
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                    title="Видалити з кошика"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Ваше замовлення</h3>
              
              <div className="summary-row">
                <span>Товари ({getCartItemsCount()} шт.)</span>
                <span>{getCartTotal()} ₴</span>
              </div>
              
              <div className="summary-row">
                <span>Доставка</span>
                <span>
                  {deliveryPrice === 0 ? (
                    <span style={{color: 'var(--accent-green)'}}>Безкоштовно</span>
                  ) : (
                    `${deliveryPrice} ₴`
                  )}
                </span>
              </div>

              {getCartTotal() < 3000 && (
                <div className="delivery-notice">
                  🚚 Безкоштовна доставка від 3000 ₴
                </div>
              )}
              
              <div className="summary-divider"></div>
              
              <div className="summary-total">
                <span>Загальна сума</span>
                <span>{totalPrice} ₴</span>
              </div>

              <button className="checkout-btn btn-primary">
                Оформити замовлення
              </button>
              
              <Link to="/catalog" className="continue-shopping">
                ← Продовжити покупки
              </Link>
            </div>

            <div className="delivery-info">
              <h4>Інформація про доставку</h4>
              <ul>
                <li>📦 Доставка кур'єром - 1-2 дні</li>
                <li>🚚 Безкоштовна доставка від 3000 ₴</li>
                <li>💳 Оплата при отриманні</li>
                <li>↩️ Повернення протягом 14 днів</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;