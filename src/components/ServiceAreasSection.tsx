import React, { useRef, useEffect, useState } from 'react';
import './ServiceAreasSection.css';
import harita from '../assets/harita.png';

const ServiceAreasSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer ile animasyon tetikleme
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="service-areas-section" ref={sectionRef}>
      <div className="service-areas-container">
        {/* Başlık */}
        <div className={`service-areas-header ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="service-areas-title">Hizmet Verilen Yerler</h2>
          <div className="title-underline"></div>
          <p className="service-areas-subtitle">
            Geniş hizmet ağımızla tüm bölgelerde profesyonel hizmet sunuyoruz
          </p>
        </div>

        {/* Harita Görseli */}
        <div className={`map-container ${isVisible ? 'scale-in' : ''}`}>
          <div className="map-wrapper">
            <img
              src={harita}
              alt="Hizmet Verilen Yerler Haritası"
              className="map-image"
            />
            <div className="map-overlay">
              <div className="overlay-content">
                <h3 className="overlay-title">Tüm Bölgelerde Hizmet</h3>
                <p className="overlay-text">
                  Profesyonel ekibimizle geniş bir coğrafyada hizmet veriyoruz
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className={`stats-container ${isVisible ? 'fade-in-delayed' : ''}`}>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Hizmet Verilen İlçe</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Mutlu Müşteri</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Acil Hizmet</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Yıllık Deneyim</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
