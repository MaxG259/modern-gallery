import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'404Digits', '404DigitsFallback', Arial Black, sans-serif"
    }}>
      
      {/* Видео-фон */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
          objectFit: 'cover'
        }}
      >
        <source src="/videos/NotFound/background.mp4" type="video/mp4" />
        <source src="/videos/NotFound/background.webm" type="video/webm" />
        
        {/* Fallback для браузеров без поддержки видео */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#000',
          zIndex: 0
        }} />
      </video>

      {/* Затемнение поверх видео для лучшей читаемости */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1
      }} />
      
      {/* Контент поверх видео - БЕЗ БЛЮРА */}
      <div style={{
        textAlign: 'center',
        position: 'relative',
        zIndex: 2,
        padding: '5px',
        borderRadius: '0',
        maxWidth: '1200px',
        width: '90%',
        fontFamily: "'404Digits', '404DigitsFallback', Arial Black, sans-serif"
      }}>
        
        {/* Заголовок 404 ERROR */}
        <h1 style={{
          fontSize: 'clamp(60px, 15vw, 160px)',
          color: '#fff',
          margin: '0 0 clamp(10px, 2vw, 20px) 0',
          textShadow: '0 0 30px rgba(255, 255, 255, 0.4)',
          fontFamily: "'404Digits', '404DigitsFallback', Arial Black, sans-serif",
          whiteSpace: 'pre'
        }}>
          404 ERROR
        </h1>
        
        {/* Текст ошибки */}
        <p style={{
          fontSize: '18px',
          color: '#fff',
          fontWeight: '300',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontFamily: "'BIOSFont', monospace",
          margin: '0 0 clamp(15px, 3vw, 25px) 0'
        }}>
          LOOKS LIKE YOU'RE LOST
        </p>
        
        {/* Liquid Glass Button */}
        <div style={{
          position: 'relative',
          display: 'flex',
          fontWeight: '600',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 0 16px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2)',
          borderRadius: '1.5rem',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2), 0 0 16px rgba(0, 0, 0, 0.1)';
        }}>
          {/* Liquid Glass Effect Layer */}
          <div style={{
            position: 'absolute',
            zIndex: 0,
            inset: 0,
            backdropFilter: 'blur(3px)',
            filter: 'url(#glass-distortion)',
            overflow: 'hidden',
            borderRadius: '1.5rem'
          }} />
          
          {/* Liquid Glass Tint Layer */}
          <div style={{
            zIndex: 1,
            position: 'absolute',
            inset: 0,
            background: 'rgba(255, 255, 255, 0.23)',
            borderRadius: '1.5rem'
          }} />
          
          {/* Liquid Glass Shine Layer */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            overflow: 'hidden',
            boxShadow: 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.12), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)',
            borderRadius: '1.5rem'
          }} />
          
          {/* Button Content */}
          <Link
            to="/"
            style={{
              zIndex: 3,
              color: '#fff',
              padding: 'clamp(12px, 3vw, 20px) clamp(20px, 5vw, 40px)',
              fontSize: 'clamp(10px, 2.5vw, 14px)',
              fontWeight: '600',
              letterSpacing: 'clamp(1px, 0.3vw, 2px)',
              fontFamily: "'BIOSFont', monospace",
              textShadow: '0 1px 2px rgba(181, 181, 181, 0.58)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
              textDecoration: 'none',
              textTransform: 'uppercase'
            }}
          >
            GO BACK TO THE HOME PAGE
          </Link>
        </div>
        
      </div>
      
    </div>
  );
}
