import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'text' },
    fontColor: { control: 'text' },
    borderColor: { control: 'text' },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
    icon: { control: 'text' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    backgroundColor: 'bg-black',
    fontColor: 'text-white',
    borderColor: 'border-black',
    label: '확인',
    onClick: () => {
      alert('Clicked!')
    },
    size: 'sm',
  },
}

export const WhiteButtonWithBorder: Story = {
  args: {
    backgroundColor: 'bg-white',
    fontColor: 'text-black',
    borderColor: 'border-[#EFEFEF]',
    label: '복사',
    onClick: () => {
      alert('Copied!')
    },
    size: 'sm',
  },
}

export const WhiteButton: Story = {
  args: {
    backgroundColor: 'bg-white',
    fontColor: 'text-black',
    borderColor: 'border-white',
    label: '취소',
    onClick: () => {
      alert('Canceled!')
    },
    size: 'sm',
  },
}

export const MediumButtonSaveImage: Story = {
  args: {
    backgroundColor: 'bg-black',
    fontColor: 'text-white',
    borderColor: 'border-black',
    label: '이미지 저장',
    onClick: () => {
      alert('Clicked!')
    },
    size: 'md',
    icon: '/images/download.svg',
  },
}

export const MediumButtonShareImage: Story = {
  args: {
    backgroundColor: 'bg-[#F9F9F9]',
    fontColor: 'text-black',
    borderColor: 'border-[#F9F9F9]',
    label: '공유',
    onClick: () => {
      alert('Clicked!')
    },
    size: 'md',
    icon: '/images/share.svg',
  },
}

export const LargeButton: Story = {
  args: {
    backgroundColor: 'bg-black',
    fontColor: 'text-white',
    borderColor: 'border-black',
    label: '확인',
    onClick: () => {
      alert('Clicked!')
    },
    size: 'lg',
  },
}
