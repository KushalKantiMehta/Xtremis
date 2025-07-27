import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Typography',
  },
};

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 'This is a paragraph of text. Typography component supports various styles and can be used to maintain consistent text hierarchy throughout your application.',
  },
};

export const Lead: Story = {
  args: {
    variant: 'lead',
    children: 'This is a lead paragraph that stands out.',
  },
};

export const Blockquote: Story = {
  args: {
    variant: 'blockquote',
    children: 'This is a blockquote. Perfect for highlighting important quotes or testimonials.',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    children: 'This is muted text, used for less important information.',
  },
};
