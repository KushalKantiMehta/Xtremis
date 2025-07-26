# My UI Library - Turborepo Setup

This is a basic Turborepo setup with Vite, React, and Storybook (v8.6.14).

## Structure

```
.
├── apps/
│   └── storybook/          # Storybook app (v8.6.14)
├── packages/
│   └── ui/                 # React component library (Vite + React)
├── package.json
├── turbo.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run development:
```bash
pnpm dev
```

3. Run Storybook:
```bash
pnpm storybook
```

4. Build all packages:
```bash
pnpm build
```

## Packages

- **@my-ui-library/ui**: Core React component library built with Vite
- **@my-ui-library/storybook**: Storybook documentation (v8.6.14)

## Example Component

The UI package includes a basic Button component as an example:

```tsx
import { Button } from '@my-ui-library/ui';

<Button variant="primary" size="medium">
  Click me
</Button>
```

## Scripts

- `pnpm dev`: Run all packages in development mode
- `pnpm build`: Build all packages
- `pnpm storybook`: Run Storybook development server
- `pnpm build-storybook`: Build Storybook for production
- `pnpm lint`: Run linting across all packages
- `pnpm test`: Run tests across all packages

## Technologies

- **Turborepo**: Monorepo management
- **Vite**: Fast build tool for the UI library
- **React**: UI framework (v18)
- **TypeScript**: Type safety
- **Storybook**: Component documentation (v8.6.14)
- **pnpm**: Package manager