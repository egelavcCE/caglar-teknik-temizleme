import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ServiceAreasSection from './components/ServiceAreasSection';
import ContactSection from './components/ContactSection';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import GalleryPage from './components/GalleryPage';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPage(path === '/' ? 'home' : path.substring(1));
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'hakkimizda':
        return <AboutPage />;
      case 'hizmetler':
        return <ServicesPage />;
      case 'galeri':
        return <GalleryPage />;
      case 'iletisim':
        return <ContactPage />;
      default:
        return (
          <>
            <HeroSection />
            <ServicesSection />
            <ServiceAreasSection />
            <ContactSection />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
