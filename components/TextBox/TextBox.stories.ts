import type { Meta, StoryObj } from '@storybook/react'
import TextBox from './TextBox'

const meta = {
  title: 'Components/TextBox',
  component: TextBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
  },
} satisfies Meta<typeof TextBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    value: 'Value',
  },
}
