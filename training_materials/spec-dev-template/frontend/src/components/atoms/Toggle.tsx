import React from 'react';

interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ variant = 'default', size = 'md', pressed = false, onPressedChange, className = '', children, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onPressedChange?.(!pressed);
      onClick?.(e);
    };

    const baseClasses = `
      inline-flex items-center justify-center rounded-lg font-medium
      transition-colors duration-200
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `;

    const variantClasses = {
      default: `
        bg-transparent text-gray-700
        hover:bg-gray-100
        ${pressed ? 'bg-gray-200 text-gray-900' : ''}
      `,
      outline: `
        border-2 bg-transparent text-gray-700
        hover:bg-gray-50
        ${pressed ? 'bg-gray-100 border-gray-400' : 'border-gray-300'}
      `
    };

    const sizeClasses = {
      sm: 'h-8 px-2.5 text-sm gap-1',
      md: 'h-10 px-3 text-base gap-1.5',
      lg: 'h-12 px-4 text-lg gap-2'
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={pressed}
        onClick={handleClick}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Toggle.displayName = 'Toggle';

export default Toggle;
