import React from 'react';
import { useCart } from '../../context/CartContext';
import './Notification.css';

const Notification = () => {
    const { showNotification, notificationMessage, setShowNotification } = useCart();

    if (!showNotification) return null;

    return (
        <div className="notification">
            <div className="notification-content">
                <span>✅ {notificationMessage}</span>
                <button 
                    onClick={() => setShowNotification(false)} 
                    className="notification-close"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default Notification;