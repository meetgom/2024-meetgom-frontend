export interface EventSheetTimeSlot {
  date: string
  startTime: string
  endTime: string
}

export interface EventSheet {
  name: string
  description: string
  eventSheetType: 'RECURRING_WEEKDAYS' | 'SPECIFIC_DATES'
  timeZone: string
  pinCode: string
  activeStartDateTime: string
  activeEndDateTime: string
  manualActive: boolean
}

export type BasicEventSheet = EventSheet & {
  eventSheetTimeSlots: EventSheetTimeSlot[]
}

export type SpecificDateEventSheet = EventSheet & {
  specificDates: string[]
  startTime: string
  endTime: string
}

export type RecurringWeekdaysEventSheet = EventSheet & {
  recurringWeekdays: string[]
  startTime: string
  endTime: string
}
