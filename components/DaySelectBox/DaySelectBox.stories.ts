import { Meta, StoryObj } from '@storybook/react'
import { DaySelectBox } from './DaySelectBox'

const meta = {
  title: 'Shared/DaySelectBox',
  component: DaySelectBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
} satisfies Meta<typeof DaySelectBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '요일',
    onChange: (days: string[]) => {
      console.log('Selected days:', days)
    },
  },
}
