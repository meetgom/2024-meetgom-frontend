import { getEventSheet } from '@/api/eventSheet/getEventSheet'
import { useQuery } from '@tanstack/react-query'

/** 이벤트 시트 조회 쿼리 훅 */
export const useEventSheetQuery = (eventSheetCode: string, region: string) => {
  return useQuery({
    queryKey: ['eventSheet', eventSheetCode],
    queryFn: () => getEventSheet(eventSheetCode, region),
  })
}
