import { BasicEventSheet } from '@/types/eventSheet'

/** 기본 이벤트 시트 생성 API */
export const createEventSheet = async (eventSheet: BasicEventSheet) => {
  const response = await fetch('/v1/event-sheet', {
    method: 'POST',
    body: JSON.stringify(eventSheet),
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
