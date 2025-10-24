
import { useState, useEffect } from 'react';
import { DesignSystem } from './components/pages';
import { TodoForm } from './components/molecules';
import { fetchTodos, createTodo, type Todo } from './api/todos';

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
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>My Todos</h1>
      
      <TodoForm 
        onSubmit={handleCreateTodo}
        isLoading={loading}
      />

      {loading && todos.length === 0 && <p>Loading todos...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {todos.length === 0 && !loading && (
        <p style={{ color: '#666', fontStyle: 'italic' }}>No todos yet. Create one to get started!</p>
      )}

      {todos.length > 0 && (
        <div>
          <p style={{ color: '#666', marginBottom: '16px' }}>
            {todos.length} {todos.length === 1 ? 'todo' : 'todos'}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {todos.map((todo) => (
              <div
                key={todo.id}
                style={{
                  padding: '12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  backgroundColor: todo.completed ? '#f3f4f6' : '#fff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    readOnly
                    style={{ marginTop: '4px' }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        margin: '0 0 8px 0',
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#9ca3af' : '#1f2937',
                      }}
                    >
                      {todo.title}
                    </h3>
                    {todo.description && (
                      <p
                        style={{
                          margin: '0 0 8px 0',
                          color: '#6b7280',
                          fontSize: '14px',
                        }}
                      >
                        {todo.description}
                      </p>
                    )}
                    <p
                      style={{
                        margin: '0',
                        fontSize: '12px',
                        color: '#9ca3af',
                      }}
                    >
                      {new Date(todo.created_at).toLocaleDateString()} at{' '}
                      {new Date(todo.created_at).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [view, setView] = useState<'design' | 'todos'>('todos');

  return (
    <div>
      <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <button onClick={() => setView('todos')} style={{ marginRight: '10px', fontWeight: view === 'todos' ? 'bold' : 'normal' }}>
          Todos
        </button>
        <button onClick={() => setView('design')} style={{ fontWeight: view === 'design' ? 'bold' : 'normal' }}>
          Design System
        </button>
      </div>
      {view === 'todos' && <TodosList />}
      {view === 'design' && <DesignSystem />}
    </div>
  );
}

export default App;
