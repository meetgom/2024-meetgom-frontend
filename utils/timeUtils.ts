import { Time } from '@/types/time'

export const timeStringToTime = (timeStr: string): Time => {
  const [hours, minutes] = timeStr.split(':').map(Number)
  return { hours, minutes }
}

export const timeToString = (time: Time): string => {
  return `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}`
}

export const combineDateAndTime = (date: Date, time: Time): Date => {
  const result = new Date(date)
  result.setHours(time.hours, time.minutes, 0, 0)
  return result
}

export const isValidTime = (time: Time): boolean => {
  return (
    time.hours >= 0 &&
    time.hours <= 23 &&
    time.minutes >= 0 &&
    time.minutes <= 59
  )
}
