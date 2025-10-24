import React, { useState } from 'react';
import { Input, Button } from '../atoms';

interface TodoFormProps {
  onSubmit: (title: string, description?: string) => Promise<void>;
  isLoading?: boolean;
}

const TodoForm: React.FC<TodoFormProps> = ({ onSubmit, isLoading = false }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate title
    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    try {
      setIsSubmitting(true);
      await onSubmit(title.trim(), description.trim() || undefined);
      
      // Clear form after successful submission
      setTitle('');
      setDescription('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create todo');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled = isSubmitting || isLoading;

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <div className="mb-4">
          <Input
            id="todo-title"
            label="Title"
            placeholder="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={isDisabled}
            aria-label="Todo title"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="todo-description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description (optional)
          </label>
          <textarea
            id="todo-description"
            placeholder="Add more details..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isDisabled}
            rows={3}
            maxLength={1000}
            className="
              w-full px-3 py-2 border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50
              transition-colors duration-200
              resize-none
            "
            aria-label="Todo description"
          />
          <p className="mt-1 text-xs text-gray-500">
            {description.length}/1000 characters
          </p>
        </div>

        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={isDisabled}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Creating...' : 'Create'}
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
