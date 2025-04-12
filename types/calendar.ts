import { AvailableTimeSlot, TimeSlot } from './timeSlot'

export interface CalendarProps {
  eventSheetTimeSlots: AvailableTimeSlot[]
  timeSlotTable: TimeSlot[]
}
