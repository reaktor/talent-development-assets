import React from 'react';
import { Button } from '../atoms';
import { Card } from '../molecules';

interface FormProps {
  title: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  submitText?: string;
  cancelText?: string;
  onCancel?: () => void;
}

const Form: React.FC<FormProps> = ({ 
  title, 
  children, 
  onSubmit,
  submitText = 'Save',
  cancelText = 'Cancel',
  onCancel
}) => {
  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <form onSubmit={onSubmit}>
        {children}
        <div className="flex gap-4 mt-6">
          <Button type="submit" variant="primary">
            {submitText}
          </Button>
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel}>
              {cancelText}
            </Button>
          )}
        </div>
      </form>
    </Card>
  );
};

export default Form;