export type DayOfWeek =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY'

export interface TimeSlot {
  date: string // YYYY-MM-DD
  dayOfWeek: DayOfWeek // MONDAY | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY | SATURDAY | SUNDAY
  startTime: string // HH:MM, 이벤트 시트 특정 날짜 구간 종료 시간
  endTime: string // HH:MM, 이벤트 시트 특정 날짜 구간 종료 시간
  availableParticipantsRatio?: number // 가능한 인원 비율
  availableParticipantsCount?: number // 참여 가능 인원 수
  participants?: string[] // 참여자 목록
}

export type TimeSlotTable = TimeSlot[]
