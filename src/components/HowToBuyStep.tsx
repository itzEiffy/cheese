import React from 'react';

interface HowToBuyStepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const HowToBuyStep: React.FC<HowToBuyStepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="relative bg-yellow-50 p-4 md:p-6 rounded-lg transform hover:-rotate-1 transition-transform mt-8">
      <div 
        className="absolute w-10 h-10 md:w-12 md:h-12 bg-yellow-300 rounded-full flex items-center justify-center transform -rotate-3 animate-wobble"
        style={{ 
          left: '50%',
          top: '-20px',
          transform: 'translateX(-50%)'
        }}
      >
        <span className="text-xl md:text-2xl font-bold text-yellow-800">{number}</span>
      </div>
      <div className="mt-6 text-center">
        <div className="flex justify-center mb-4 text-yellow-800">
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-yellow-800 mb-2">{title}</h3>
        <p className="text-sm md:text-base text-yellow-700">{description}</p>
      </div>
    </div>
  );
};