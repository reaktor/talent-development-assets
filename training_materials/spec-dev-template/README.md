# Spec Dev Template

This is a starter repo for getting more familiar with AI assisted coding. The goal is to provide tools for agentic development. This is just one way to organize things but follows current "best practices" like Kiro, spec-kit and plain old common sense.

## Features

- **React 19** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS v4** for utility-first styling
- **Atomic Design System** with atoms, molecules, organisms structure
- **i18n** internationalization support
- **ESLint & Prettier** for code quality

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── docs/
│   ├── agents/
│   │   ├── agent-fullstack.md
│   │   ├── agent-product-designer.md
│   │   └── cleanup-prompt.md
│   ├── specs/
│   │   └── EXAMPLE_approval.md
│   ├── EXAMPLE_PRD.md
│   └── HUMAN_INSTRUCTION.md
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── atoms/          # Basic UI primitives (Button, Input, etc.)
│   │   ├── molecules/      # Composite components (Card, FormField)
│   │   ├── organisms/      # Complex components (Form, Header)
│   │   ├── pages/          # Page components
│   │   └── templates/      # Layout templates
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── .prettierrc
├── CLAUDE.md
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Component Library

The template includes a comprehensive set of UI components:

### Atoms
- Avatar, Badge, Button, Checkbox, Input, Label
- RadioGroup, Select, Separator, Slider, Switch
- Tabs, Text, Toggle, Tooltip

### Molecules
- Card, FormField

### Organisms
- Form, Header

## Design System

View the complete design system at `/` route when running the development server. This showcases all available components with their variants and states.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript 5.8** - Type-safe development
- **Vite 7** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **i18next** - Internationalization framework
- **ESLint & Prettier** - Code quality and formatting
- **PostCSS & Autoprefixer** - CSS processing

## Complementary Training Deck

[Click](https://docs.google.com/presentation/d/1z-5guoAgFqe0DF-VO6LanJEPR6AxVFs2sBbpPIkqAcA/edit?usp=sharing)