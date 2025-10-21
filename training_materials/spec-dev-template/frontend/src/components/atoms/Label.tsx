import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', required = false, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`
          text-sm font-medium text-gray-700
          peer-disabled:opacity-50
          ${className}
        `}
        {...props}
      >
        {children}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    );
  }
);

Label.displayName = 'Label';

export default Label;