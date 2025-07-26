# My UI Library

An open-source React component library built with TypeScript, designed for modern web applications. The library follows industry-standard categorization patterns from Material UI, Ant Design, and Chakra UI, while providing seamless integration with data-heavy applications through specialized grid components.

## Features

- 🎨 **Design Token System** - Consistent theming with CSS custom properties
- 🧩 **Component-First Architecture** - Self-contained, composable components
- 🌙 **Multi-theme Support** - Light/dark modes with brand customization
- ♿ **Accessibility-First** - WCAG 2.1 AA compliance
- 📊 **Data Grid Expertise** - Advanced grid components with AG Grid/TanStack integration
- 🚀 **Performance Optimized** - Tree-shaking, code splitting, and minimal runtime
- 📱 **Framework Agnostic** - Works with Next.js, Vite, CRA, and Remix

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Start Storybook
pnpm storybook
```

## Package Structure

- **@my-ui-library/tokens** - Design tokens and theme system
- **@my-ui-library/icons** - SVG icon components
- **@my-ui-library/core** - Core UI components
- **@my-ui-library/data-grid** - Advanced data grid components
- **@my-ui-library/utils** - Utility functions and hooks

## Component Categories

### General/Foundation
- Button, Icon, Typography, Avatar, Badge

### Layout
- Box, Container, Grid, Stack, Divider, Space

### Navigation
- Menu, Breadcrumb, Pagination, Tabs, Steps, Anchor

### Data Entry
- Input, Select, Checkbox, Radio, Switch, Slider, DatePicker, Upload, Form

### Data Display
- Table, DataGrid, List, Card, Carousel, Collapse, Descriptions, Empty, Image, Statistic, Tag, Timeline, Tooltip

### Feedback
- Alert, Message, Modal, Drawer, Popover, Progress, Skeleton, Spin

## Development

This project uses:

- **Turborepo** for monorepo management
- **TypeScript** for type safety
- **Storybook** for component development
- **Vitest** for testing
- **ESLint/Prettier** for code quality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.