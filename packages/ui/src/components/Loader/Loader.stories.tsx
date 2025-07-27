import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'error', 'warning'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

// Example showing multiple loaders
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Loader variant="default" />
      <Loader variant="primary" />
      <Loader variant="secondary" />
      <Loader variant="success" />
      <Loader variant="error" />
      <Loader variant="warning" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Loader size="sm" />
      <Loader size="md" />
      <Loader size="lg" />
      <Loader size="xl" />
    </div>
  ),
};
