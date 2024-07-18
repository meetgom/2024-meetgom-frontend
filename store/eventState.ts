import { atom } from 'recoil'

export interface EventState {
  eventName: string
  eventType: 'dayOfWeek' | 'specificDate'
  daysOfWeek: string[]
  specificDate: string | { startDate: string; endDate: string }
  startTime: string
  endTime: string
  timeZone: string
}

export const eventState = atom<EventState>({
  key: 'eventState',
  default: {
    eventName: '',
    eventType: 'dayOfWeek',
    daysOfWeek: [],
    specificDate: '',
    startTime: '',
    endTime: '',
    timeZone: 'Asia/Tokyo',
  },
})
