import React from 'react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Tokenomics } from './components/Tokenomics';
import { HowToBuyGuide } from './components/HowToBuyGuide';

export default function App() {
  return (
    <div className="min-h-screen bg-yellow-50 font-comic relative overflow-hidden">
      <Background />
      <Hero />
      <Tokenomics />
      
      {/* How to Buy Section */}
      <div className="py-24">
        <HowToBuyGuide />
      </div>
    </div>
  );
}