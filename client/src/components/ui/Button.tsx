import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

function Button({ children, className = '', type = 'button', disabled = false }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`flex justify-center rounded-md bg-white px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;