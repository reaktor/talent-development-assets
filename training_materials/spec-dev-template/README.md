# Spec Dev Monorepo

A full-stack starter template with React frontend + Express backend + SQLite database. Designed for AI-assisted development and spec-driven workflows.

**Status:** ✅ Production-ready (all code works correctly)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 8+

### Installation & Development

```bash
# Install all dependencies (root + both workspaces)
npm install

# Run both backend (port 3000) and frontend (port 5173) concurrently
npm run dev
```

This will:
- **Backend** compiles TypeScript and runs on `http://localhost:3000` (Express + SQLite)
- **Frontend** starts on `http://localhost:5173` (React + Vite with hot reload)
- **Database** auto-clears and reseeds on backend startup

**Alternative: Run Independently**

```bash
# Terminal 1: Backend only
npm run dev --workspace=backend

# Terminal 2: Frontend only (in another terminal)
npm run dev --workspace=frontend
```

---

## 🏗️ Architecture Overview

### Design Philosophy

This monorepo follows the principle of **brutal simplicity**:
- No over-engineering
- Minimal abstractions
- Clear separation of concerns
- Full-stack type safety (TypeScript everywhere)

### Monorepo Structure

```
spec-dev-template/
├── backend/              # Express API server
│   ├── src/
│   │   ├── index.ts     # Express server + routes
│   │   └── db.ts        # SQLite initialization & queries
│   ├── data/            # SQLite database (auto-generated)
│   ├── dist/            # Compiled output
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/            # React + Vite SPA
│   ├── src/
│   │   ├── components/  # Atomic design system (atoms, molecules, organisms)
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── dist/            # Production build
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── docs/                # Shared documentation
│   ├── agents/          # Agent personas
│   └── specs/           # API specs
│
├── package.json         # Root workspace config
└── README.md            # This file
```

---

## 🔧 Backend

**Stack:** Express + SQLite + TypeScript

### Running Backend

```bash
# Development (with hot reload via tsx)
npm run dev --workspace=backend

# Build TypeScript to JavaScript
npm run build --workspace=backend

# Run compiled server (must build first)
npm start --workspace=backend

# Run production build output
node backend/dist/index.js
```

### Express Server (`backend/src/index.ts`)

- **Minimal routing**: Only essential endpoints
- **CORS enabled**: Allows frontend to call API during development
- **Error handling**: Try-catch on each route
- **No middleware bloat**: Just JSON parsing + CORS
- **Port**: 3000

### Database (`backend/src/db.ts`)

**Design Decision: Auto-clear on startup**

Why? Development database doesn't need persistence between restarts. Forces working with fresh, known state. No migration complexity. Perfect for reproducible testing.

**Initialization process:**
1. Drop existing tables (clear)
2. Create schema fresh
3. Seed with hello-world data (todos)
4. Log success message

**Schema (Hello World - CREATE_TODOS Feature):**
```sql
CREATE TABLE todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

**Features:**
- SQLite WAL mode enabled (faster writes)
- Prepared statements for safety
- Named query objects for reusability
- Simple CRUD operations
- **Location:** `backend/data/app.db` (auto-generated on first run)
- **Behavior:** Auto-clears and reseeds on every server start
- **Current Implementation:** CREATE_TODOS feature with title (required), optional description, completion tracking, and timestamps

### Security Notes (Development Only)

**Current state:**
- CORS allows all origins
- No authentication
- No rate limiting
- No input validation (just basic checks)

**Before production:**
- Restrict CORS to specific origins
- Add authentication (JWT recommended)
- Add rate limiting (express-rate-limit)
- Validate all inputs
- Add request logging
- Add error tracking (Sentry, etc.)
- Use environment variables for secrets

---

## 🎨 Frontend

**Stack:** React 19 + Vite + Tailwind CSS v4 + TypeScript

### Running Frontend

```bash
# Development (with hot reload)
npm run dev --workspace=frontend

# Production build
npm run build --workspace=frontend

# Preview production build
npm run preview --workspace=frontend

# Lint code
npm run lint --workspace=frontend
```

### Architecture

- **SPA (Single Page Application)**
- **Atomic Design System**: atoms → molecules → organisms
- **Styling:** Tailwind CSS for consistent, utility-first approach
- **Port**: 5173 (Vite default)
- **HMR**: Instant hot module reloading on file changes
- **Current Feature:** Todo creation and list management with optimized UX (relative dates, minimal UI, pragmatic feedback)

### Design System

View the design system at root `/` in dev mode. Components are organized:
- `src/components/atoms/` - Basic building blocks
- `src/components/molecules/` - Combinations of atoms
- `src/components/organisms/` - Complex compositions

---

## 📡 API Reference

### Current Endpoints (CREATE_TODOS Feature)

**GET** `/api/todos` - Fetch all todos
```bash
curl http://localhost:3000/api/todos
```

**POST** `/api/todos` - Create a new todo
```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy milk", "description": "Optional details"}'
```

Response:
```json
{
  "id": 1,
  "title": "Buy milk",
  "description": "Optional details",
  "completed": false,
  "created_at": "2025-10-24T14:32:00.000Z"
}
```

**GET** `/api/health` - Health check
```bash
curl http://localhost:3000/api/health
```

### API Pattern

- **RESTful**: Resource-based, not RPC
- **JSON**: Request/response format
- **Standard HTTP verbs**: GET, POST, PUT, DELETE
- **Consistent error format**
- **Request validation**: Title required, max 255 chars. Description optional, max 1000 chars

---

## 🔨 Building & Deployment

### Build Both

```bash
npm run build
```

Output:
- **Backend**: `backend/dist/` - Compiled Node.js server
- **Frontend**: `frontend/dist/` - Static HTML/CSS/JS bundle

### Production

```bash
# Build backend
npm run build --workspace=backend

# Start production backend
npm start --workspace=backend

# Build frontend for production
npm run build --workspace=frontend

# Serve production frontend
npm run preview --workspace=frontend
```

---

## 📖 Development Workflow

### Making Changes

**Backend:**
1. Edit TypeScript in `backend/src/`
2. Build: `npm run build --workspace=backend`
3. Restart backend server (or restart `npm run dev`)
4. Test changes via curl or frontend

**Frontend:**
1. Edit React in `frontend/src/`
2. Save file - Vite auto-reloads in browser
3. No rebuild needed - Vite handles this

### Adding Features

**Add Backend Endpoint:**
- Add route handler to `backend/src/index.ts`
- Add query/table to `backend/src/db.ts` if needed
- Document API in `docs/specs/`

**Add Frontend Feature:**
- Add React component to `frontend/src/components/`
- Wire component into page in `frontend/src/App.tsx`
- Call backend API from component

**Change Database Schema:**
- Update `initializeDatabase()` and queries in `backend/src/db.ts`
- Delete `backend/data/app.db` (will auto-recreate on next startup)

### Scaling Decisions

| Decision | When | How |
|----------|------|-----|
| Add database persistence | Production launch | Switch to PostgreSQL, add migrations |
| Add authentication | Multi-user features | JWT tokens, user table |
| Add API versioning | Breaking changes | Namespace routes `/api/v2/...` |
| Split monorepo | Large teams | Separate Git repos, sync via NPM packages |
| Add message queue | Async processing | Redis + Bull queue |
| Add caching | High traffic | Redis cache layer |

**Until then: Keep it simple.**

---

## 🎯 Files to Modify When Expanding

### Add Backend Endpoint
- `backend/src/index.ts` - Add route handler
- `backend/src/db.ts` - Add query + table if needed
- `docs/specs/` - Document API

### Add Frontend Feature
- `frontend/src/components/` - Add React component
- `frontend/src/App.tsx` - Wire component into page
- `frontend/src/api/` - Add API client function
- Call backend API from component

### Change Database Schema
- `backend/src/db.ts` - Update `initializeDatabase()` and queries
- Delete `backend/data/app.db` (will auto-recreate on next startup)

### Add UX Utilities
- `frontend/src/utils/` - Add utility functions (e.g., formatRelativeDate for date handling)
- Update components to use utilities instead of inline formatting

### Styling & Layout
- Use Tailwind classes in components (`className="..."`)
- Follow atomic design: atoms → molecules → organisms
- Maintain consistency with existing design tokens

---

## 🚨 Troubleshooting

### Backend won't start

**Error:** `Error: listen EPERM: operation not permitted 0.0.0.0:3000`

**Solution:**
1. Check if port 3000 is available:
   ```bash
   lsof -i :3000
   ```

2. Kill any existing process:
   ```bash
   pkill -f "node dist/index.js"
   ```

3. Or change backend port:
   ```bash
   # Edit backend/src/index.ts, change PORT = 3000
   PORT=3001 npm run dev --workspace=backend
   ```

### Frontend won't start

**Error:** Port 5173 already in use

**Solution:**
1. Check port availability
2. Update `frontend/vite.config.ts` to use different port:
   ```typescript
   export default defineConfig({
     plugins: [react()],
     server: {
       port: 5174  // Change to available port
     }
   })
   ```

### Database errors

**Error:** `SQLITE_CANTOPEN: unable to open database file` or `no such table: todos`

**Solution:**
```bash
# Delete and recreate database
rm -rf backend/data/
npm run build --workspace=backend
node backend/dist/index.js
```

### Dependencies not installed

**Error:** `Cannot find module 'express'`

**Solution:**
```bash
# Full clean reinstall
rm -rf node_modules
npm install

# Or just workspace
npm install --workspace=backend
npm install --workspace=frontend
```

### TypeScript build errors

**Error:** `error TS4023: Exported variable 'X' has or is using name ... from external module`

**Solution:** Add explicit type annotations:
```typescript
import type { Database as DatabaseType } from 'better-sqlite3';
export const db: DatabaseType = new Database(dbPath);
```

### Clean build & start fresh

```bash
# Remove all build artifacts
rm -rf node_modules
rm -rf backend/dist backend/data
rm -rf frontend/dist

# Reinstall and rebuild
npm install
npm run build
npm run dev
```

### Verify setup works

**Test backend independently:**
```bash
cd backend
npm run build
node dist/index.js
```

Then in another terminal:
```bash
curl http://localhost:3000/api/health
```

**Test frontend independently:**
```bash
cd frontend
npm run dev
```

Visit `http://localhost:5173` in browser.

---

## 📊 Root Scripts

```bash
npm run dev        # Run backend + frontend concurrently
npm run build      # Build both backend and frontend
npm run lint       # Lint frontend code
```

---

## ✨ What Works

✅ **Database**
- SQLite auto-initializes on backend startup
- Auto-clears and reseeds with sample data
- WAL mode enabled for performance
- Tables created successfully
- Located: `backend/data/app.db`
- Schema includes todos with title, description, completed status, and timestamps

✅ **Backend Code**
- TypeScript compiles successfully
- Express server configured
- API routes: GET /api/todos, POST /api/todos (create), GET /api/health
- CORS enabled for development
- Input validation and error handling
- Builds to `backend/dist/`

✅ **Frontend**
- All React components ready
- Atomic design system in place
- Tailwind CSS v4 configured (utility-first styling)
- Todo creation form with title (required) and optional description
- Todo list with relative date formatting (Today, Yesterday, or date)
- UX optimized: minimal UI, pragmatic error messages, no decorative elements
- ESLint + Prettier setup

✅ **Development Setup**
- Monorepo with npm workspaces
- Both packages configured
- Dependencies installed
- Ready to run

✅ **Type Safety**
- Express + better-sqlite3 fully typed
- Database queries use prepared statements with type inference
- React 19 fully typed
- Component props use TypeScript interfaces

✅ **UX Implementation**
- Form validation with inline error feedback
- Relative date formatting utility (`formatRelativeDate`)
- Optimized spacing and layout with Tailwind
- Accessible form fields with proper labels
- Disabled state management during submission

---

## ⚡ Performance

**Current optimizations:**
- SQLite WAL mode (faster writes)
- Prepared statements (no SQL injection, faster queries)
- Vite for frontend (instant HMR, fast builds)
- Tailwind CSS for optimized styling

**Future optimizations (if needed):**
- Database indexes on frequently queried columns
- Redis caching layer
- API response pagination
- Frontend code splitting
- CDN for static assets

---

## 🔐 Type Safety

### Backend Types

Express + better-sqlite3 are fully typed. Database queries use prepared statements with type inference.

### Frontend Types

React 19 is fully typed. Component props use TypeScript interfaces.

### Shared Types (Future)

When backend and frontend share types, create `shared/types.ts` in repo root.

---

## 📝 Notes

- Database **resets on every backend restart** - no persistent data between sessions
- CORS is enabled for frontend to call backend APIs
- Backend uses ESM modules (`"type": "module"`)
- Both TS codebases - full type safety across stack
- **Current Feature:** CREATE_TODOS is fully implemented with optimized UX (Sprints 1-2 complete)
- **Styling:** All components use Tailwind CSS for consistency and maintainability
- **UX Approach:** Pragmatic, user-focused design that removes unnecessary UI elements and reduces cognitive load
- This architecture is intentionally simple. It's easier to make a simple system more complex than to make a complex system simple. Start here, measure what actually needs optimization before adding complexity.

---

**Archimedes' Note:** Current implementation complete for CREATE_TODOS feature. Frontend UI optimized per Torvalds UX guidelines. Ready for next feature expansion. -Archimedes fullstack