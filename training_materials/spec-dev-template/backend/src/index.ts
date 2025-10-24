import express from 'express';
import { initializeDatabase, queries, insertTodo, type CreateTodoRequest, type Todo } from './db.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Initialize database on startup
initializeDatabase();

// Routes
app.get('/api/todos', (req, res) => {
  try {
    const todos = queries.getAllTodos.all();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
});

app.post('/api/todos', (req, res) => {
  try {
    let { title, description } = req.body as CreateTodoRequest;

    // Sanitize inputs - trim whitespace
    if (typeof title === 'string') {
      title = title.trim();
    }
    if (typeof description === 'string') {
      description = description.trim();
    }

    // Validate title is required and non-empty
    if (!title || typeof title !== 'string' || title.length === 0) {
      res.status(400).json({ error: 'Title is required' });
      return;
    }

    // Validate title max length
    if (title.length > 255) {
      res.status(400).json({ error: 'Title must be less than 255 characters' });
      return;
    }

    // Validate description if provided
    if (description && typeof description !== 'string') {
      res.status(400).json({ error: 'Description must be a string' });
      return;
    }

    if (description && description.length > 1000) {
      res.status(400).json({ error: 'Description must be less than 1000 characters' });
      return;
    }

    // Convert empty string description to null
    const sanitizedDescription = description && description.length > 0 ? description : null;

    // Call database insert function with sanitized inputs
    const todo = insertTodo(title, sanitizedDescription);

    res.status(201).json(todo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Failed to create todo' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Backend running on http://localhost:${PORT}`);
  console.log(`📚 Todos API: GET/POST http://localhost:${PORT}/api/todos`);
  console.log(`❤️  Health check: GET http://localhost:${PORT}/api/health\n`);
});

