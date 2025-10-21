import React from 'react';
import { Input } from '../atoms';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helpText?: string;
}

const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  error, 
  helpText,
  ...inputProps 
}) => {
  return (
    <div className="mb-4">
      <Input 
        label={label}
        error={error}
        {...inputProps}
      />
      {helpText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helpText}</p>
      )}
    </div>
  );
};

export default FormField;