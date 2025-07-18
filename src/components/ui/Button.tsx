import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer transform hover:scale-105 active:scale-95';

  const variants = {
    primary: 'bg-button-1 text-button-1 hover:bg-[#6ba3b8] hover:shadow-lg hover:shadow-blue-500/25 disabled:bg-gray-400 disabled:hover:scale-100',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-md disabled:bg-gray-100 disabled:hover:scale-100',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md disabled:border-gray-200 disabled:text-gray-400 disabled:hover:scale-100',
  };

  const sizes = {
    small: 'px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm',
    medium: 'px-4 py-2 text-sm sm:px-6 sm:py-2 sm:text-base',
    large: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg',
  };

  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-full' : ''} 
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;