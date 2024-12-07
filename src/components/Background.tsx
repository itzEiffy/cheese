import React from 'react';
import { CheeseLogo } from './CheeseIllustrations';

export const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 opacity-10">
      {[...Array(20)].map((_, i) => (
        <CheeseLogo key={i} />
      ))}
    </div>
  );
};