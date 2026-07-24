import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseClasses = 'font-medium rounded-md inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-dark-maroon text-white hover:bg-gold hover:text-dark-maroon focus:ring-gold',
    secondary: 'bg-gold text-dark-maroon hover:bg-dark-maroon hover:text-white focus:ring-gold focus:ring-opacity-50',
    outline: 'bg-transparent border border-gold text-dark-maroon hover:bg-gold hover:text-dark-maroon focus:ring-gold focus:ring-opacity-50',
  };
  
  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;