---
description: Repository Information Overview
alwaysApply: true
---

# Nähtamatu Maailm Website Information

## Summary
Website design for "Nähtamatu Maailm", a project focused on accessibility or visual impairment awareness, as indicated by the title. The code is a React-based web application bundled from a Figma design, using modern UI libraries and Vite for building.

## Structure
- **src/**: Core source code directory.
  - **app/**: Main application logic, including:
    - **components/**: Functional UI components (Header, Footer, Hero, etc.) and a sub-directory for **ui/** (shadcn-like primitives) and **figma/** (exported components).
    - **pages/**: Route-level components like `Home` and `MediaPlayer`.
    - **App.tsx**: Main app component.
    - **routes.tsx**: Route definitions using `react-router`.
  - **assets/**: Static resources like images and icons.
  - **styles/**: Global styling and CSS configurations.
- **index.html**: Entry point for the browser.
- **vite.config.ts**: Configuration for the Vite build tool.
- **package.json**: Project manifest with dependencies and scripts.

## Language & Runtime
**Language**: TypeScript (TSX)  
**Version**: React 18.3.1  
**Build System**: Vite 6.3.5  
**Package Manager**: npm (or pnpm as specified in `package.json`)

## Dependencies
**Main Dependencies**:
- **UI Frameworks**: `@mui/material` (v7), `@radix-ui/react-*` suite (Accordion, Dialog, etc.).
- **Styling**: `tailwindcss` (v4), `@emotion/react`, `motion` (framer-motion).
- **Routing**: `react-router` (v7).
- **Utilities**: `lucide-react` (icons), `recharts` (charts), `clsx`, `tailwind-merge`.
- **Interactivity**: `react-dnd` (drag and drop), `embla-carousel-react`.

**Development Dependencies**:
- `vite`: Frontend build tool.
- `@tailwindcss/vite`: Tailwind integration for Vite.
- `@vitejs/plugin-react`: React support for Vite.

## Build & Installation
```bash
# Install dependencies
npm i

# Start development server
npm run dev

# Build for production
npm run build
```

## Main Files & Resources
- **Entry Point**: `src/main.tsx`
- **Application Core**: `src/app/App.tsx`
- **Routing Config**: `src/app/routes.tsx`
- **Global Config**: `vite.config.ts`, `postcss.config.mjs`
- **Public Assets**: `index.html`
