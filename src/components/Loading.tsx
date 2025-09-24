import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoadingProps {
  targetPath: string; // Куда переходить после загрузки
  message?: string;   // Сообщение на экране
}

export const Loading = ({ targetPath, message = "ЗАГРУЗКА..." }: LoadingProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Через 4 секунды переходим на целевую страницу
    const timer = setTimeout(() => {
      navigate(targetPath);
    }, 4000);

    // Очищаем таймер при размонтировании
    return () => clearTimeout(timer);
  }, [navigate, targetPath]);

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#000',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      
      {/* Спиральная анимация частиц - оригинальная */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 2,
        transform: 'translate(-50%, -50%)',
        perspective: '500px'
      }}>
        {/* 62 частицы для спиральной анимации */}
        {Array.from({ length: 62 }, (_, i) => (
          <i
            key={i}
            style={{
              display: 'block',
              position: 'absolute',
              width: '8px',
              height: '8px',
              borderRadius: '8px',
              opacity: 0,
              background: 'rgba(255,255,255,0.5)',
              boxShadow: '0px 0px 10px rgba(255,255,255,1)',
              animationName: 'spin',
              animationDuration: '3s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in-out',
              animationDelay: `${i * (3 / 62)}s`,
              transform: `rotate(${(i / 62) * 720}deg) translate3d(80px, 0, 0)`
            }}
          />
        ))}
      </div>

      {/* Центральное сообщение */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '300',
          letterSpacing: '3px',
          marginBottom: '20px',
          textShadow: '0 0 20px rgba(255,255,255,0.5)'
        }}>
          {message}
        </h1>
      </div>

      {/* CSS анимация для частиц - оригинальная */}
      <style>{`
        @keyframes spin {
          from {
            opacity: 0.0;
          }
          to {
            opacity: 0.6;
            transform: translate3d(-4px, -4px, 570px);
          }
        }
      `}</style>
    </div>
  );
};
