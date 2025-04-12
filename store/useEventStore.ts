import { EventSheet } from '@/types/eventSheet'
import { create } from 'zustand'

interface EventState {
  eventState: EventSheet
  setEvent(event: Partial<EventSheet>): void // 부분 업데이트를 지원하는 함수
  setEventField<K extends keyof EventSheet>(key: K, value: EventSheet[K]): void // 특정 필드 업데이트 함수
}

const initialState: EventSheet = {
  name: '',
  description: '',
  eventSheetType: 'RECURRING_WEEKDAYS',
  timeZone: 'Asia/Seoul',
  pinCode: '',
  activeStartDateTime: '',
  activeEndDateTime: '',
  manualActive: false,
  recurringWeekdays: [],
  specificDates: [],
  startTime: '09:30',
  endTime: '22:30',
}

export const useEventStore = create<EventState>((set) => ({
  eventState: initialState,

  // 전체 상태의 일부를 업데이트할 수 있는 함수
  setEvent: (event) =>
    set((state) => ({
      eventState: { ...state.eventState, ...event },
    })),

  // 특정 필드만 업데이트할 수 있는 함수
  setEventField: (key, value) =>
    set((state) => ({
      eventState: { ...state.eventState, [key]: value },
    })),
}))
