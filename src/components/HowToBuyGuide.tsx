import React from 'react';
import { Wallet, ArrowRightLeft, Coins } from 'lucide-react';
import { HowToBuyStep } from './HowToBuyStep';

export const HowToBuyGuide: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Get a Solana Wallet",
      description: "Download Phantom or any other Solana wallet. Don't be a big cheese, it's easy!",
      icon: <Wallet className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      number: 2,
      title: "Buy Some SOL",
      description: "Get SOL from your favorite exchange. It's not rocket science, it's cheese science!",
      icon: <Coins className="w-6 h-6 md:w-8 md:h-8" />
    },
    {
      number: 3,
      title: "Swap for $CHEESE",
      description: "Use Raydium or Jupiter to swap SOL for $CHEESE. Easy peasy, cheesy squeezy!",
      icon: <ArrowRightLeft className="w-6 h-6 md:w-8 md:h-8" />
    }
  ];

  return (
    <div className="py-8 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-800 mb-12 md:mb-24 text-center transform -rotate-2 -mt-4 md:-mt-8">
          🧀 How to Buy $CHEESE 🧀
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {steps.map((step) => (
            <HowToBuyStep
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};