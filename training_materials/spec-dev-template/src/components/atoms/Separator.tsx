import React from 'react';

interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
}

const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(
  ({ className = '', orientation = 'horizontal', ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={`
          bg-gray-200 border-0
          ${orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'}
          ${className}
        `}
        {...props}
      />
    );
  }
);

Separator.displayName = 'Separator';

export default Separator;