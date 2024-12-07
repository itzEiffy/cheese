import React from 'react';

interface HandDrawnButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

export const HandDrawnButton: React.FC<HandDrawnButtonProps> = ({ children, onClick, href }) => {
  const buttonProps = {
    onClick,
    className: "relative px-4 md:px-8 py-3 md:py-4 text-lg md:text-xl font-bold text-yellow-900 transform transition-transform hover:scale-105 w-full md:w-auto",
    style: {
      filter: 'url(#roughen)',
    },
  };

  const content = (
    <>
      <div className="absolute inset-0 bg-yellow-200 rotate-1" style={{ zIndex: -1 }}></div>
      <div className="absolute inset-0 bg-yellow-300 -rotate-1" style={{ zIndex: -2 }}></div>
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...buttonProps}>
        {content}
      </a>
    );
  }

  return (
    <button {...buttonProps} aria-label="Button">
      {content}
    </button>
  );
};