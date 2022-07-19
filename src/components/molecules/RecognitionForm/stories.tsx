import { RecognitionProvider } from '@contexts';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import RecognitionForm from './index';

export default {
  title: 'Molecules/RecognitionForm',
  component: RecognitionForm,
  decorators: [
    (Story) => (
      <RecognitionProvider>
        <Story />
      </RecognitionProvider>
    ),
  ],
} as ComponentMeta<typeof RecognitionForm>;

export const Default: ComponentStory<typeof RecognitionForm> = (_args) => (
  <div className="h-screen">
    <RecognitionForm />
  </div>
);
