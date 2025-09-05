import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceProductsPage from './pages/ServiceProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ReviewsPage from './pages/ReviewsPage';
import AboutPage from './pages/AboutPage';
import FloatingParticles from './components/FloatingParticles';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#051e38] text-white relative overflow-x-hidden">
        <FloatingParticles />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service/:serviceId" element={<ServiceProductsPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;