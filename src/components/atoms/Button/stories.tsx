import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './index';

// This tells Storybook how to list your stories and provide information
export default {
  title: 'Atoms/Buttons',
  component: Button,
  argTypes: {
    variant: { control: 'select' },
  },
} as ComponentMeta<typeof Button>;

// With named export we define component's story
export const Default: ComponentStory<typeof Button> = (args) => <Button {...args} />;
// Define default arguments for the Default story
Default.args = {
  variant: 'primary',
  size: 'medium',
  children: 'Button',
};
