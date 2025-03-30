import type { Meta, StoryObj } from '@storybook/react'
import EventSaveBar from './EventSaveBar'

const meta = {
  title: 'Components/EventSaveBar',
  component: EventSaveBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onCancel: { action: 'onCancel' },
    onSave: { action: 'onSave' },
  },
} satisfies Meta<typeof EventSaveBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onCancel: () => {
      alert('취소하기')
    },
    onSave: () => {
      alert('저장하기')
    },
  },
}
