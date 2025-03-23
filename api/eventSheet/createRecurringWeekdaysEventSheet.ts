import { RecurringWeekdaysEventSheet } from '@/types/eventSheet'
import { API_BASE_URL } from '@/config/api'
import { ApiResponse } from '@/types/apiResponse'

/** 요일 기반 이벤트 시트 생성 API */
export const createRecurringWeekdaysEventSheet = async (
  eventSheet: RecurringWeekdaysEventSheet
) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/v1/event-sheet/recurring-weekdays`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventSheet),
      }
    )

    const responseData: ApiResponse<any> = await response.json()

    if (!response.ok || !responseData.success) {
      const errorMessage =
        responseData.message ||
        responseData.error ||
        `API 오류 (${response.status}): 요일 기반 이벤트 시트 생성 실패`
      throw new Error(errorMessage)
    }

    return responseData.data
  } catch (error) {
    console.error('요일 기반 이벤트 시트 생성 중 오류 발생:', error)
    throw error
  }
}
