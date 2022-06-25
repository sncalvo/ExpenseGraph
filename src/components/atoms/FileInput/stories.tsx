import { FormDecorator } from '@decorators';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import FileInput from './index';

export default {
  title: 'Atoms/FileInput',
  component: FileInput,
  decorators: [FormDecorator],
} as ComponentMeta<typeof FileInput>;

export const Default: ComponentStory<typeof FileInput> = (args) => <FileInput {...args} />;
Default.args = {
  name: 'name',
};

export const Multiple: ComponentStory<typeof FileInput> = (args) => (
  <FileInput multiple {...args} />
);
Multiple.args = {
  ...Default.args,
};
