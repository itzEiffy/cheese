import React, { useState } from 'react';
import { Toast } from './Toast';

export const TokenAddress: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [toastPosition, setToastPosition] = useState<{ x: number; y: number } | null>(null);
  const tokenAddress = "CHeEsE1111111111111111111111111111111111111";

  const copyToClipboard = async (e: React.MouseEvent) => {
    await navigator.clipboard.writeText(tokenAddress);
    setToastPosition({ x: e.clientX, y: e.clientY });
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setToastPosition(null);
    }, 2000);
  };

  return (
    <div className="max-w-lg mx-auto bg-yellow-50 p-3 md:p-4 rounded-lg relative">
      <h3 className="text-lg md:text-xl text-yellow-800 mb-2 text-center font-comic">
        $CHEESE Token Address
      </h3>
      
      <div className="flex items-center justify-between gap-2 bg-white p-2 md:p-3 rounded-md">
        <code className="font-mono text-yellow-900 text-sm md:text-base overflow-x-auto whitespace-nowrap">{tokenAddress}</code>
        <button
          onClick={copyToClipboard}
          className={`text-xl md:text-2xl transform transition-transform ${copied ? 'scale-125' : 'hover:scale-110'}`}
          aria-label="Copy address"
        >
          🧀
        </button>
      </div>

      <Toast 
        message="Address copied to cheeseboard! 🧀" 
        isVisible={copied}
        position={toastPosition}
      />
    </div>
  );
};