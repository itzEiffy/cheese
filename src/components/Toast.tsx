import React from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  position: { x: number; y: number } | null;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, position }) => {
  if (!isVisible || !position) return null;

  return (
    <div 
      className="fixed bg-yellow-100 border-2 border-yellow-300 text-yellow-800 px-3 md:px-4 py-2 rounded-lg shadow-lg transform transition-all duration-200 z-50 text-sm md:text-base"
      style={{
        top: `${position.y + 20}px`,
        left: `${position.x}px`,
        transform: 'translate(-50%, 0)',
        animation: 'fadeInUp 0.2s ease-out'
      }}
    >
      <div className="flex items-center gap-2 whitespace-nowrap">
        <span>🧀</span>
        <p className="font-comic">{message}</p>
      </div>
    </div>
  );
};