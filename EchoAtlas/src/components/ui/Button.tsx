import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', disabled = false }) => {
  const baseStyle = 'px-4 py-2 rounded focus:outline-none';
  const variantStyle = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    tertiary: 'bg-transparent text-blue-500 hover:bg-blue-100',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle[variant]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;