import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartPage.css';
import Notification from '../../components/Notification/Notification';

const CartPage = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart,
        getCartItemsCount
    } = useCart();

    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    const handleQuantityChange = (productId, newQuantity, productName) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            setNotificationMessage(`Товар "${productName}" удален из корзины!`);
            setShowNotification(true);
        } else {
            updateQuantity(productId, newQuantity);
        }
    };

    const handleRemoveItem = (productId, productName) => {
        removeFromCart(productId);
        setNotificationMessage(`Товар "${productName}" удален из корзины!`);
        setShowNotification(true);
    };

    const handleClearCart = () => {
        if (cartItems.length > 0) {
            clearCart();
            setNotificationMessage('Корзина очищена!');
            setShowNotification(true);
        }
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            setNotificationMessage('Корзина пуста! Добавьте товары для оформления заказа.');
            setShowNotification(true);
            return;
        }
        
        setNotificationMessage('Заказ успешно оформлен! Спасибо за покупку! 🎉');
        setShowNotification(true);
        setTimeout(() => {
            clearCart();
        }, 2000);
    };

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

                <Notification 
                    message={notificationMessage}
                    show={showNotification}
                    onClose={() => setShowNotification(false)}
                />
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container">
                <div className="cart-header">
                    <h1>Кошик</h1>
                    <div className="cart-summary">
                        <span>Товарів: {getCartItemsCount()} шт.</span>
                        <button onClick={handleClearCart} className="btn btn-secondary">
                            Очистити кошик
                        </button>
                    </div>
                </div>

                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-info">
                                <h3>{item.name}</h3>
                                <p className="item-description">{item.description}</p>
                                <p className="item-price">Цена: {item.price} грн</p>
                            </div>
                            
                            <div className="item-controls">
                                <div className="quantity-controls">
                                    <button 
                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1, item.name)}
                                        className="quantity-btn"
                                    >
                                        -
                                    </button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button 
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1, item.name)}
                                        className="quantity-btn"
                                    >
                                        +
                                    </button>
                                </div>
                                
                                <div className="item-total">
                                    Сумма: {item.price * item.quantity} грн
                                </div>
                                
                                <button 
                                    onClick={() => handleRemoveItem(item.id, item.name)}
                                    className="btn btn-danger"
                                >
                                    Удалить
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-footer">
                    <div className="total-section">
                        <h2>Итого: {getCartTotal()} грн</h2>
                        <div className="checkout-buttons">
                            <Link to="/catalog" className="btn btn-outline">
                                Продолжить покупки
                            </Link>
                            <button onClick={handleCheckout} className="btn btn-primary">
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Notification 
                message={notificationMessage}
                show={showNotification}
                onClose={() => setShowNotification(false)}
            />
        </div>
    );
};

export default CartPage;