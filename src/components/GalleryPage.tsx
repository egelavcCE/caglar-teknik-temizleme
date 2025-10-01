import React, { useState, useRef, useEffect } from 'react';
import './GalleryPage.css';

// Fotoğrafları import et
import foto1 from '../assets/foto/1.jpg';
import foto2 from '../assets/foto/2.jpg';
import foto3 from '../assets/foto/3.jpg';
import foto4 from '../assets/foto/4.jpg';
import foto5 from '../assets/foto/5.jpg';
import foto6 from '../assets/foto/6.jpg';
import foto7 from '../assets/foto/7.jpg';
import foto8 from '../assets/foto/8.jpg';

// Videoları import et
import video1 from '../assets/video/v1.mp4';
import video2 from '../assets/video/v2.mp4';
import video3 from '../assets/video/v3.mp4';
import video4 from '../assets/video/v4.mp4';

const photos = [
  { id: 1, src: foto1, alt: 'Tesisat Çalışması 1' },
  { id: 2, src: foto2, alt: 'Tesisat Çalışması 2' },
  { id: 3, src: foto3, alt: 'Tesisat Çalışması 3' },
  { id: 4, src: foto4, alt: 'Tesisat Çalışması 4' },
  { id: 5, src: foto5, alt: 'Tesisat Çalışması 5' },
  { id: 6, src: foto6, alt: 'Tesisat Çalışması 6' },
  { id: 7, src: foto7, alt: 'Tesisat Çalışması 7' },
  { id: 8, src: foto8, alt: 'Tesisat Çalışması 8' }
];

const videos = [
  { id: 1, src: video1, thumbnail: foto1 },
  { id: 2, src: video2, thumbnail: foto2 },
  { id: 3, src: video3, thumbnail: foto3 },
  { id: 4, src: video4, thumbnail: foto4 }
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'image' | 'video';
  src: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, type, src }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} ref={modalRef}>
        <button className="modal-close" onClick={onClose} title="Kapat" aria-label="Modal'ı Kapat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        
        <div className="modal-media">
          {type === 'image' ? (
            <img src={src} alt="Galeri Fotoğrafı" className="modal-image" />
          ) : (
            <video 
              src={src} 
              controls 
              autoPlay 
              className="modal-video"
            >
              Tarayıcınız video oynatmayı desteklemiyor.
            </video>
          )}
        </div>
      </div>
    </div>
  );
};

const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    type: 'image' | 'video';
    src: string;
  }>({
    isOpen: false,
    type: 'image',
    src: ''
  });

  const openModal = (type: 'image' | 'video', src: string) => {
    setModalData({
      isOpen: true,
      type,
      src
    });
  };

  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="gallery-page">
      <div className="gallery-container">
        {/* Başlık */}
        <div className="gallery-header">
          <h1 className="gallery-title">Galeri</h1>
          <p className="gallery-subtitle">
            Çalışmalarımızdan örnekler ve süreç videolarımız
          </p>
        </div>

        {/* Tab Butonları */}
        <div className="gallery-tabs">
          <button 
            className={`tab-button ${activeTab === 'photos' ? 'active' : ''}`}
            onClick={() => setActiveTab('photos')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
            Fotoğraflar
          </button>
          <button 
            className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
            </svg>
            Videolar
          </button>
        </div>

        {/* İçerik */}
        <div className="gallery-content">
          {activeTab === 'photos' && (
            <div className="photos-grid">
              {photos.map((photo) => (
                <div 
                  key={photo.id} 
                  className="gallery-card photo-card"
                  onClick={() => openModal('image', photo.src)}
                >
                  <div className="card-image-container">
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="card-image"
                      loading="lazy"
                    />
                    <div className="card-overlay">
                      <div className="overlay-content">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span>Büyüt</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="videos-grid">
              {videos.map((video) => (
                <div 
                  key={video.id} 
                  className="gallery-card video-card"
                  onClick={() => openModal('video', video.src)}
                >
                  <div className="card-image-container">
                    <img 
                      src={video.thumbnail} 
                      alt="Video Thumbnail" 
                      className="card-image"
                      loading="lazy"
                    />
                    <div className="card-overlay">
                      <div className="play-button">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        type={modalData.type}
        src={modalData.src}
      />
    </div>
  );
};

export default GalleryPage;
