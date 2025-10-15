import React from 'react';

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showValue?: boolean;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ label, showValue = false, className = '', value, defaultValue, ...props }, ref) => {
    const currentValue = value || defaultValue || 0;

    return (
      <div className="w-full space-y-2">
        {(label || showValue) && (
          <div className="flex items-center justify-between">
            {label && (
              <label className="text-sm font-medium text-gray-700">
                {label}
              </label>
            )}
            {showValue && (
              <span className="text-sm font-medium text-gray-500">
                {currentValue}
              </span>
            )}
          </div>
        )}
        <input
          ref={ref}
          type="range"
          className={`
            w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-blue-600
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:hover:bg-blue-50
            [&::-webkit-slider-thumb]:transition-colors
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-blue-600
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:shadow-md
            [&::-moz-range-thumb]:hover:bg-blue-50
            [&::-moz-range-thumb]:transition-colors
            ${className}
          `}
          value={value}
          defaultValue={defaultValue}
          {...props}
        />
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export default Slider;