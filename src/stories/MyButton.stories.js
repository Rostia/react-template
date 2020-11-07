import React from 'react';

import Button from 'components/common/button';

export default {
  title: 'Example/MyButton',
  component: Button,
  argTypes: {
    children: 'Test',
  },
};

const Template = (args) => <Button {...args} />;

export const Active = Template.bind({});
Active.args = {
  mode: 'active',
  children: 'Test',
};

export const Default = Template.bind({});
Default.args = {
  mode: 'default',
  children: 'Test',
};

export const Outline = Template.bind({});
Outline.args = {
  mode: 'outline',
  children: 'Test',
};
