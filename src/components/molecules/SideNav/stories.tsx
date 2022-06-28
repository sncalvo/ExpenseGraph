import { ComponentMeta, ComponentStory } from '@storybook/react';

import SideNav from './index';

export default {
  title: 'Molecules/SideNav',
  component: SideNav,
} as ComponentMeta<typeof SideNav>;

export const Default: ComponentStory<typeof SideNav> = (args) => (
  <div className="h-screen">
    <SideNav {...args} />
  </div>
);
