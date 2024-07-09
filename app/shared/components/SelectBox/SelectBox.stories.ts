import type { Meta, StoryObj } from '@storybook/react'
import { SelectBox } from './SelectBox'

const meta = {
    title: 'Shared/SelectBox',
    component: SelectBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        placeholder: { control: 'text' },
        options: { control: 'object' },
        onChange: { control: 'text' },
    },
} satisfies Meta<typeof SelectBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: '유형',
        placeholder: '선택하세요',
        options: ['요일만 선택', '날짜 지정'],
        onChange: (e) => {
            console.log(e.target.value)
        },
    },
}