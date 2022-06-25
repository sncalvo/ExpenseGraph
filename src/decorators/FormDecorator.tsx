import { PartialStoryFn } from '@storybook/csf';
import { ReactFramework } from '@storybook/react';

import { Form } from '@atoms';

const FormDecorator = (Story: PartialStoryFn<ReactFramework, unknown>) => (
  <Form
    onSubmit={(data) => {
      console.log(data);
    }}
  >
    <Story />
  </Form>
);

export default FormDecorator;
