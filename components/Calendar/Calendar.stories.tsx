import { mockEventSheetData } from '@/mocks/eventSheetData'
import type { Meta, StoryObj } from '@storybook/react'
import Calendar from './Calendar'

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    eventSheetTimeSlots: mockEventSheetData.data.eventSheetTimeSlots,
    timeSlotTable: mockEventSheetData.data.timeSlotTable,
  },
}

export const EmptyTimeSlots: Story = {
  args: {
    eventSheetTimeSlots: mockEventSheetData.data.eventSheetTimeSlots,
    timeSlotTable: [],
  },
}

export const HighParticipation: Story = {
  args: {
    eventSheetTimeSlots: mockEventSheetData.data.eventSheetTimeSlots,
    timeSlotTable: mockEventSheetData.data.timeSlotTable.map((slot) => ({
      ...slot,
      availableParticipantsRatio: 90,
      availableParticipantsCount: 9,
      participants: [...slot.participants, 'User9'],
    })),
  },
}
