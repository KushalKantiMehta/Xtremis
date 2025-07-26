my-ui-library/
├── packages/
│   ├── ui/                          # Core component library
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── layout/          # Layout components
│   │   │   │   │   ├── Grid/
│   │   │   │   │   │   ├── Grid.tsx
│   │   │   │   │   │   ├── Grid.stories.tsx
│   │   │   │   │   │   ├── Grid.test.tsx
│   │   │   │   │   │   └── index.ts
│   │   │   │   │   ├── Container/
│   │   │   │   │   ├── Flex/
│   │   │   │   │   └── index.ts
│   │   │   │   ├── navigation/      # Navigation components
│   │   │   │   │   ├── Menu/
│   │   │   │   │   ├── Breadcrumb/
│   │   │   │   │   ├── Pagination/
│   │   │   │   │   ├── Steps/
│   │   │   │   │   ├── Tabs/
│   │   │   │   │   └── index.ts
│   │   │   │   ├── data-display/    # Data display components
│   │   │   │   │   ├── Table/
│   │   │   │   │   ├── Card/
│   │   │   │   │   ├── Avatar/
│   │   │   │   │   ├── Badge/
│   │   │   │   │   ├── Tag/
│   │   │   │   │   ├── Tooltip/
│   │   │   │   │   ├── Popover/
│   │   │   │   │   └── index.ts
│   │   │   │   ├── data-entry/      # Form components
│   │   │   │   │   ├── Button/
│   │   │   │   │   ├── Input/
│   │   │   │   │   ├── Select/
│   │   │   │   │   ├── Checkbox/
│   │   │   │   │   ├── Radio/
│   │   │   │   │   ├── DatePicker/
│   │   │   │   │   ├── TimePicker/
│   │   │   │   │   ├── Form/
│   │   │   │   │   └── index.ts
│   │   │   │   ├── feedback/        # Feedback components
│   │   │   │   │   ├── Alert/
│   │   │   │   │   ├── Modal/
│   │   │   │   │   ├── Drawer/
│   │   │   │   │   ├── Toast/
│   │   │   │   │   ├── Loading/
│   │   │   │   │   ├── Progress/
│   │   │   │   │   ├── Skeleton/
│   │   │   │   │   └── index.ts
│   │   │   │   ├── general/         # General components
│   │   │   │   │   ├── Typography/
│   │   │   │   │   ├── Icon/
│   │   │   │   │   ├── Divider/
│   │   │   │   │   ├── Image/
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts         # Component exports
│   │   │   ├── hooks/               # Custom hooks
│   │   │   │   ├── useLocalStorage.ts
│   │   │   │   ├── useMediaQuery.ts
│   │   │   │   ├── useDebounce.ts
│   │   │   │   └── index.ts
│   │   │   ├── utils/               # Utility functions
│   │   │   │   ├── className.ts
│   │   │   │   ├── colors.ts
│   │   │   │   ├── validation.ts
│   │   │   │   └── index.ts
│   │   │   ├── types/               # TypeScript type definitions
│   │   │   │   ├── component.types.ts
│   │   │   │   ├── common.types.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts             # Main export file
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts
│   │   └── tailwind.config.js
│   │
│   ├── theme/                       # Theme provider package
│   │   ├── src/
│   │   │   ├── providers/
│   │   │   │   ├── ThemeProvider.tsx
│   │   │   │   └── index.ts
│   │   │   ├── hooks/
│   │   │   │   ├── useTheme.ts
│   │   │   │   ├── useSystemTheme.ts
│   │   │   │   └── index.ts
│   │   │   ├── themes/
│   │   │   │   ├── base/
│   │   │   │   │   ├── base.theme.ts
│   │   │   │   │   └── index.ts
│   │   │   │   ├── presets/
│   │   │   │   │   ├── light.theme.ts
│   │   │   │   │   ├── dark.theme.ts
│   │   │   │   │   ├── corporate.theme.ts
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   ├── types/
│   │   │   │   ├── theme.types.ts
│   │   │   │   ├── context.types.ts
│   │   │   │   └── index.ts
│   │   │   ├── utils/
│   │   │   │   ├── theme-validator.ts
│   │   │   │   ├── css-variables.ts
│   │   │   │   ├── theme-merger.ts
│   │   │   │   └── index.ts
│   │   │   ├── components/
│   │   │   │   ├── ThemeSelector/
│   │   │   │   │   ├── ThemeSelector.tsx
│   │   │   │   │   ├── ThemeSelector.stories.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── ThemeToggle/
│   │   │   │   │   ├── ThemeToggle.tsx
│   │   │   │   │   ├── ThemeToggle.stories.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── README.md
│   │
│   ├── tokens/                      # Design tokens package
│   │   ├── src/
│   │   │   ├── base/
│   │   │   │   ├── colors.ts
│   │   │   │   ├── typography.ts
│   │   │   │   ├── spacing.ts
│   │   │   │   ├── shadows.ts
│   │   │   │   ├── borderRadius.ts
│   │   │   │   ├── breakpoints.ts
│   │   │   │   └── index.ts
│   │   │   ├── semantic/
│   │   │   │   ├── feedback.ts
│   │   │   │   ├── states.ts
│   │   │   │   ├── surface.ts
│   │   │   │   └── index.ts
│   │   │   ├── themes/              # Theme-specific token variations
│   │   │   │   ├── light-tokens.ts
│   │   │   │   ├── dark-tokens.ts
│   │   │   │   └── index.ts
│   │   │   ├── transforms/          # Token transformations
│   │   │   │   ├── css-variables.ts
│   │   │   │   ├── tailwind.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── build/                   # Generated token files
│   │   │   ├── css/
│   │   │   │   ├── variables.css
│   │   │   │   ├── light.css
│   │   │   │   └── dark.css
│   │   │   ├── js/
│   │   │   │   ├── tokens.js
│   │   │   │   └── themes.js
│   │   │   └── tailwind/
│   │   │       └── tokens.js
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── build.config.js
│   │
│   ├── icons/                       # Icon package
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── base/
│   │   │   │   │   ├── Icon.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── outlined/
│   │   │   │   │   ├── ChevronDown.tsx
│   │   │   │   │   ├── Search.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── filled/
│   │   │   │   │   ├── Heart.tsx
│   │   │   │   │   ├── Star.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   ├── utils/
│   │   │   │   ├── icon-registry.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── assets/                  # SVG source files
│   │   │   ├── outlined/
│   │   │   └── filled/
│   │   ├── scripts/
│   │   │   └── generate-icons.js
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── animations/                  # Animation utilities
│       ├── src/
│       │   ├── presets/
│       │   │   ├── fade.ts
│       │   │   ├── slide.ts
│       │   │   ├── bounce.ts
│       │   │   └── index.ts
│       │   ├── hooks/
│       │   │   ├── useAnimation.ts
│       │   │   ├── useReducedMotion.ts
│       │   │   └── index.ts
│       │   ├── components/
│       │   │   ├── AnimatePresence/
│       │   │   ├── Motion/
│       │   │   └── index.ts
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
│
├── apps/
│   ├── storybook/                   # Storybook app
│   │   ├── .storybook/
│   │   │   ├── main.ts
│   │   │   ├── preview.ts
│   │   │   ├── theme.ts
│   │   │   └── manager.js
│   │   ├── stories/
│   │   │   ├── Introduction.stories.mdx
│   │   │   ├── design-tokens/
│   │   │   │   ├── Colors.stories.tsx
│   │   │   │   ├── Typography.stories.tsx
│   │   │   │   └── Spacing.stories.tsx
│   │   │   ├── themes/
│   │   │   │   ├── ThemeProvider.stories.tsx
│   │   │   │   ├── ThemeSelector.stories.tsx
│   │   │   │   └── ThemeToggle.stories.tsx
│   │   │   └── examples/
│   │   │       ├── Dashboard.stories.tsx
│   │   │       └── Form.stories.tsx
│   │   ├── public/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── playground/                  # Development playground
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Examples/
│   │   │   │   └── Playground/
│   │   │   ├── pages/
│   │   │   │   ├── Home.tsx
│   │   │   │   ├── Components.tsx
│   │   │   │   ├── Themes.tsx
│   │   │   │   └── Tokens.tsx
│   │   │   ├── App.tsx
│   │   │   ├── main.tsx
│   │   │   └── index.css
│   │   ├── public/
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   └── tsconfig.json
│   │
│   └── docs/                        # Documentation site
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   │   ├── getting-started/
│       │   │   ├── components/
│       │   │   ├── themes/
│       │   │   └── tokens/
│       │   └── styles/
│       ├── static/
│       ├── docusaurus.config.js
│       ├── package.json
│       └── tsconfig.json
│
├── tools/
│   ├── eslint-config/              # Shared ESLint config
│   │   ├── base.js
│   │   ├── react.js
│   │   ├── typescript.js
│   │   ├── package.json
│   │   └── README.md
│   │
│   ├── typescript-config/          # Shared TypeScript config
│   │   ├── base.json
│   │   ├── react.json
│   │   ├── node.json
│   │   ├── package.json
│   │   └── README.md
│   │
│   ├── tailwind-config/            # Shared Tailwind config
│   │   ├── base.js
│   │   ├── components.js
│   │   ├── themes.js
│   │   ├── package.json
│   │   └── README.md
│   │
│   ├── build-tools/                # Build utilities
│   │   ├── src/
│   │   │   ├── vite-plugins/
│   │   │   ├── rollup-plugins/
│   │   │   └── webpack-plugins/
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── dev-tools/                  # Development utilities
│       ├── src/
│       │   ├── component-generator/
│       │   ├── theme-generator/
│       │   └── token-generator/
│       ├── templates/
│       │   ├── component/
│       │   ├── theme/
│       │   └── story/
│       ├── package.json
│       └── tsconfig.json
│
├── tests/                          # Global test configuration
│   ├── setup.ts
│   ├── utils/
│   │   ├── render-with-theme.tsx
│   │   ├── test-themes.ts
│   │   └── index.ts
│   └── __mocks__/
│
├── scripts/                        # Build and utility scripts
│   ├── build.js
│   ├── dev.js
│   ├── test.js
│   ├── lint.js
│   ├── generate-tokens.js
│   ├── generate-icons.js
│   └── release.js
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   ├── release.yml
│   │   ├── visual-regression.yml
│   │   └── deploy-storybook.yml
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
│
├── docs/                           # Repository documentation
│   ├── CONTRIBUTING.md
│   ├── ARCHITECTURE.md
│   ├── THEMING.md
│   ├── COMPONENTS.md
│   └── API.md
│
├── turbo.json                      # Turborepo configuration
├── package.json                    # Root package.json
├── pnpm-workspace.yaml            # PNPM workspace config
├── .gitignore
├── .changeset/                     # Changeset configuration
│   ├── config.json
│   └── README.md
├── tailwind.config.js             # Root Tailwind config
├── tsconfig.json                  # Root TypeScript config
├── vitest.config.ts               # Test configuration
├── .eslintrc.js                   # ESLint configuration
├── .prettierrc                    # Prettier configuration
└── README.md
