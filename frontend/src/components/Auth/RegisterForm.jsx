import React, { useState } from 'react';
import './AuthForms.css';

const RegisterForm = ({ onClose, onSwitchToLogin }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }
        console.log('Register data:', formData);
        // TODO: Добавить логику регистрации
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
                    <h2>Регистрация</h2>
                    <button onClick={onClose} className="close-btn">×</button>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">ФИО</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="Иванов Иван Иванович"
                        />
                    </div>
                    
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
                        <label htmlFor="phone">Телефон</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+38 (0XX) XXX-XX-XX"
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
                            placeholder="Не менее 6 символов"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Подтвердите пароль</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            placeholder="Повторите пароль"
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-full">
                        Зарегистрироваться
                    </button>
                </form>
                
                <div className="auth-footer">
                    <p>Уже есть аккаунт? 
                        <button onClick={onSwitchToLogin} className="link-btn">
                            Войти
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;