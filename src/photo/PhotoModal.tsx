import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Photo } from '../types/Photo';

interface PhotoModalProps {
  photo: Photo;
  onClose: () => void;
}

export default function PhotoModal({ photo, onClose }: PhotoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(20px, 5vw, 40px)',
      boxSizing: 'border-box'
    }}>
      {/* SVG Filter for Liquid Glass Effect */}
      <svg style={{ display: 'none' }}>
        <filter
          id="modal-glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lighting-color="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      {/* Backdrop */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          cursor: 'pointer'
        }}
        onClick={onClose}
      />
      
      {/* Liquid Glass Modal Content */}
      <div style={{
        position: 'relative',
        display: 'flex',
        fontWeight: '600',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 64px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2)',
        borderRadius: 'clamp(1rem, 3vw, 2rem)',
        maxWidth: 'clamp(300px, 90vw, 1200px)',
        maxHeight: 'clamp(400px, 90vh, 800px)',
        width: '100%',
        height: 'auto'
      }}>
        {/* Liquid Glass Effect Layer */}
        <div style={{
          position: 'absolute',
          zIndex: 0,
          inset: 0,
          backdropFilter: 'blur(3px)',
          filter: 'url(#modal-glass-distortion)',
          overflow: 'hidden',
          borderRadius: 'clamp(1rem, 3vw, 2rem)'
        }} />
        
        {/* Liquid Glass Tint Layer */}
        <div style={{
          zIndex: 1,
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.23)',
          borderRadius: 'clamp(1rem, 3vw, 2rem)'
        }} />
        
        {/* Liquid Glass Shine Layer */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          overflow: 'hidden',
          boxShadow: 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.12), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)',
          borderRadius: 'clamp(1rem, 3vw, 2rem)'
        }} />

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 'clamp(15px, 3vw, 25px)',
            right: 'clamp(15px, 3vw, 25px)',
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            width: 'clamp(40px, 8vw, 50px)',
            height: 'clamp(40px, 8vw, 50px)',
            padding: '0',
            cursor: 'pointer',
            fontSize: 'clamp(16px, 3vw, 20px)',
            fontWeight: '600',
            zIndex: 10,
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            textShadow: '0 1px 2px rgba(181, 181, 181, 0.58)',
            fontFamily: "'BIOSFont', monospace",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
          }}
        >
          ✕
        </button>
        
        {/* Modal Content */}
        <div style={{
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          position: 'relative'
        }}>
          {/* Image Container */}
          <div style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 'clamp(0.5rem, 2vw, 1rem)',
            margin: 'clamp(20px, 4vw, 30px)',
            marginBottom: '0'
          }}>
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 'clamp(300px, 60vh, 500px)',
                objectFit: 'contain',
                display: 'block',
                borderRadius: 'clamp(0.5rem, 2vw, 1rem)'
              }}
            />
          </div>
          
          {/* Text Content */}
          <div style={{ 
            padding: 'clamp(20px, 4vw, 30px)',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(18px, 4vw, 28px)', 
              fontWeight: '1000', 
              color: '#fff', 
              margin: '0 0 clamp(12px, 3vw, 20px) 0',
              letterSpacing: '1px',
              textShadow: '0 1px 2px rgba(181, 181, 181, 0.58)',
              fontFamily: "'BIOSFont', monospace"
            }}>
              {photo.title}
            </h2>
            <p style={{ 
              fontSize: 'clamp(12px, 2.5vw, 16px)', 
              color: 'rgba(229, 221, 221, 0.91)',
              margin: '0',
              fontWeight: '500',
              letterSpacing: '0.5px',
              lineHeight: '1.6',
              fontFamily: "'BIOSFont', monospace"
            }}>
              {photo.alt}
            </p>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
