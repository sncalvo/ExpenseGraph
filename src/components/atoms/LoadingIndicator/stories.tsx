import { ComponentMeta, ComponentStory } from '@storybook/react';

import LoadingIndicator from './index';

export default {
  title: 'Atoms/LoadingIndicator',
  component: LoadingIndicator,
} as ComponentMeta<typeof LoadingIndicator>;

export const Default: ComponentStory<typeof LoadingIndicator> = (args) => (
  <LoadingIndicator {...args} />
);
