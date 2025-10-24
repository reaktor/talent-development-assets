
import { useState, useEffect } from 'react';
import { DesignSystem } from './components/pages';
import { TodoForm } from './components/molecules';
import { fetchTodos, createTodo, type Todo } from './api/todos';
import { formatRelativeDate } from './utils/formatDate';

function TodosList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const data = await fetchTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleCreateTodo = async (title: string, description?: string) => {
    try {
      const newTodo = await createTodo({ title, description });
      // Add new todo to the beginning of the list
      setTodos([newTodo, ...todos]);
    } catch (err) {
      throw err;
    }
  };

  return (
    <div className="px-5 py-5 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Todos</h1>
      
      <TodoForm 
        onSubmit={handleCreateTodo}
        isLoading={loading}
      />

      {loading && todos.length === 0 && <p className="text-gray-600">Loading todos...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      
      {todos.length > 0 && (
        <div className="space-y-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`p-3 border rounded-lg ${
                todo.completed
                  ? 'bg-gray-100 border-gray-300'
                  : 'bg-white border-gray-200'
              }`}
            >
              <div className="flex flex-col gap-2">
                <h3
                  className={`text-base font-medium m-0 ${
                    todo.completed
                      ? 'line-through text-gray-500'
                      : 'text-gray-900'
                  }`}
                >
                  {todo.title}
                </h3>
                {todo.description && (
                  <p className="text-sm text-gray-600 m-0">
                    {todo.description}
                  </p>
                )}
                <p className="text-xs text-gray-400 m-0">
                  {formatRelativeDate(todo.created_at)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const [view, setView] = useState<'design' | 'todos'>('todos');

  return (
    <div>
      <div className="px-2.5 py-2.5 border-b border-gray-300">
        <button 
          onClick={() => setView('todos')} 
          className={`mr-2.5 font-semibold ${view === 'todos' ? 'font-bold' : 'font-normal'}`}
        >
          Todos
        </button>
        <button 
          onClick={() => setView('design')} 
          className={`font-semibold ${view === 'design' ? 'font-bold' : 'font-normal'}`}
        >
          Design System
        </button>
      </div>
      {view === 'todos' && <TodosList />}
      {view === 'design' && <DesignSystem />}
    </div>
  );
}

export default App;
