import { createSpecificDateEventSheet } from '@/api/eventSheet/createSpecificDateEventSheet'
import { SpecificDateEventSheet } from '@/types/eventSheet'
import { useMutation } from '@tanstack/react-query'

/** 특정 날짜 기반 이벤트 생성 쿼리 훅 */
const useSpecificDateEventSheetMutation = () => {
  return useMutation({
    mutationKey: ['specificDateEventSheet'],
    mutationFn: (eventSheet: SpecificDateEventSheet) =>
      createSpecificDateEventSheet(eventSheet),
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
