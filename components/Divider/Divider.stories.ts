import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta = {
  title: 'Shared/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
  },
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  args: {
    label: '또는',
  },
}
