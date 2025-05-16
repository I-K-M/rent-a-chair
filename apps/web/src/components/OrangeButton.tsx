import React from 'react';

interface OrangeButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function OrangeButton({ 
  children, 
  onClick, 
  className = '', 
  disabled = false 
}: OrangeButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {children}
    </button>
  );
}