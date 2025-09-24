import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout/Layout'
import HomePage from './pages/Home/HomePage'
import CatalogPage from './pages/Catalog/CatalogPage'
import AboutPage from './pages/About/AboutPage'
import SettingsPage from './pages/Settings/SettingsPage'
import CartPage from './pages/Cart/CartPage'

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Layout>
  )
}

export default AppRoutes