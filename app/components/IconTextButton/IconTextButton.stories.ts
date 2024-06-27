import type { Meta, StoryObj } from '@storybook/react'
import { IconTextButton } from './IconTextButton'

const meta = {
  title: 'Components/IconTextButton',
  component: IconTextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    alt: { control: 'text' },
    title: { control: 'text' },
    label: { control: 'text' },
  },
  // args: { onClick: fn() },
} satisfies Meta<typeof IconTextButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: '/create_event.svg',
    alt: 'create event icon',
    title: '빠르게 만들기',
    label: '로그인없이 이벤트 링크 또는 코드로 일정을 생성하고 관리하세요.',
    onClick: () => {
      alert('IconTextButton is clicked!')
    },
  },
}

export const JoinWithCode: Story = {
  args: {
    icon: '/join_with_code.svg',
    alt: 'join event icon',
    title: '코드로 참여하기',
    label: '로그인 없이 가지고 있는 링크 또는 코드로 이벤트에 참여하세요.',
    onClick: () => {
      alert('IconTextButton is clicked!')
    },
  },
}
