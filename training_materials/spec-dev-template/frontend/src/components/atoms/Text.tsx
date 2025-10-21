import React from 'react';

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
type TextVariant = 'default' | 'muted' | 'danger' | 'success' | 'warning';
type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
type TextAlign = 'left' | 'center' | 'right';

interface TextProps {
  size?: TextSize;
  variant?: TextVariant;
  weight?: TextWeight;
  align?: TextAlign;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Text: React.FC<TextProps> = ({ 
  size = 'base',
  variant = 'default',
  weight = 'normal',
  align = 'left',
  children, 
  className = '',
  as: Component = 'p'
}) => {
  // Use complete class names for Tailwind to detect them
  const sizeClasses = {
    'xs': 'text-xs',
    'sm': 'text-sm',
    'base': 'text-base',
    'lg': 'text-lg',
    'xl': 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl'
  };

  const variantClasses = {
    'default': 'text-gray-900',
    'muted': 'text-gray-500',
    'danger': 'text-red-600',
    'success': 'text-green-600',
    'warning': 'text-yellow-600'
  };

  const weightClasses = {
    'normal': 'font-normal',
    'medium': 'font-medium',
    'semibold': 'font-semibold',
    'bold': 'font-bold'
  };

  const alignClasses = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
  };

  return (
    <Component 
      className={`${sizeClasses[size]} ${variantClasses[variant]} ${weightClasses[weight]} ${alignClasses[align]} ${className}`.trim()}
    >
      {children}
    </Component>
  );
};

export default Text;