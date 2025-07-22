import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

function Button({ children, className = '' }: ButtonProps) {
  return (
    <button
      type="submit"
      className={`flex justify-center rounded-md bg-white px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;