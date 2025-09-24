import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    return {
      user: null,
      theme: 'light',
      login: () => {},
      loginAsAdmin: () => {},
      logout: () => {},
      setTheme: () => {},
      isLoading: false
    };
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [isLoading, setIsLoading] = useState(true);
  const [updateTrigger, setUpdateTrigger] = useState(0);

  useEffect(() => {
    const savedUser = localStorage.getItem('beautycosm-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (userData) => {
    const userWithRole = { ...userData, role: userData.role || 'user' };
    setUser(userWithRole);
    localStorage.setItem('beautycosm-user', JSON.stringify(userWithRole));
    // Форсируем обновление компонентов
    setUpdateTrigger(prev => prev + 1);
  };

  const loginAsAdmin = () => {
    console.log('Login as admin function called');
    const adminUser = {
      name: 'Адміністратор',
      email: 'admin@beautycosm.ua',
      role: 'admin'
    };
    login(adminUser);
    // Дополнительно форсируем обновление
    setTimeout(() => {
      setUpdateTrigger(prev => prev + 1);
    }, 100);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('beautycosm-user');
    setUpdateTrigger(prev => prev + 1);
  };

  const value = {
    user,
    theme,
    login,
    loginAsAdmin,
    logout,
    setTheme,
    isLoading,
    updateTrigger
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};