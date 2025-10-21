
import { useState, useEffect } from 'react';
import { DesignSystem } from './components/pages';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
}

function TodosList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/todos');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setTodos(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch todos');
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Todos from Backend</h1>
      {loading && <p>Loading...</p>}@
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && (
        <>
          <p>Found {todos.length} todos:</p>
          <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', overflow: 'auto' }}>
            {JSON.stringify(todos, null, 2)}
          </pre>
        </>
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
