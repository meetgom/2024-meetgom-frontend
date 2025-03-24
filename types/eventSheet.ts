export type EventSheetType = 'RECURRING_WEEKDAYS' | 'SPECIFIC_DATES'

export interface EventSheetTimeSlot {
  date: string
  startTime: string
  endTime: string
}

export interface EventSheet {
  name: string
  description: string
  eventSheetType: EventSheetType
  timeZone: string
  pinCode: string
  activeStartDateTime: string
  activeEndDateTime: string
  manualActive: boolean
  startTime?: string
  endTime?: string
  recurringWeekdays?: string[]
  specificDates?: string[]
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

export type AllEventSheets =
  | SpecificDateEventSheet
  | RecurringWeekdaysEventSheet
