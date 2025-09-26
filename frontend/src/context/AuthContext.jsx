import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState('login');

    const login = async (email, password) => {
        console.log('Logging in:', email, password);
        // Временная заглушка
        const mockUser = {
            id: 1,
            email: email,
            fullName: 'Тестовый Пользователь',
            phone: '+380001112233'
        };
        setUser(mockUser);
        setIsAuthenticated(true);
        setShowAuthModal(false);
        return { success: true };
    };

    const register = async (userData) => {
        console.log('Registering:', userData);
        // Временная заглушка
        const mockUser = {
            id: 1,
            email: userData.email,
            fullName: userData.fullName,
            phone: userData.phone
        };
        setUser(mockUser);
        setIsAuthenticated(true);
        setShowAuthModal(false);
        return { success: true };
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    const showLogin = () => {
        setAuthMode('login');
        setShowAuthModal(true);
    };

    const showRegister = () => {
        setAuthMode('register');
        setShowAuthModal(true);
    };

    const closeAuthModal = () => {
        setShowAuthModal(false);
    };

    const switchToRegister = () => {
        setAuthMode('register');
    };

    const switchToLogin = () => {
        setAuthMode('login');
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            showAuthModal,
            authMode,
            login,
            register,
            logout,
            showLogin,
            showRegister,
            closeAuthModal,
            switchToRegister,
            switchToLogin
        }}>
            {children}
        </AuthContext.Provider>
    );
};