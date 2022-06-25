import { FormDecorator } from '@decorators';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from './index';

export default {
  title: 'Atoms/Input',
  component: Input,
  decorators: [FormDecorator],
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => <Input {...args} />;
Default.args = {
  name: 'name',
};
