import { SpecificDateEventSheet } from '@/types/eventSheet'

/** 특정 날짜 기반 이벤트 시트 생성 API */
export const createSpecificDateEventSheet = async (
  eventSheet: SpecificDateEventSheet
) => {
  const response = await fetch('/v1/event-sheet/specific-dates', {
    method: 'POST',
    body: JSON.stringify(eventSheet),
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
