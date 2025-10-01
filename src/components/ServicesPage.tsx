import React, { useRef, useEffect, useState, useMemo } from 'react';
import './ServicesPage.css';

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

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ServicesPage: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  // Service data array
  const services: Service[] = useMemo(() => [
    {
      id: 1,
      title: 'Mutfak Tıkanıklık Açma',
      description: 'Mutfak lavabolarındaki tıkanıklıkları modern ekipmanlarla açıyoruz. Hızlı ve etkili çözüm sunuyoruz.',
      image: hizmet1
    },
    {
      id: 2,
      title: 'Kameralı Kanal Görüntüleme',
      description: 'Kanal sistemlerinizi kameralı görüntüleme ile detaylı analiz ediyoruz. Problemleri önceden tespit ediyoruz.',
      image: hizmet2
    },
    {
      id: 3,
      title: 'Çatı Arası Su Deposu',
      description: 'Çatı arası su depolarının temizliği ve bakımı. Su kalitesini korur ve hijyenik ortam sağlar.',
      image: hizmet3
    },
    {
      id: 4,
      title: 'Tıkanıklık Açma',
      description: 'Genel tıkanıklık açma hizmetleri. Modern ekipmanlarla hızlı ve etkili çözümler sunuyoruz.',
      image: hizmet4
    },
    {
      id: 5,
      title: 'Basınçlı Sulu Sistem',
      description: 'Basınçlı su ile güçlü temizlik sistemi. Derinlemesine temizlik ve hijyenik ortam sağlar.',
      image: hizmet5
    },
    {
      id: 6,
      title: 'Temel Yalıtım',
      description: 'Bina temellerinin yalıtımı ile nem ve su sızıntısını önler. Yapı sağlığını korur.',
      image: hizmet6
    },
    {
      id: 7,
      title: 'Arızalı Kanalların Değişimi',
      description: 'Arızalı kanalların tespiti ve değişimi. Sisteminizin verimli çalışmasını sağlıyoruz.',
      image: hizmet7
    },
    {
      id: 8,
      title: 'Çatı Aktarımı',
      description: 'Çatı aktarım hizmetleri ile su sızıntısını önler. Yapı sağlığını korur ve uzun ömür sağlar.',
      image: hizmet8
    },
    {
      id: 9,
      title: 'Çatı Tamiri',
      description: 'Çatı tamir ve bakım hizmetleri. Profesyonel ekipmanlarla kalıcı çözümler sunuyoruz.',
      image: hizmet9
    }
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

  return (
    <section className="services-page" ref={sectionRef}>
      <div className="services-container">
        {/* Başlık */}
        <div className={`services-header ${isVisible ? 'fade-in' : ''}`}>
          <h1 className="services-title">Hizmetlerimiz</h1>
          <div className="title-underline"></div>
        </div>

        {/* Hizmet Kartları */}
        <div className="services-grid">
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
                  loading="lazy"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
