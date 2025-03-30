import type { Meta, StoryObj } from '@storybook/react'
import TimeTextBox from './TimeTextBox'

const meta = {
  title: 'Components/TimeTextBox',
  component: TimeTextBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    startTime: { control: 'text' },
    endTime: { control: 'text' },
    timezone: { control: 'object' },
  },
} satisfies Meta<typeof TimeTextBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    startTime: '09:30',
    endTime: '22:30',
    timezone: {
      region: 'Asia',
      timezone: 'Tokyo',
    },
  },
}
