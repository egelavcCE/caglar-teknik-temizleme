import React from 'react';
import './HeroSection.css';
import slogan from '../assets/slogan.png';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Sol taraf - Slogan resmi */}
        <div className="hero-left">
          <div className="slogan-image-container">
            <img 
              src={slogan} 
              alt="Tesisat Slogan" 
              className="slogan-image"
            />
          </div>
        </div>

        {/* Sağ taraf - Hakkımızda metni */}
        <div className="hero-right">
          <div className="about-content">
            <h2 className="about-title">Hakkımızda</h2>
            <p className="about-text">
              Çağlar Teknik Temizleme, konutlarda, iş yerlerinde, fabrikalarda meydana gelen tıkanıklık sorunlarında basınçlı sulu sistem ile birlikte profesyonel cihazlarla hizmetinizdedir. 
              Tıkanıklık ne kadar zorlu olursa olsun kırmadan, döşemeye, duvarlara zarar vermeden çalışan bir anlayış içerisindeyiz.
            </p>
            <p className="about-text">
              Tıkanıklık sorunlarında en önemli unsur hızdır. Profesyonel makinelerimizle tesisat tıkanıklığını açıyor, fayansları kırmadan müdahale ederek tamirin maliyetini arttırmadan sorunları çözüyoruz.
            </p>
            <button 
              className="read-more-btn"
              onClick={() => window.location.href = '/hakkimizda'}
            >
              Detaylı Bilgi
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="btn-icon">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
