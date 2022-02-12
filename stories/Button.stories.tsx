import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../src/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    parameters: {
      layout: 'centered',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
};
