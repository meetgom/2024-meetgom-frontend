import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { WideButton } from './WideButton'

const meta = {
  title: 'Example/WideButton',
  component: WideButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof WideButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'WideButton',
  },
}

export const WithBackgroundColor: Story = {
  args: {
    backgroundColor: 'bg-red-500',
    fontColor: 'text-white',
    label: 'Red WideButton',
  },
}
