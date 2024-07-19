import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta = {
  title: 'Shared/Alert',
  component: Alert,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    backgroundColor: { control: 'text' },
    visible: { control: 'boolean' },
    icon: { control: 'text' },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    message: '링크를 클립보드에 복사했습니다.',
    backgroundColor: 'bg-black',
    visible: true,
    icon: '/images/check.svg',
  },
}
