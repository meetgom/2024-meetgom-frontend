import type { Meta, StoryObj } from '@storybook/react'
import { TimeRangeBox } from './TimeRangeBox'

const meta = {
  title: 'Shared/TimeRangeBox',
  component: TimeRangeBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof TimeRangeBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '시간',
    placeholder: '부터',
    onChange: () => {
      //   alert('Changed!')
    },
  },
}
