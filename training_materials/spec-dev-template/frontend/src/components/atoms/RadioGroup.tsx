import React from 'react';

interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  options: RadioOption[];
  label?: string;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ options, label, name, value, onChange, className = '', ...props }, ref) => {
    return (
      <div ref={ref} className="space-y-2" {...props}>
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className={`space-y-2 ${className}`}>
          {options.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <input
                type="radio"
                name={name}
                value={option.value}
                id={`radio-${name}-${option.value}`}
                disabled={option.disabled}
                checked={value === option.value}
                onChange={(e) => onChange?.(e.target.value)}
                className="
                  w-5 h-5 text-blue-600 border-2 border-gray-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-colors duration-200 cursor-pointer
                "
              />
              <label
                htmlFor={`radio-${name}-${option.value}`}
                className="text-sm font-medium text-gray-700 cursor-pointer select-none"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
