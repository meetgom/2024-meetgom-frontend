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
        enableSearch: { control: 'boolean' },
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
        enableSearch: false,
        onChange: (value: string) => {
            console.log(value); // 이벤트 객체 대신 선택된 값 출력
        },
    },
}

export const WithSearch: Story = {
    args: {
        title: '유형',
        placeholder: '선택하세요',
        options: ['Asia/Tokyo', 'Asia/Tomsk', 'Asia/Tehran', 'Asia/Tbilisi', 'Asia/Tashkent', 'Asia/Taipei', 'Asia/Sydney', 'Asia/Srednekolymsk', 'Asia/Singapore', 'Asia/Seoul'],
        enableSearch: true,
        onChange: (value: string) => {
            console.log(value); // 이벤트 객체 대신 선택된 값 출력
        },
    },
}