import { TimeSlot } from '@/types/timeSlot'
import type { Meta, StoryObj } from '@storybook/react'
import CalendarTooltip from './CalendarTooltip'

const meta: Meta<typeof CalendarTooltip> = {
  title: 'Components/CalendarTooltip',
  component: CalendarTooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CalendarTooltip>

const defaultTimeSlot: TimeSlot = {
  date: '2024-03-21',
  dayOfWeek: 'THURSDAY',
  startTime: '14:00',
  endTime: '15:00',
  availableParticipantsRatio: 70,
  availableParticipantsCount: 7,
  participants: ['Participant1', 'Participant2', 'Participant3'],
}

export const Default: Story = {
  args: {
    timeSlot: defaultTimeSlot,
  },
}

export const Hidden: Story = {
  args: {
    timeSlot: {
      date: '2024-03-21',
      dayOfWeek: 'THURSDAY',
      startTime: '14:00',
      endTime: '15:00',
      availableParticipantsRatio: 70,
      availableParticipantsCount: 7,
      participants: ['Participant1', 'Participant2', 'Participant3'],
    },
  },
}

export const WithCustomStyle: Story = {
  args: {
    timeSlot: defaultTimeSlot,
    className: 'bg-blue-50',
  },
}
