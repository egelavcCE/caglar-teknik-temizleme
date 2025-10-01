import React, { useRef, useEffect, useState, useMemo } from 'react';
import './ContactSection.css';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Kopyala fonksiyonu
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000); // 2 saniye sonra mesajı kaldır
    } catch (err) {
      console.error('Kopyalama hatası:', err);
    }
  };

  // İletişim bilgileri
  const contactInfo = useMemo(() => [
    {
      id: 1,
      type: 'address',
      title: 'Adres 1',
      info: 'Çamlıca Mah. Arayıcı Sok. no:19 Tepebaşı/Eskişehir',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      )
    },
    {
      id: 2,
      type: 'address',
      title: 'ADRES 2',
      info: 'Emek Mah. Atasoy Sk. No: 40 Odunpazarı/Eskişehir',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      )
    },
    {
      id: 3,
      type: 'phone',
      title: 'Telefon 1',
      info: '+90 546 284 97 64',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      )
    },
    {
      id: 4,
      type: 'phone',
      title: 'Telefon 2',
      info: '+90 542 201 95 74',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      )
    },
    {
      id: 5,
      type: 'email',
      title: 'E-posta',
      info: 'escaglartekniktemizleme@gmail.com',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ], []);

  // Intersection Observer ile animasyon tetikleme
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Kartları sırayla göster
          contactInfo.forEach((_, index) => {
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
  }, [contactInfo]);

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        {/* Başlık */}
        <div className={`contact-header ${isVisible ? 'fade-in' : ''}`}>
          <h2 className="contact-title">İletişim</h2>
          <div className="title-underline"></div>
          <p className="contact-subtitle">
            Bizimle iletişime geçin, size en iyi hizmeti sunalım
          </p>
        </div>

        {/* İletişim Kartları */}
        <div className="contact-cards-container">
          <div className="contact-cards-grid">
            {contactInfo.map((contact, index) => (
              <div
                key={contact.id}
                className={`contact-card ${visibleCards.includes(index) ? 'slide-in' : ''} ${contact.type}`}
              >
                <div className="card-header">
                  <div className="card-icon">
                    {contact.icon}
                  </div>
                  <h3 className="card-title">{contact.title}</h3>
                </div>
                <div className="card-content">
                  <p className="card-info">{contact.info}</p>
                </div>
                <div className="card-action">
                  {contact.type === 'phone' && (
                    <>
                      <a href={`tel:${contact.info}`} className="action-btn">
                        Ara
                      </a>
                      <button 
                        onClick={() => copyToClipboard(contact.info)}
                        className="copy-btn"
                        title="Numarayı Kopyala"
                      >
                        {copiedText === contact.info ? (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                          </svg>
                        )}
                      </button>
                    </>
                  )}
                  {contact.type === 'email' && (
                    <a href={`mailto:${contact.info}`} className="action-btn">
                      Mail Gönder
                    </a>
                  )}
                  {contact.type === 'address' && (
                    <a 
                      href={contact.id === 1 
                        ? "https://www.google.com/maps/search/?api=1&query=Çamlıca+mahallesi+Arayıcı+sokak+no+19+Tepebaşı+Eskişehir"
                        : "https://www.google.com/maps/search/?api=1&query=Emek+Mah.+Atasoy+Sk.+No:+40+Odunpazarı+Eskişehir"
                      }
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-btn"
                    >
                      Yol Tarifi
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Çalışma Saatleri */}
        <div className={`working-hours ${isVisible ? 'fade-in-delayed' : ''}`}>
          <div className="hours-card">
            <div className="hours-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
              </svg>
            </div>
            <div className="hours-content">
              <h3 className="hours-title">Çalışma Saatleri</h3>
              <div className="hours-info">
                <p>Pazartesi - Cuma: 08:00 - 18:00</p>
                <p>Cumartesi: 09:00 - 16:00</p>
                <p>Pazar: Kapalı</p>
                <p className="emergency">Acil Durumlar: 7/24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
