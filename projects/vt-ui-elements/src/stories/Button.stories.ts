import type { Meta, StoryObj } from '@storybook/angular';
import {ButtonComponent} from "../lib/button/button.component";

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Submit'
  },
};

export const Secondary: Story = {
  args: {
    label: 'Cancel',
    type: 'secondary'
  },
};

export const Fancy: Story = {
  args: {
    label: 'Hover me',
    type: 'glow-on-hover'
  },
};
