import React from 'react';
import { Rocket } from 'lucide-react';
import { HandDrawnButton } from './HandDrawnButton';
import { MoonCheese, CheeseLogo } from './CheeseIllustrations';
import { TokenAddress } from './TokenAddress';
import { EXTERNAL_LINKS } from '../config/links';

export const Hero: React.FC = () => {
  return (
    <div className="relative z-10">
      <div className="container mx-auto px-4 py-12 md:py-24 text-center">
        <div className="flex justify-center mb-8 md:mb-16">
          <div className="w-24 md:w-32">
            <CheeseLogo />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-800 mb-6 md:mb-12" style={{ fontFamily: 'Comic Sans MS' }}>
          The Moon is made of $CHEESE
        </h1>
        
        <p className="text-xl md:text-2xl text-yellow-700 mb-8 md:mb-16 max-w-2xl mx-auto" style={{ fontFamily: 'Comic Sans MS' }}>
          Cheese loves cheese, but cheese cheesed off cheese by stealing cheese's cheese 🧀
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center mb-12 md:mb-24">
          <HandDrawnButton href={EXTERNAL_LINKS.BUY_CHEESE}>
            <span className="flex items-center gap-2">
              Buy $CHEESE <Rocket className="inline-block" />
            </span>
          </HandDrawnButton>
          
          <HandDrawnButton href={EXTERNAL_LINKS.TWITTER}>
            Join Community
          </HandDrawnButton>
        </div>

        <div className="flex justify-center mb-8 md:mb-16">
          <div className="w-48 md:w-64">
            <MoonCheese />
          </div>
        </div>

        <div className="mb-12 md:mb-24">
          <TokenAddress />
        </div>
      </div>
    </div>
  );
};