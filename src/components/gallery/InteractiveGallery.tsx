import React, { useState } from 'react';
import './InteractiveGallery.css';
import type { Photo } from '../../types/Photo';
import { PhotoModal } from '../../photo';

interface InteractiveGalleryProps {
  photos: Photo[];
  onClose?: () => void;
}

export const InteractiveGallery: React.FC<InteractiveGalleryProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="gallery-container">
      <div className="container">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="card"
            onClick={() => handlePhotoClick(photo)}
          >
            <img 
              src={photo.src} 
              alt={photo.alt}
              loading="lazy"
            />
            <div className="card__head">
              {photo.title}
            </div>
          </div>
        ))}
      </div>

      {/* Модалка для увеличенной фотографии */}
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={closePhoto} />
      )}
    </div>
  );
};
