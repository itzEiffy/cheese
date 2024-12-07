import React from 'react';

export const MoonCheese = () => (
  <svg viewBox="0 0 200 200" className="w-64 h-64">
    <filter id="roughen">
      <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
    </filter>
    <circle cx="100" cy="100" r="80" fill="#ffd54f" style={{ filter: 'url(#roughen)' }} />
    <circle cx="70" cy="80" r="15" fill="#c49000" style={{ filter: 'url(#roughen)' }} />
    <circle cx="120" cy="90" r="12" fill="#c49000" style={{ filter: 'url(#roughen)' }} />
    <circle cx="90" cy="130" r="18" fill="#c49000" style={{ filter: 'url(#roughen)' }} />
  </svg>
);

export const CheeseLogo = () => (
  <svg viewBox="0 0 100 100" className="w-32 h-32">
    <path
      d="M10,70 Q50,20 90,70 L90,90 L10,90 Z"
      fill="#ffd54f"
      stroke="#000"
      strokeWidth="2"
      style={{ filter: 'url(#roughen)' }}
    />
    <circle cx="30" cy="50" r="5" fill="#c49000" />
    <circle cx="60" cy="60" r="4" fill="#c49000" />
    <circle cx="45" cy="75" r="6" fill="#c49000" />
  </svg>
);