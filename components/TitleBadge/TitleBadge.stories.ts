import type { Meta, StoryObj } from '@storybook/react'
import { TitleBadge } from './TitleBadge'

const meta = {
  title: 'Shared/TitleBadge',
  component: TitleBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'text' },
    title: { control: 'text' },
    icon: { control: 'text' },
  },
} satisfies Meta<typeof TitleBadge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    backgroundColor: 'bg-[#0085FF]',
    title: '참가 링크',
    icon: '/images/follow_the_signs.svg',
  },
}
