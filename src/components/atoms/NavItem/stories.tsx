import Image from 'next/image';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AiOutlineMenu } from 'react-icons/ai';

import NavItem from './index';

export default {
  title: 'Atoms/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;

export const Default: ComponentStory<typeof NavItem> = (args) => (
  <NavItem {...args} icon={<AiOutlineMenu />} />
);
Default.args = {
  label: 'Test',
  href: '/',
};
