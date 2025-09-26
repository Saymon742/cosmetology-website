import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/common/Layout/Layout';
import HomePage from './pages/Home/HomePage';
import CatalogPage from './pages/Catalog/CatalogPage';
import AboutPage from './pages/About/AboutPage';
import CartPage from './pages/Cart/CartPage';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm'; 
import './App.css';

// Компонент для отображения модальных окон
const AuthModals = () => {
    const { 
        showAuthModal, 
        authMode, 
        closeAuthModal, 
        switchToRegister, 
        switchToLogin 
    } = useAuth();

    if (!showAuthModal) return null;

    return (
        <>
            {authMode === 'login' && (
                <LoginForm 
                    onClose={closeAuthModal}
                    onSwitchToRegister={switchToRegister}
                />
            )}
            {authMode === 'register' && (
                <RegisterForm 
                    onClose={closeAuthModal}
                    onSwitchToLogin={switchToLogin}
                />
            )}
        </>
    );
};

function App() {
    return (
        <AuthProvider>
            <AppProvider>
                <CartProvider>
                    <Router>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/catalog" element={<CatalogPage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/cart" element={<CartPage />} />
                            </Routes>
                        </Layout>
                        <AuthModals />
                    </Router>
                </CartProvider>
            </AppProvider>
        </AuthProvider>
    );
}

export default App;