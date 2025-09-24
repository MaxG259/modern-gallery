import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Gallery from '../components/Gallery';
import NotFound from '../components/NotFound';
import { Loading } from '../components/Loading';
import { AnimatedPage } from '../components/animations/AnimatedPage';
import { useAuth } from '../contexts/useAuth';
import './App.css';

// Компонент для защиты маршрутов
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <div className="protected-route">{children}</div>;
}

export default function App() {
  return (
    <div className="app-container">
      <div className="routes-container">
        <Routes>
          <Route path="/login" element={
            <AnimatedPage animation="slide-down">
              <Login />
            </AnimatedPage>
          } />
          <Route path="/gallery" element={
            <ProtectedRoute>
              <AnimatedPage animation="slide-down">
                <Gallery />
              </AnimatedPage>
            </ProtectedRoute>
          } />
          <Route path="/loading" element={
            <AnimatedPage animation="loading-slide">
              <Loading targetPath="/gallery" message="ENTER THE SYSTEM" />
            </AnimatedPage>
          } />
          <Route path="/loading-projects" element={
            <AnimatedPage animation="loading-slide">
              <Loading targetPath="/несуществующий-путь-для-404" message="LOADING 18+" />
            </AnimatedPage>
          } />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={
            <AnimatedPage animation="slide-up">
              <NotFound />
            </AnimatedPage>
          } />
        </Routes>
      </div>
    </div>
  );
}
