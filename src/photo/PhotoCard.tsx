import type { Photo } from '../types/Photo';

interface PhotoCardProps {
  photo: Photo;
  onPhotoClick: (photo: Photo) => void;
}

export default function PhotoCard({ photo, onPhotoClick }: PhotoCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#000',
        border: '1px solid #333',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 0.4s ease',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.borderColor = '#fff';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.borderColor = '#333';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onClick={() => onPhotoClick(photo)}
    >
      <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
      <div style={{ 
        padding: '24px',
        backgroundColor: '#000',
        borderTop: '1px solid #333'
      }}>
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: '300', 
          color: '#fff', 
          margin: '0 0 8px 0',
          letterSpacing: '1px'
        }}>
          {photo.title}
        </h3>
        <p style={{ 
          fontSize: '14px', 
          color: '#999', 
          margin: '0',
          fontWeight: '300',
          letterSpacing: '0.5px'
        }}>
          {photo.alt}
        </p>
      </div>
    </div>
  );
}
