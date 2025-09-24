import React from 'react';
import './PageAnimations.css';

interface AnimatedPageProps {
  children: React.ReactNode;
  animation?: 'slide-down' | 'slide-up' | 'loading-slide' | 'wave';
  className?: string;
}

export const AnimatedPage: React.FC<AnimatedPageProps> = ({ 
  children, 
  animation = 'slide-down',
  className = ''
}) => {
  return (
    <div className={`page-wrapper ${animation} ${className}`}>
      {children}
    </div>
  );
};