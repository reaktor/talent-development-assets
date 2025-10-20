# Spec Dev Template

A starter repo for AI-assisted coding with agentic development tools. Follows best practices like Kiro, spec-kit and common sense.

## Features

- **React 19** with TypeScript
- **Vite** for fast development
- **Tailwind CSS v4** for utility-first styling
- **Atomic Design System** (atoms, molecules, organisms)
- **i18n** internationalization
- **ESLint & Prettier** for code quality

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the design system.

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic UI primitives
│   ├── molecules/      # Composite components
│   ├── organisms/      # Complex components
│   ├── pages/          # Page components
│   └── templates/      # Layout templates
└── docs/               # Agent documentation and specs
```

## Component Library

### Atoms
Avatar, Badge, Button, Checkbox, Input, Label, RadioGroup, Select, Separator, Slider, Switch, Tabs, Text, Toggle, Tooltip

### Molecules
Card, FormField

### Organisms
Form, Header

## Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview build

## Design System

View all components with variants and states at the root route (`/`) when running the dev server.