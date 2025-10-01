import React, { useRef, useEffect, useState, useMemo } from 'react';
import './ServicesSection.css';

// Hizmet resimlerini import et
import hizmet1 from '../assets/hizmetler/1.jpeg';
import hizmet2 from '../assets/hizmetler/2.jpeg';
import hizmet3 from '../assets/hizmetler/3.jpeg';
import hizmet4 from '../assets/hizmetler/4.jpeg';
import hizmet5 from '../assets/hizmetler/5.jpeg';
import hizmet6 from '../assets/hizmetler/6.jpeg';
import hizmet7 from '../assets/hizmetler/7.jpeg';
import hizmet8 from '../assets/hizmetler/8.jpeg';
import hizmet9 from '../assets/hizmetler/9.jpeg';

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  // Hizmet verileri
  const services = useMemo(() => [
    { id: 1, image: hizmet1, title: 'Mutfak Tıkanıklık Açma' },
    { id: 2, image: hizmet2, title: 'Kameralı Kanal Görüntüleme' },
    { id: 3, image: hizmet3, title: 'Çatı Arası Su Deposu' },
    { id: 4, image: hizmet4, title: 'Tıkanıklık Açma' },
    { id: 5, image: hizmet5, title: 'Basınçlı Sulu Sistem' },
    { id: 6, image: hizmet6, title: 'Temel Yalıtım' },
    { id: 7, image: hizmet7, title: 'Arızalı Kanalların Değişimi' },
    { id: 8, image: hizmet8, title: 'Çatı Aktarımı' },
    { id: 9, image: hizmet9, title: 'Çatı Tamiri' }
  ], []);

  // Intersection Observer ile animasyon tetikleme
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Kartları sırayla göster
          services.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [services]);

  // Yatay kaydırma fonksiyonları
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 330; // Kart genişliği + gap
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 330; // Kart genişliği + gap
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        {/* Başlık */}
        <div className={`services-header ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="services-title">Hizmetlerim</h2>
          <div className="title-underline"></div>
        </div>

        {/* Hizmet kartları */}
        <div className="services-scroll-container">
          <div className="services-grid" ref={scrollContainerRef}>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card ${visibleCards.includes(index) ? 'slide-in' : ''}`}
              >
                <div className="card-image-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-image"
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* Ok kontrolleri */}
          <div className="scroll-controls">
            <button 
              className="scroll-btn scroll-left" 
              onClick={scrollLeft}
              aria-label="Sol tarafa kaydır"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button 
              className="scroll-btn scroll-right" 
              onClick={scrollRight}
              aria-label="Sağ tarafa kaydır"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Detaylı Görüntüle Butonu */}
        <div className={`services-button-container ${isVisible ? 'fade-in' : ''}`}>
          <button 
            className="view-details-btn"
            onClick={() => window.location.href = '/hizmetler'}
          >
            Detaylı Görüntüle
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="btn-icon">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
