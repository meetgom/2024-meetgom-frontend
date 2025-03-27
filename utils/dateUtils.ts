import { DayOfWeek } from '@/types/timeSlot'

/**
 * @description 요일을 표시하는 맵
 */
const dayOfWeekMap: Record<DayOfWeek, string> = {
  MONDAY: '월',
  TUESDAY: '화',
  WEDNESDAY: '수',
  THURSDAY: '목',
  FRIDAY: '금',
  SATURDAY: '토',
  SUNDAY: '일',
}

/**
 * @description 요일을 표시
 * @param dayOfWeek 요일
 * @returns 요일을 표시 (예: '월')
 */
export function formatDayOfWeek(dayOfWeek: DayOfWeek): string {
  return dayOfWeekMap[dayOfWeek]
}

/**
 * @description 날짜를 표시
 * @param date 날짜
 * @returns 날짜를 표시 (예: '1일')
 */
export function formatDate(date: string): string {
  const dateObj = new Date(date)
  return `${dateObj.getDate()}일`
}

/**
 * @description 날짜와 요일을 조합하여 표시
 * @param date 날짜
 * @param dayOfWeek 요일
 * @returns 날짜와 요일을 조합한 문자열 (예: '월요일 1일')
 */
export function formatDateWithDayOfWeek(
  date: string,
  dayOfWeek: DayOfWeek
): string {
  return `${formatDayOfWeek(dayOfWeek)}요일 ${formatDate(date)}`
}

/**
 * @description 날짜를 문자열로 표시
 * @param date 날짜
 * @returns 날짜를 문자열로 표시 (예: '2024-01-01T00:00')
 */
export const formatDateToString = (date: Date): string => {
  return date.toISOString().slice(0, 16) // "YYYY-MM-DDTHH:mm" 형식
}

/**
 * @description 문자열을 날짜로 파싱
 * @param dateString 날짜 문자열
 * @returns 날짜
 */
export const parseStringToDate = (dateString: string): Date => {
  return new Date(dateString)
}
