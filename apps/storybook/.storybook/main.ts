import type { StorybookConfig } from '@storybook/react-vite';


const config: StorybookConfig = {
  stories: ['../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    return config;
  },
};

export default config;
