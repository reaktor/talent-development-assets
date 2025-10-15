import React from 'react';

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className = '', label, id, ...props }, ref) => {
    const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex items-center gap-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            ref={ref}
            type="checkbox"
            id={switchId}
            className="sr-only peer"
            {...props}
          />
          <div
            className={`
              w-11 h-6 bg-gray-300 rounded-full peer
              peer-checked:bg-blue-600
              peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2
              peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
              transition-colors duration-200
              after:content-[''] after:absolute after:top-[2px] after:left-[2px]
              after:bg-white after:rounded-full after:h-5 after:w-5
              after:transition-transform after:duration-200
              peer-checked:after:translate-x-5
              ${className}
            `}
          />
        </label>
        {label && (
          <label
            htmlFor={switchId}
            className="text-sm font-medium text-gray-700 cursor-pointer select-none"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;