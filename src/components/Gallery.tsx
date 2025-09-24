import { useAuth } from '../contexts/useAuth';
import { useNavigate } from 'react-router-dom';
import { InteractiveGallery } from './gallery/InteractiveGallery';
import type { Photo } from '../types/Photo';
import './gallery/ButtonHover.css';
import './gallery/HeaderResponsive.css';

// Стильные загадочные фотографии для демонстрации скиллов
// ЗАМЕНИТЕ ЭТИ ПУТИ НА СВОИ РЕАЛЬНЫЕ ФОТОГРАФИИ!
const portfolioPhotos: Photo[] = [
  {
    id: 1,
    src: '/images/portfolio-1.JPG',
    alt: 'ЧТО БЫ ВЫБРАЛ ТЫ? КОЛА ЗИРО ШУГА С ОРЕО ИЛИ КОЛА ЗИРО ШУГА С ОРЕО?',
    title: 'WHAT WILL YOU CHOOSE?'
  },
  {
    id: 2,
    src: '/images/portfolio-2.JPG',
    alt: 'ИНСТАГРАМ МОДЕЛЬ ВОЗЛЕ ФУДЗИЯМЫ В САЛАМОНАХ ACS PRO',
    title: 'STANDING NEAR FUJIYAMA?'
  },
  {
    id: 3,
    src: '/images/portfolio-3.JPG',
    alt: 'ПРЯМО ТАМ, НА ПЕРЕКРЕСТКЕ МОСКВА-НОВОСИБИРСК',
    title: 'TOKYO DRIFT'
  },
  {
    id: 4,
    src: '/images/portfolio-4.JPG',
    alt: 'СТРЕЛЬНУЛИ КАК ТО РАЗ СИГИ У НАС СЕВЕРО-КОРЕЙЦЫ. НУ ОНИ СТЕБАЛИСЬ НАД НАМИ',
    title: 'PARANAS FROM NORTH KOREA, 北朝鮮'
  },
  {
    id: 5,
    src: '/images/portfolio-5.JPG',
    alt: 'ЕЩЕ ЗЕЛЕНЫЙ ТАКОЙ САМЕЦ У НИХ ЕСТЬ. ЗНАЛИ БЫ ВЫ КАКОЙ ОН МЕНТОЛОВЫЙ. ЭТО ЖЕСТЬ',
    title: 'SIGGAS'
  },
  {
    id: 6,
    src: '/images/portfolio-6.JPG',
    alt: 'ПОЧЕМУ ИМЕННО ТАК СДЕЛАНА РАЗМЕТКА?',
    title: 'WHY IS THE MARKUP LIKE THIS?'
  },
  {
    id: 7,
    src: '/images/portfolio-7.JPG',
    alt: 'ЧЕЛОВЕК ОТДАЛ 600$ НА КАПЕЛЬНИЦУ. ИЗНАЧАЛЬНО 2000$ СКАЗАЛИ. СЛАВА БОГУ БАТЫР ЗНАЕТ ИНГЛИШ',
    title: '600$ CAPELLINI'
  },
  {
    id: 8,
    src: '/images/portfolio-8.JPG',
    alt: 'МОДНАЯ ФОТОСЕССИЯ НА ПУТИ В КРИСТИАН',
    title: 'ON THE WAY TO CHRISTIAN'
  },
  {
    id: 9,
    src: '/images/portfolio-9.JPG',
    alt: 'ПО КАЙФУ КУРИЛИ СИГИ В ЯПОНИИ',
    title: 'STAY SMOKING'
  },
  {
    id: 10,
    src: '/images/portfolio-10.JPG',
    alt: 'ВЫБОР МАЕК НА РЫНКЕ В ТАЙЛАНДЕ',
    title: 'T-SHIRT'
  },
  {
    id: 11,
    src: '/images/portfolio-11.JPG',
    alt: 'НАНОТОЛЧКИ. ЕСЛИ НАЖАТЬ НА КНОПКУ В BLACK ANGUS ЛЪЕТСЯ СТРУЙКА',
    title: 'NANO TOILET'
  },
  {
    id: 12,
    src: '/images/portfolio-12.JPG',
    alt: 'ТЕ САМЫЕ МЕНТОЛОВЫЕ КАМЕЛ ИЗ ЯПОНИИ. ЭТО УЖАС НАСКОЛЬКО ОНИ МЕНТОЛОВЫЕ',
    title: 'MENTOL CAMEl'
  },
  {
    id: 13,
    src: '/images/portfolio-13.JPG',
    alt: 'ПРОСТО КОРОБКИ В ЯПОНИИ. ВЫГЛЯДИТ СИМПАТИШНО',
    title: 'STREET BOX'
  },
  {
    id: 14,
    src: '/images/portfolio-14.JPG',
    alt: 'НЕМНОГО ВЫПИВАЛИ. В ЯПОНИИ МОЖНО ПИТЬ АЛКОГОЛЬ ГДЕ УГОДНО И ВО СКОЛЬКО УГОДНО. НО АЛКАШЕЙ МЫ НЕ ВСТРЕТИЛИ. ПАРАДОКС',
    title: 'ALCOHOL'
  },
  {
    id: 15,
    src: '/images/portfolio-15.JPG',
    alt: 'НАМБА ТУ, КОРОЛЬ КРИСТИАН, ИНСТАГРАМ МОДЕЛЬ',
    title: 'TRIO'
  },
  {
    id: 16,
    src: '/images/portfolio-16.JPG',
    alt: 'ЖДУ ВЕРТОЛЕТА НА ВЕРХУ ШИБУЯСКОГО НЕБА',
    title: 'SHIBUYA SKY'
  },
  {
    id: 17,
    src: '/images/portfolio-17.JPG',
    alt: 'ТРИО ПАЦАНОВ В ЯПОНИИ',
    title: 'TRIO NUMBER TWO'
  },
  {
    id: 18,
    src: '/images/portfolio-18.JPG',
    alt: 'ТЕ САМЫЕ ЭНЕРГЕТИКИ. ОНИ С ВИТАМИНАМИ. КАЖДАЯ БАНОЧКА ЭТО КАКОЙ ТО ОДИН ВИТАМИН. ПОДНИМАЛИ ИМУННИТЕТ НА УРА',
    title: 'TORNADO'
  },
  {
    id: 19,
    src: '/images/portfolio-19.JPG',
    alt: 'ЧЕТКИЕ ФИЛЫ. ВСЁ ТАКИ КУПЛЮ ИХ',
    title: 'OUTFIT'
  },
  {
    id: 20,
    src: '/images/portfolio-20.JPG',
    alt: 'ВНУТРИ СЫР. ТЯНУЩИЙСЯ',
    title: '100% CHEESE'
  },
  {
    id: 21,
    src: '/images/portfolio-21.JPG',
    alt: 'КОНЧЕННОЕ БЫДЛО ДАЖЕ В ЯПОНИИ. КАКОЙ ЖЕ СТЫД.',
    title: 'BIDLO>'
  },
  {
    id: 22,
    src: '/images/portfolio-22.JPG',
    alt: 'ЧЕ ЗА ТИП Я В ШОКЕ ЛЕЕЕ',
    title: 'BOND 77'
  },
  {
    id: 23,
    src: '/images/portfolio-23.JPG',
    alt: 'МАГАЗИН МУЗЫКАЛЬНЫЙ ТОВАРОВ В ЯПОНИИ',
    title: 'MUSICAL STORE'
  },
  {
    id: 24,
    src: '/images/portfolio-24.JPG',
    alt: 'ТОПОВАЯ ПОЕЗДКА НА ОСТРОВА ПХИ-ПХИ В ТАЙЛАНДЕ',
    title: 'PHI PHI'
  },
  {
    id: 25,
    src: '/images/portfolio-25.JPG',
    alt: 'ПРОСТО НА УЛИЦАХ ТАЙЛАНДА',
    title: 'COVID 19'
  },
  {
    id: 26,
    src: '/images/portfolio-26.JPG',
    alt: 'НАЧАЛО ПУТЕШЕСТВИЯ',
    title: 'START'
  },
  {
    id: 27,
    src: '/images/portfolio-27.JPG',
    alt: 'ОЛЕНЬ И ПОСОВМЕСТИТЕЛЬСТВУ ИНСТАГРАМ МОДЕЛЬ',
    title: 'CLOWN'
  },
  {
    id: 28,
    src: '/images/portfolio-28.JPG',
    alt: 'ЛЕТИМ. УСТАЛИ.',
    title: 'FLYING'
  },
  {
    id: 29,
    src: '/images/portfolio-29.JPG',
    alt: 'ДЕНЬ РОЖДЕНИЯ МАКСА. ИНСТАГРАМ МОДЕЛЬ',
    title: 'BIRTHDAY'
  },
  {
    id: 30,
    src: '/images/portfolio-30.JPG',
    alt: 'TEAMLAB PLANET. ПРИКОЛЬНЫЙ МУЗЕЙ. ИНТЕРАКТИВНЫЙ. СОВЕТУЮ ЗАЙТИ',
    title: 'TEAMLAB PLANET'
  },
  {
    id: 31,
    src: '/images/portfolio-31.JPG',
    alt: 'НАСТОЯЩИЕ СУШИ И РОЛЛЫ ИЗ ЯПОНИИ. ХОТЬ И ДОРОГО НО ЭТО ТОГО СТОИТ. ОЧЕНЬ ВКУСНО. НО ВОТ ЗНАКОМСТВО С МИДИЯМИ НАФИГ НЕ НУЖНО',
    title: 'ROLLS'
  },
  {
    id: 32,
    src: '/images/portfolio-32.JPG',
    alt: 'ПРОСТО ЕМ КАКУЮ ТО СОСИСКУ В ТЕСТЕ ВОЗЛЕ ГОРЫ ФУДЗИЯМЫ',
    title: 'SOUSHI'
  },
  {
    id: 33,
    src: '/images/portfolio-33.JPG',
    alt: 'ЖЕНДОС ИДЁТ КУДА ТО ПО ЯПОНИИ. НУ НЕ КАЙФ ЖЕ',
    title: 'TOKYOTO'
  },
  {
    id: 34,
    src: '/images/portfolio-34.JPG',
    alt: 'ВПЕРВЫЕ КАТАЛИСЬ НА ДЖЕСКИ В ТАЙЛАНДЕ. ЭТО ТОГО СТОИТ.',
    title: 'JETSKI'
  },
  {
    id: 35,
    src: '/images/portfolio-35.JPG',
    alt: 'ДВИГАТЕЛЬ КОТОРЫЙ РАБОТАЕТ НА ЛОДКЕ. ТАКОЙ НАС ОТВЁЗ НА ПХИ-ПХИ',
    title: 'MOTOR'
  }
];

export default function Gallery() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleProjectsClick = () => {
    // Переходим на маршрут Loading проектов, который покажет анимацию
    navigate('/loading-projects');
  };



  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000' }}>
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
      {/* Header */}
      <header style={{ backgroundColor: '#000', borderBottom: '1px solid #333' }}>
        <div className="header-grid" style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: 'clamp(15px, 3vw, 30px) clamp(20px, 5vw, 40px)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gridTemplateAreas: '"title buttons"',
          alignItems: 'center',
          gap: 'clamp(8px, 2vw, 20px)'
        }}>
          <h1 className="header-title" style={{ 
            fontSize: 'clamp(16px, 4vw, 28px)', 
            fontWeight: '300', 
            color: '#fff', 
            margin: 0, 
            letterSpacing: 'clamp(1px, 0.5vw, 2px)', 
            fontFamily: "'BIOSFont', monospace",
            gridArea: 'title',
            textAlign: 'left'
          }}>
            Japan-Thailand Return 2024
          </h1>
          <div className="header-buttons" style={{ 
            display: 'flex', 
            gap: 'clamp(8px, 2vw, 17px)',
            gridArea: 'buttons',
            justifyContent: 'flex-end'
          }}>
              {/* PROJECTS 18+ Liquid Glass Button */}
              <div className="liquid-glass-button" style={{
                position: 'relative',
                display: 'flex',
                fontWeight: '600',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 0 16px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2)',
                borderRadius: 'clamp(0.8rem, 2vw, 1.5rem)',
                cursor: 'pointer',
                minWidth: 'clamp(80px, 15vw, 120px)'
              }}
              onClick={handleProjectsClick}
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
                <div className="button-text" style={{
                  zIndex: 3,
                  color: '#fff',
                  padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 20px)',
                  fontSize: 'clamp(10px, 2.5vw, 14px)',
                  fontWeight: '600',
                  letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
                  fontFamily: "'BIOSFont', monospace",
                  textShadow: '0 1px 2px rgba(181, 181, 181, 0.58)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  width: '100%'
                }}>
                  PROJECTS 18+
                </div>
              </div>

              {/* EXIT Liquid Glass Button */}
              <div className="liquid-glass-button" style={{
                position: 'relative',
                display: 'flex',
                fontWeight: '600',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 0 16px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2)',
                borderRadius: 'clamp(0.8rem, 2vw, 1.5rem)',
                cursor: 'pointer',
                minWidth: 'clamp(60px, 12vw, 100px)'
              }}
              onClick={handleLogout}
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
                <div className="button-text" style={{
                  zIndex: 3,
                  color: '#fff',
                  padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 20px)',
                  fontSize: 'clamp(10px, 2.5vw, 14px)',
                  fontWeight: '600',
                  letterSpacing: 'clamp(0.5px, 0.2vw, 1px)',
                  fontFamily: "'BIOSFont', monospace",
                  textShadow: '0 1px 2px rgba(181, 181, 181, 0.58)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  width: '100%'
                }}>
                  EXIT
                </div>
              </div>
            </div>
        </div>
      </header>

      {/* Interactive Gallery - ОСНОВНАЯ ГАЛЕРЕЯ */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <InteractiveGallery photos={portfolioPhotos} />
      </main>

      {/* Footer */}
      <footer style={{ 
        background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(20,20,20,0.5) 50%, rgba(0,0,0,0.4) 100%)',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: 'clamp(15px, 3vw, 25px) clamp(15px, 3vw, 25px) clamp(10px, 2vw, 20px)',
        marginTop: 'clamp(15px, 3vw, 25px)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Liquid Glass Background Effects */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(255,255,255,0.02) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }} />
        
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: 'clamp(8px, 2vw, 15px)',
            marginBottom: 'clamp(8px, 2vw, 15px)',
            fontFamily: "'BIOSFont', monospace",
            justifyItems: 'center'
          }}>
            {/* Contact Info */}
            <div>
              <h3 style={{ 
                fontSize: 'clamp(11px, 2vw, 14px)', 
                fontWeight: '400', 
                color: '#fff', 
                margin: '0 0 clamp(4px, 1vw, 6px) 0',
                letterSpacing: '1px',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                textAlign: 'center'
              }}>
                CONTACT US
              </h3>
              <div style={{ textAlign: 'center' }}>
                <p style={{ 
                  fontSize: 'clamp(8px, 1.5vw, 10px)', 
                  color: '#ccc', 
                  margin: '0 0 clamp(2px, 0.5vw, 3px) 0',
                  fontWeight: '300',
                  fontFamily: "'BIOSFont', monospace",
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  EMAIL
                </p>
                <a 
                  href="mailto:MAKSVOVK259YANDEX.RU" 
                  style={{ 
                    fontSize: 'clamp(9px, 1.8vw, 11px)', 
                    color: '#fff', 
                    textDecoration: 'none',
                    fontWeight: '400',
                    letterSpacing: '0.5px',
                    display: 'block',
                    padding: 'clamp(3px, 1vw, 4px) clamp(6px, 1.5vw, 8px)',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 1px 4px rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  MAKSVOVK259YANDEX.RU
                </a>
              </div>
            </div>

            {/* Social Networks */}
            <div>
              <h3 style={{ 
                fontSize: 'clamp(11px, 2vw, 14px)', 
                fontWeight: '400', 
                color: '#fff', 
                margin: '0 0 clamp(4px, 1vw, 6px) 0',
                letterSpacing: '1px',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                textAlign: 'center'
              }}>
                SOCIAL NETWORKS
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3px, 1vw, 4px)' }}>
                <a 
                  href="https://www.instagram.com/shtormixx/" 
                  style={{ 
                    fontSize: 'clamp(9px, 1.8vw, 11px)', 
                    color: '#fff', 
                    textDecoration: 'none',
                    fontWeight: '400',
                    letterSpacing: '0.5px',
                    display: 'block',
                    padding: 'clamp(2px, 0.8vw, 3px) clamp(4px, 1.5vw, 6px)',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 1px 4px rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  INSTAGRAM
                </a>
                <a 
                  href="https://t.me/script_huipt"
                  style={{ 
                    fontSize: 'clamp(9px, 1.8vw, 11px)', 
                    color: '#fff', 
                    textDecoration: 'none',
                    fontWeight: '400',
                    letterSpacing: '0.5px',
                    display: 'block',
                    padding: 'clamp(2px, 0.8vw, 3px) clamp(4px, 1.5vw, 6px)',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '4px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 1px 4px rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  TELEGRAM
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 style={{ 
                fontSize: 'clamp(11px, 2vw, 14px)', 
                fontWeight: '400', 
                color: '#fff', 
                margin: '0 0 clamp(4px, 1vw, 6px) 0',
                letterSpacing: '1px',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                textAlign: 'center'
              }}>
                LOCATION
              </h3>
              <div style={{ textAlign: 'center' }}>
                <p style={{ 
                  fontSize: 'clamp(9px, 1.8vw, 11px)', 
                  color: '#fff', 
                  margin: '0 0 clamp(2px, 0.5vw, 3px) 0',
                  fontWeight: '400',
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}>
                  WORLDWIDE PEOPLE ARE WELCOME
                </p>
                <p style={{ 
                  fontSize: 'clamp(8px, 1.5vw, 10px)', 
                  color: '#ccc', 
                  margin: '0',
                  fontWeight: '300',
                  fontStyle: 'italic',
                  letterSpacing: '0.5px'
                }}>
                  REMOTE WORK ALL OVER THE WORLD
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div style={{ 
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: 'clamp(8px, 1.5vw, 12px)',
            padding: 'clamp(4px, 1.5vw, 8px) clamp(15px, 3vw, 20px)',
            border: '1px solid rgba(255,255,255,0.03)',
            boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
          }}>
            <p style={{ 
              fontSize: 'clamp(8px, 1.5vw, 10px)', 
              color: '#fff', 
              margin: 'clamp(2px, 0.5vw, 3px) 0',
              fontWeight: '400',
              fontFamily: "'BIOSFont', monospace",
              textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              letterSpacing: '1px'
            }}>
              © 2034 ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>

      {/* Photo Modal */}
    </div>
  );
}
