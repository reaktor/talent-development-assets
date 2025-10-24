## 1. Feature Overview

**Feature Name:** Create Todos

**Feature Description:** A straightforward todo creation system enabling users to add new tasks with a title and optional description. Todos enter the system in "Todo" status, persist to the database, and display immediately in the user's todo list. No complexity, no overengineering.

**Goal:** Enable users to create and persist todos with minimal friction. Nothing more.

## 2. Functional requirements (User Behaviors)

```gherkin
Feature: Create Todos

Scenario: User Creates a Todo
  Given I am viewing the todo list
  When I enter a title "Buy milk"
  And I click "Create"
  Then a new todo appears at the top of my list
  And the todo has status "Todo"

Scenario: Todo with Description
  Given I am viewing the todo list
  When I enter title "Review PR"
  And I enter description "Check backend changes"
  And I click "Create"
  Then the todo is created with both title and description
  And the todo displays in the list with full details

Scenario: Empty Title Validation
  Given I am viewing the todo list
  When I leave title empty
  And I click "Create"
  Then I see an error "Title is required"
  And no todo is created

Scenario: Todo Persists After Reload
  Given I have created a todo "Fix bug"
  When I refresh the page
  Then the todo "Fix bug" still appears in my list

Scenario: Multiple Todos in Sequence
  Given I am viewing the todo list
  When I create todo "Task 1"
  And I create todo "Task 2"
  And I create todo "Task 3"
  Then all three todos appear in the list
  And newest todo appears at the top
```

## 3. Technical requirements

### 3.1 Backend Functionality

**Todo Creation:** Accepts POST request with title and optional description. Validates input, generates unique ID, sets timestamp and "Todo" status, stores in database.

**Validation requirements:**
- Title is required and must be non-empty string
- Title max length 255 characters
- Description optional, max length 1000 characters
- Input sanitization for XSS prevention
- Return 400 if title missing, 201 if successful

### 3.2 Frontend Functionality

**UI Components:**
- **TodoCreateForm:** Input field for title, optional description textarea, create button
- **TodoCreateInput:** Minimal input component with validation feedback
- **TodoList:** Display created todos with latest at top

**Associated Behavior:** Form clears after successful creation, shows error state on validation failure, disables button while request in flight.

### 3.3 Database Design

**Todos Table:**
```sql
CREATE TABLE todos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

**Index:** `created_at DESC` for retrieving latest todos first.

## 4. Manual Verification Protocol

### Test Case 1: Basic Todo Creation
1. Open the todo list page
2. Enter title "Buy milk"
3. Click Create
4. Verify todo appears in list with status "Todo"
5. Verify confirmation message displays

**Expected Result:** Todo created successfully and visible immediately.

### Test Case 2: Todo Persistence
1. Create a todo "Fix bug"
2. Refresh the page (browser reload)
3. Verify the todo still exists in the list

**Expected Result:** Data persists to database correctly.

### Test Case 3: Validation
1. Leave title field empty
2. Click Create
3. Verify error message "Title is required"
4. Verify no todo is created

**Expected Result:** Invalid input properly rejected.

### Test Case 4: Multiple Creations
1. Create "Task A"
2. Create "Task B"
3. Create "Task C"
4. Verify all three exist, newest at top

**Expected Result:** Multiple todos created in sequence, correct ordering.

## 5. Implementation Plan

### Step 1: Define TypeScript Types
**Location:** `backend/src/db.ts`
- [ ] Define `Todo` type with id, title, description, completed, created_at
- [ ] Define `CreateTodoRequest` type for API payload (title, description)

### Step 2: Define API Endpoint
**Location:** `backend/src/index.ts`
- [ ] POST /api/todos endpoint
- [ ] Accept title (required), description (optional)
- [ ] Return 201 with created todo object
- [ ] Return 400 if title missing/empty

### Step 3: Implement Database Operations
**Location:** `backend/src/db.ts`
- [ ] Create insert query for todos table
- [ ] Use prepared statement with parameter binding
- [ ] Return full todo object after insertion
- [ ] Log insertion to console

### Step 4: Implement Server Endpoint Handler
**Location:** `backend/src/index.ts`
- [ ] Parse request body
- [ ] Validate title (required, non-empty)
- [ ] Sanitize inputs
- [ ] Call database insert function
- [ ] Return created todo with 201 status

### Step 5: Implement Frontend Form Component
**Location:** `frontend/src/components/molecules/TodoForm.tsx`
- [ ] Create form with title input field
- [ ] Add optional description textarea
- [ ] Create submit button "Create"
- [ ] Clear form after successful submission
- [ ] Show validation error for empty title

### Step 6: Connect Frontend to Backend
**Location:** `frontend/src/App.tsx` or hook
- [ ] POST to /api/todos on form submit
- [ ] Handle response and add to todo list
- [ ] Show error message on failure
- [ ] Disable button during request
- [ ] Refresh todo list after creation

### Step 7: Display Created Todos
**Location:** `frontend/src/App.tsx`
- [ ] Fetch todos on page load
- [ ] Display in list with newest first
- [ ] Show title, creation time, status

### Step 8: Testing & Validation
- [ ] Create todo via form, verify in database
- [ ] Test empty title validation
- [ ] Test persistence after page reload
- [ ] Test multiple creations in sequence
- [ ] Test concurrent requests
- [ ] Verify XSS protection with special characters

---

**Archimedes' Note:** Simple. No notifications, no complex state management, no real-time sync. User creates todo, it appears. That's it. Database persists it. Reload the page, it's still there. If you need more complexity later, add it then. Right now, add nothing extra. -Archimedes fullstack
