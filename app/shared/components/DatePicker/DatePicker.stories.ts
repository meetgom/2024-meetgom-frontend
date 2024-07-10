import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker, DatePickerProps } from './DatePicker'

const meta = {
  title: 'Shared/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    placeholder: { control: 'text' },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '날짜',
    placeholder: '날짜를 선택해주세요',
    onChange: (dates: { startDate: Date | null; endDate: Date | null }) => {
      console.log('Selected dates:', dates)
    },
  },
}
