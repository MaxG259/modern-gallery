import { useState } from 'react';
import { useAuth } from '../contexts/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Логика авторизации (можно добавить реальную проверку)
    if (username && password) {
      login();
      // Переходим на Loading для показа анимации
      navigate('/loading');
    }
  };


  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      {/* SVG Filter for Liquid Glass Effect */}
      <svg style={{ display: 'none' }}>
        <filter
          id="glass-distortion"
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
      {/* Основное видео фон (полный экран) */}
      <video
        autoPlay
        loop
        muted
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
          zIndex: 1,
          objectFit: 'cover'
        }}
      >
        <source src="/videos/Login/login-bg.mp4" type="video/mp4" />
        {/* Fallback для браузеров без поддержки видео */}
        Ваш браузер не поддерживает видео.
      </video>

      {/* Мини видео (в 4 раза меньше, сдвинуто вправо) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          width: '37%', // В 4 раза меньше (100% / 4 = 25%)
          height: 'auto',
          transform: 'translateY(-50%)',
          zIndex: 2,
          objectFit: 'cover',
          borderRadius: '8px',
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
        }}
      >
        <source src="/videos/Login/mini-login-bg.mp4" type="video/mp4" />
        {/* Fallback для браузеров без поддержки видео */}
        Ваш браузер не поддерживает видео.
      </video>

      {/* Темный оверлей для лучшей читаемости */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.28)',
        zIndex: 3
      }} />

      {/* Liquid Glass Form Wrapper */}
      <div style={{
        position: 'relative',
        zIndex: 4,
        display: 'flex',
        fontWeight: '600',
        overflow: 'hidden',
        boxShadow: '0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2)',
        borderRadius: '2rem',
        width: '100%',
        maxWidth: 'clamp(300px, 90vw, 400px)',
        minWidth: '280px'
      }}>
        {/* Liquid Glass Effect Layer */}
        <div style={{
          position: 'absolute',
          zIndex: 0,
          inset: 0,
          backdropFilter: 'blur(3px)',
          filter: 'url(#glass-distortion)',
          overflow: 'hidden',
          borderRadius: '2rem'
        }} />
        
        {/* Liquid Glass Tint Layer */}
        <div style={{
          zIndex: 1,
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.23)',
          borderRadius: '2rem'
        }} />
        
        {/* Liquid Glass Shine Layer */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          overflow: 'hidden',
          boxShadow: 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.12), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5)',
          borderRadius: '2rem'
        }} />
        
        {/* Form Content */}
        <div style={{
          zIndex: 3,
          fontSize: '2rem',
          color: 'black',
          padding: 'clamp(20px, 5vw, 40px)',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}>
        <h2 style={{
          color: '#fff',
          fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
          fontWeight: '1000',
          marginBottom: 'clamp(20px, 4vw, 30px)',
          letterSpacing: '1px',
          textAlign: 'center',
          width: '100%',
          textShadow: '0 1px 2px rgba(181, 181, 181, 0.58)',
          fontFamily: "'BIOSFont', monospace"
        }}>
          LOGIN
        </h2>
        
        <form onSubmit={handleSubmit} style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(15px, 3vw, 20px)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}>
            <label style={{
              display: 'block',
              color: '#fff',
              marginBottom: 'clamp(6px, 1.5vw, 8px)',
              fontSize: 'clamp(12px, 3vw, 14px)',
              fontWeight: '500',
              textAlign: 'left',
              textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)',
              fontFamily: "'BIOSFont', monospace"
            }}>
              UR NAME
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: 'clamp(10px, 2.5vw, 12px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                color: '#000',
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                boxSizing: 'border-box',
                backdropFilter: 'blur(10px)',
                boxShadow: 'inset 0 1px 3px rgba(255, 255, 255, 0.2)',
                fontFamily: "'BIOSFont', monospace"
              }}
              required
            />
          </div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}>
            <label style={{
              display: 'block',
              color: '#fff',
              marginBottom: 'clamp(6px, 1.5vw, 8px)',
              fontSize: 'clamp(12px, 3vw, 14px)',
              fontWeight: '500',
              textAlign: 'left',
              textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)',
              fontFamily: "'BIOSFont', monospace"
            }}>
              UR PASS
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: 'clamp(10px, 2.5vw, 12px)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                color: '#000',
                fontSize: 'clamp(14px, 3.5vw, 16px)',
                boxSizing: 'border-box',
                backdropFilter: 'blur(10px)',
                boxShadow: 'inset 0 1px 3px rgba(255, 255, 255, 0.2)',
                fontFamily: "'BIOSFont', monospace"
              }}
              required
            />
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: 'clamp(12px, 3vw, 16px)',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(0, 0, 0, 0.3)',
              borderRadius: '12px',
              color: '#fff',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2)',
              marginTop: 'clamp(10px, 2vw, 15px)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
              fontFamily: "'BIOSFont', monospace"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
            }}
          >
            ENTER FREE
          </button>
        </form>
        
        <div style={{
          marginTop: 'clamp(15px, 3vw, 20px)',
          color: 'rgba(229, 221, 221, 0.91)',
          fontSize: 'clamp(12px, 3vw, 14px)',
          textAlign: 'center',
          width: '100%',
          fontWeight: '500',
          textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)',
          fontFamily: "'BIOSFont', monospace"
        }}>
          <p>Japan-Thailand Return 2024</p>
        </div>
        </div>
      </div>
      
    </div>
  );
}
