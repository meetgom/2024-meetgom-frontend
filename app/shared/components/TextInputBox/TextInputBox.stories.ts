import type { Meta, StoryObj } from '@storybook/react'
import { TextInputBox } from './TextInputBox'

const meta = {
    title: 'Shared/TextInputBox',
    component: TextInputBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        placeholder: { control: 'text' },
        onChange: { control: 'text' },
    },
} satisfies Meta<typeof TextInputBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: '이벤트 이름',
        placeholder: '제목없는 이벤트',
        onChange: (e) => {
            console.log(e.target.value)
        },
    },
}