import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import OfertaPage from './pages/Oferta';
import PricingPage from './pages/Pricing';
import ContactPage from './pages/Contact';
import ForDoctorsPage from './pages/Specialists/ForDoctors';
import ForVeterinariansPage from './pages/Specialists/ForVeterinarians';
import TrainingPage from './pages/Specialists/Training';
import ScrollToTop from './components/common/ScrollToTop';

const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/o-nas" element={<AboutPage />} />
        <Route path="/oferta" element={<OfertaPage />} />
        <Route path="/ceny" element={<PricingPage />} />
        <Route path="/dla-lekarzy" element={<ForDoctorsPage />} />
        <Route path="/dla-weterynarzy" element={<ForVeterinariansPage />} />
        <Route path="/szkolenia" element={<TrainingPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;