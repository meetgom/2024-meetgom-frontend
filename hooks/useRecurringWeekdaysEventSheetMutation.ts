import { createRecurringWeekdaysEventSheet } from '@/api/eventSheet/createRecurringWeekdaysEventSheet'
import { RecurringWeekdaysEventSheet } from '@/types/eventSheet'
import { useMutation } from '@tanstack/react-query'

/** 요일 기반 이벤트 생성 쿼리 훅 */
export const useRecurringWeekdaysEventSheetMutation = () => {
  return useMutation({
    mutationKey: ['recurringWeekdaysEventSheet'],
    mutationFn: (eventSheet: RecurringWeekdaysEventSheet) =>
      createRecurringWeekdaysEventSheet(eventSheet),
    onSuccess: () => {
      // 이벤트 시트 생성 성공 시 처리
      console.log('이벤트 시트 생성 성공')
    },
    onError: () => {
      // 이벤트 시트 생성 실패 시 처리
      console.log('이벤트 시트 생성 실패')
    },
  })
}
