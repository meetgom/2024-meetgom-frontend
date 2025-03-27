import { DayOfWeek } from './dayOfWeek'

export type DateString = string // YYYY-MM-DD
export type TimeString = string // HH:mm

export interface BaseTimeSlot {
  date: DateString
  dayOfWeek: DayOfWeek
  startTime: TimeString
  endTime: TimeString
}

export interface TimeSlot extends BaseTimeSlot {
  availableParticipantsRatio: number
  availableParticipantsCount: number
  participants: string[]
}

export type AvailableTimeSlot = BaseTimeSlot

export type TimeSlotTable = TimeSlot[]
