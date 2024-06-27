import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { WideButton } from './WideButton'

const meta = {
  title: 'Shared/WideButton',
  component: WideButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
  },
  // args: { onClick: fn() },
} satisfies Meta<typeof WideButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    backgroundColor: 'bg-black',
    fontColor: 'text-white',
    label: '로그인',
    onClick: () => {
      alert('Co-Pilot is GOD!')
    },
  },
}

export const Next: Story = {
  args: {
    backgroundColor: 'bg-black',
    fontColor: 'text-white',
    label: '다음',
    onClick: () => {
      alert('Co-Pilot is GOD!')
    },
  },
}

export const WithBackgroundColor: Story = {
  args: {
    backgroundColor: 'bg-[#0085FF]',
    fontColor: 'text-white',
    label: '파란색 버튼',
    onClick: () => {
      alert('Co-Pilot is GOD!')
    },
  },
}
