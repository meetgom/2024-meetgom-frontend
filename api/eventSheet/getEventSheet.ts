import { API_BASE_URL } from '@/config/api'
import { ApiResponse } from '@/types/apiResponse'

/** 이벤트 시트 조회 API */
export const getEventSheet = async (eventSheetCode: string, region: string) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/v1/event-sheet/${eventSheetCode}?region=${region}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const responseData: ApiResponse<any> = await response.json()

    if (!response.ok || !responseData.success) {
      const errorMessage =
        responseData.message ||
        responseData.error ||
        `API 오류 (${response.status}): 이벤트 시트 조회 실패`
      throw new Error(errorMessage)
    }

    return responseData.data
  } catch (error) {
    console.error('이벤트 시트 조회 중 오류 발생:', error)
    throw error
  }
}
