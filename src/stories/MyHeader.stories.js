import React from 'react';

import Header from 'components/common/header';

export default {
  title: 'Example/MyHeader',
  component: Header,
  argTypes: {
  },
};

const Template = () => <Header />;

export const SimpleHeader = Template.bind({});
SimpleHeader.args = {
};
