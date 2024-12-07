import React from 'react';

export const Tokenomics: React.FC = () => {
  return (
    <div className="bg-yellow-100 py-12 md:py-24 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-8 md:mb-16 text-center" style={{ fontFamily: 'Comic Sans MS' }}>
          🧀 CHEESEnomics 🧀
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto">
          <div className="bg-yellow-50 p-6 md:p-8 rounded-lg transform -rotate-1 text-center flex flex-col items-center justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-800 mb-4 md:mb-6">Supply</h3>
            <p className="text-yellow-700 text-sm md:text-base">1,000,000,000,000 $CHEESE</p>
          </div>
          
          <div className="bg-yellow-50 p-6 md:p-8 rounded-lg transform rotate-1 text-center flex flex-col items-center justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-800 mb-4 md:mb-6">Holders</h3>
            <p className="text-yellow-700 text-sm md:text-base">A Gouda Handful !</p>
          </div>
          
          <div className="bg-yellow-50 p-6 md:p-8 rounded-lg transform -rotate-2 text-center flex flex-col items-center justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-800 mb-4 md:mb-6">MarketCap</h3>
            <p className="text-yellow-700 text-sm md:text-base">A Brie-Zillion !</p>
          </div>
        </div>
      </div>
    </div>
  );
};