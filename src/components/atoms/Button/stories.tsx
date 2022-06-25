import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './index';

export default {
  title: 'Atoms/Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => <Button {...args} />;
Default.args = {
  children: 'Button',
};

export const Primary: ComponentStory<typeof Button> = (args) => (
  <Button {...args} variant="primary" />
);
Primary.args = {
  ...Default.args,
};

export const Secondary: ComponentStory<typeof Button> = (args) => (
  <Button {...args} variant="secondary" />
);
Secondary.args = {
  ...Default.args,
};

export const Tertiary: ComponentStory<typeof Button> = (args) => (
  <Button {...args} variant="tertiary" />
);
Tertiary.args = {
  ...Default.args,
};

export const Danger: ComponentStory<typeof Button> = (args) => (
  <Button {...args} variant="danger" />
);
Danger.args = {
  ...Default.args,
};
