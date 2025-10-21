import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import type { Database as DatabaseType, Statement } from 'better-sqlite3';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, '../data');
const dbPath = path.join(dataDir, 'app.db');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Create database instance
export const db: DatabaseType = new Database(dbPath);
db.pragma('journal_mode = WAL');

// Query helpers - will be populated after initialization
export const queries: Record<string, Statement> = {};

// Initialize schema - called on every startup
export function initializeDatabase() {
  // Drop existing tables (clear on startup)
  db.exec('DROP TABLE IF EXISTS todos');

  // Create fresh schema
  db.exec(`
    CREATE TABLE todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      completed BOOLEAN DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Seed with hello world data
  const insert = db.prepare('INSERT INTO todos (title, completed) VALUES (?, ?)');
  insert.run('Hello from backend', 0);
  insert.run('SQLite database is working', 0);
  insert.run('This resets on every server start', 0);

  // Prepare queries after tables exist
  queries.getAllTodos = db.prepare('SELECT * FROM todos ORDER BY created_at DESC');
  queries.getTodoById = db.prepare('SELECT * FROM todos WHERE id = ?');
  queries.createTodo = db.prepare('INSERT INTO todos (title, completed) VALUES (?, ?) RETURNING *');
  queries.updateTodo = db.prepare('UPDATE todos SET title = ?, completed = ? WHERE id = ? RETURNING *');
  queries.deleteTodo = db.prepare('DELETE FROM todos WHERE id = ?');

  console.log('✓ Database initialized and seeded');
}

