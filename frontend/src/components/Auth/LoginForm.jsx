import React, { useState } from 'react';
import './AuthForms.css';

const LoginForm = ({ onClose, onSwitchToRegister }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Логика входа будет здесь
        console.log('Login data:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="auth-form-container">
            <div className="auth-form">
                <div className="auth-header">
                    <h2>Вход в аккаунт</h2>
                    <button onClick={onClose} className="close-btn">×</button>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Введите пароль"
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-full">
                        Войти
                    </button>
                </form>
                
                <div className="auth-footer">
                    <p>Нет аккаунта? 
                        <button onClick={onSwitchToRegister} className="link-btn">
                            Зарегистрироваться
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;