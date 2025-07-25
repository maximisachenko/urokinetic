import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PricingPage from './pages/Pricing';
import ContactPage from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/o-nas" element={<AboutPage />} />
        <Route path="/ceny" element={<PricingPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;