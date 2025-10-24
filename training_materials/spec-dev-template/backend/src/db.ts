import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import type { Database as DatabaseType, Statement } from 'better-sqlite3';

// TypeScript Types
export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  created_at: string;
}

export interface CreateTodoRequest {
  title: string;
  description?: string;
}

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
      description TEXT,
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
  queries.createTodo = db.prepare('INSERT INTO todos (title, description, completed) VALUES (?, ?, ?) RETURNING *');
  queries.updateTodo = db.prepare('UPDATE todos SET title = ?, description = ?, completed = ? WHERE id = ? RETURNING *');
  queries.deleteTodo = db.prepare('DELETE FROM todos WHERE id = ?');

  console.log('✓ Database initialized and seeded');
}

// Database operation helpers
export function insertTodo(title: string, description: string | null): Todo {
  const todo = queries.createTodo.get(title, description, 0) as Todo;
  console.log(`✓ Todo inserted: "${todo.title}" (id: ${todo.id})`);
  return todo;
}

export function getAllTodos(): Todo[] {
  return queries.getAllTodos.all() as Todo[];
}

export function getTodoById(id: number): Todo | undefined {
  return queries.getTodoById.get(id) as Todo | undefined;
}

export function updateTodo(id: number, title: string, description: string | null, completed: boolean): Todo {
  const todo = queries.updateTodo.get(title, description, completed, id) as Todo;
  console.log(`✓ Todo updated: "${todo.title}" (id: ${todo.id})`);
  return todo;
}

export function deleteTodo(id: number): void {
  queries.deleteTodo.run(id);
  console.log(`✓ Todo deleted (id: ${id})`);
}

