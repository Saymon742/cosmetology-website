import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/common/Layout/Layout';
import HomePage from './pages/Home/HomePage';
import AdminHomePage from './pages/Admin/AdminHomePage';
import CatalogPage from './pages/Catalog/CatalogPage';
import AboutPage from './pages/About/AboutPage';
import CartPage from './pages/Cart/CartPage';
import SettingsPage from './pages/Settings/SettingsPage';
import './App.css';

function App() {
  return (
    <AppProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/admin" element={<AdminHomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </AppProvider>
  );
}

export default App;