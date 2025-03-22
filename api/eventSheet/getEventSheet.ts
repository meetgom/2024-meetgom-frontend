/** 이벤트 시트 조회 API */
export const getEventSheet = async (eventSheetCode: string, region: string) => {
  const response = await fetch(
    `/v1/event-sheet/${eventSheetCode}?region=${region}`,
    {
      method: 'GET',
    }
  )
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}
