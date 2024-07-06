import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
    title: 'Shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        fontColor: { control: 'color' },
        borderColor: { control: 'color' },
        label: { control: 'text' },
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
    },
}

export const WhiteButtonWithBorder: Story = {
    args: {
        backgroundColor: 'bg-white',
        fontColor: 'text-black',
        borderColor: 'border-#EFEFEF',
        label: '복사',
        onClick: () => {
            alert('Copied!')
        },
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
    },
}