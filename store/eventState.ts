import { Time } from '@/types'
import { atom } from 'recoil'

export interface EventState {
  eventName: string
  eventSheetType: 'RECURRING_WEEKDAYS' | 'SPECIFIC_DATES'
  recurringWeekdays: string[]
  specificDate: {
    startDate: Date | null
    endDate: Date | null
  } | null
  startTime: Time | null
  endTime: Time | null
  timeZone: string
  pincode: string | null
}

export const eventState = atom<EventState>({
  key: 'eventState',
  default: {
    eventName: '제목없는 이벤트',
    eventSheetType: 'RECURRING_WEEKDAYS',
    recurringWeekdays: [],
    specificDate: null,
    startTime: { hours: 9, minutes: 30 },
    endTime: { hours: 22, minutes: 30 },
    timeZone: 'Asia/Tokyo',
    pincode: null,
  },
})
