import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-semibold py-3 px-6 rounded-md transition-colors duration-200 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white',
    secondary: 'bg-secondary hover:bg-secondary-dark text-primary',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
