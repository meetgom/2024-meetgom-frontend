export enum DayOfWeek {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
}

export const dayOfWeekMap: Record<DayOfWeek, string> = {
  [DayOfWeek.MONDAY]: '월',
  [DayOfWeek.TUESDAY]: '화',
  [DayOfWeek.WEDNESDAY]: '수',
  [DayOfWeek.THURSDAY]: '목',
  [DayOfWeek.FRIDAY]: '금',
  [DayOfWeek.SATURDAY]: '토',
  [DayOfWeek.SUNDAY]: '일',
} as const

export const dayOfWeekList = Object.values(DayOfWeek)
