import { ComponentMeta, ComponentStory } from '@storybook/react';

import TopNav from './index';

export default {
  title: 'Molecules/TopNav',
  component: TopNav,
} as ComponentMeta<typeof TopNav>;

export const Default: ComponentStory<typeof TopNav> = (args) => (
  <div className="h-screen w-screen">
    <TopNav {...args} />
  </div>
);

Default.parameters = {
  nextRouter: {
    pathname: '/profile/[id]',
    asPath: '/profile/lifeiscontent',
    query: {
      id: 'lifeiscontent',
    },
  },
};
