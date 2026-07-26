import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-[#3A5A40] text-white hover:bg-[#D2A97F] hover:text-[#3A5A40] focus:ring-[#D2A97F]',
    secondary: 'bg-[#D2A97F] text-[#3A5A40] hover:bg-[#3A5A40] hover:text-white focus:ring-[#D2A97F] focus:ring-opacity-50',
    outline: 'bg-transparent border border-[#D2A97F] text-[#D2A97F] hover:bg-[#D2A97F] hover:text-[#3A5A40] focus:ring-[#D2A97F] focus:ring-opacity-50',
  };

  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };

  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : '';

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;