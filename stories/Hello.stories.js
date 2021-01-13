import React from 'react';

import { Hello } from './Hello';

export default {
  title: 'Example/Hello',
  component: Hello
};

const Template = (args) => <Hello {...args} />;

export const Hello1 = Template.bind({});
Hello1.args = {
  name:'Tom'
};

export const Hello2 = Template.bind({});
Hello2.args = {
  name:'Jack123'
};
