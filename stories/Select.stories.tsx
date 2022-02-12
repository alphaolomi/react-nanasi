import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../src/Select';

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.args = {
  //
};
