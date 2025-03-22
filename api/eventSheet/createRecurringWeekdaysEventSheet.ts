import { RecurringWeekdaysEventSheet } from '@/types/eventSheet'

/** 요일 기반 이벤트 시트 생성 API */
export const createRecurringWeekdaysEventSheet = async (
  eventSheet: RecurringWeekdaysEventSheet
) => {
  const response = await fetch('/v1/event-sheet/recurring-weekdays', {
    method: 'POST',
    body: JSON.stringify(eventSheet),
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
