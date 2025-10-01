import React, { useRef, useEffect, useState } from 'react';
import './AboutPage.css';

const AboutPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // const [isVisible, setIsVisible] = useState(false); // Kullanılmıyor
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  const values = [
    {
      id: 1,
      title: 'Hızlı Müdahale',
      description: 'Tıkanıklık sorunlarında hızla müdahale ederek sorunu çözüyoruz',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Zarar Vermeden Çözüm',
      description: 'Kırmadan, döşemeye ve duvarlara zarar vermeden tıkanıklık açıyoruz',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Profesyonel Cihazlar',
      description: 'En modern ve profesyonel cihazlarla hizmet veriyoruz',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Geniş Hizmet Alanı',
      description: 'Eskişehir\'in her mahallesine, ilçe ve köylerine hizmet veriyoruz',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Bölümleri sırayla göster
          [0, 1, 2, 3].forEach((index) => {
            setTimeout(() => {
              setVisibleSections(prev => [...prev, index]);
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-page" ref={sectionRef}>
      <div className="about-container">

        {/* Hakkımızda Bölümü */}
        <div className={`about-section ${visibleSections.includes(0) ? 'slide-in' : ''}`}>
          <div className="section-header">
            <div className="section-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h2 className="section-title">Hakkımızda</h2>
          </div>
          <div className="section-content">
            <p className="section-text">
              Çağlar Teknik Temizleme, konutlarda, iş yerlerinde, fabrikalarda, genel atık su taşıma sistemlerinde meydana gelen tüm tıkanıklıklarda basınçlı sulu sistem ile birlikte profesyonel cihazlarla hizmetinizdedir. 
              Tıkanıklık ne kadar zorlu olursa olsun kırmadan, döşemeye, duvarlara zarar vermeden çalışan bir anlayış içerisindeyiz.
            </p>
            <p className="section-text">
              Tıkanıklık sorunlarında en önemli unsur hızdır. Sorunu hızla çözümlemek ve müdahale etmek bir tesisat ustasının profesyonelliğine bağlıdır. 
              Kullandığımız profesyonel makinelerle tesisat tıkanıklığını açmaktayız. Eskişehir tesisat tıkanıklık açma servisi olarak, fayansları kırmadan müdahale eden ekibimiz tamirin maliyetinin arttırmadan sorunları çözmeye çalışmaktayız.
            </p>
            <p className="section-text">
              Tıkanıklığa sebep olan kireçlenme, kağıt kalıntıları, yemek artıkları hatta yanlışlıkla atılan oyuncaklar bile olsa klavuz ile tesisattan yabancı maddeyi atıyoruz. 
              Profesyonelliğimiz, güler yüzümüz, Eskişehir'in her noktasına hızla ulaşabilecek nitelikteki ekibimizle tesisat tıkanıklığıyla ilgili her sorununuzda yanınızdayız. 
              Ayrıca çatı aktarma tadilat-tamirat işlerinizde de uzman ekibimizle hizmet vermekteyiz.
            </p>
            <p className="section-text">
              ÇAĞLAR TEKNİK OLARAK ŞEHRİN HER MAHALLESİNE İLÇE VE KÖYLERİNE HİZMET VERMEKTEYİZ.
            </p>
          </div>
        </div>

        {/* Misyon Bölümü */}
        <div className={`about-section ${visibleSections.includes(1) ? 'slide-in' : ''}`}>
          <div className="section-header">
            <div className="section-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h2 className="section-title">Misyonumuz</h2>
          </div>
          <div className="section-content">
            <p className="section-text">
              Çağlar Teknik Temizleme olarak misyonumuz; konutlarda, iş yerlerinde ve fabrikalarda meydana gelen tıkanıklık sorunlarını 
              profesyonel cihazlar ve basınçlı sulu sistemlerle hızla çözmektir. Kırmadan, döşemeye ve duvarlara zarar vermeden 
              tıkanıklık açma hizmeti sunarak müşterilerimizin maliyetlerini minimize etmeyi hedefliyoruz.
            </p>
          </div>
        </div>

        {/* Vizyon Bölümü */}
        <div className={`about-section ${visibleSections.includes(2) ? 'slide-in' : ''}`}>
          <div className="section-header">
            <div className="section-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            <h2 className="section-title">Vizyonumuz</h2>
          </div>
          <div className="section-content">
            <p className="section-text">
              Vizyonumuz; tıkanıklık açma ve tesisat hizmetleri alanında Eskişehir'in en güvenilir ve öncü markası olmak, 
              profesyonel cihazlarımız ve uzman ekibimizle tüm tıkanıklık sorunlarını hızla çözerek sektörde standart belirleyen 
              bir kuruluş haline gelmektir. Şehrin her mahallesine, ilçe ve köylerine ulaşarak hizmet vermeyi amaçlıyoruz.
            </p>
          </div>
        </div>

        {/* Değerlerimiz Bölümü */}
        <div className={`values-section ${visibleSections.includes(3) ? 'slide-in' : ''}`}>
          <div className="section-header">
            <div className="section-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h2 className="section-title">Değerlerimiz</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={value.id} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
