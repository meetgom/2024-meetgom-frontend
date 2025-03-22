import { createEventSheet } from '@/api/eventSheet/createEventSheet'
import { BasicEventSheet } from '@/types/eventSheet'
import { useMutation } from '@tanstack/react-query'

/** 기본 이벤트 시트 생성 쿼리 훅 */
const useCreateEventSheetMutation = () => {
  return useMutation({
    mutationKey: ['eventSheet'],
    mutationFn: (eventSheet: BasicEventSheet) => createEventSheet(eventSheet),
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
