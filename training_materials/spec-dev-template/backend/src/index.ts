import express from 'express';
import { initializeDatabase, queries } from './db.js';

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

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Backend running on http://localhost:${PORT}`);
  console.log(`📚 Todos API: GET/POST http://localhost:${PORT}/api/todos`);
  console.log(`❤️  Health check: GET http://localhost:${PORT}/api/health\n`);
});

