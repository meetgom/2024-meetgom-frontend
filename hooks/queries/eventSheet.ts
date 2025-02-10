import {
  BasicEventSheet,
  RecurringWeekdaysEventSheet,
  SpecificDateEventSheet,
} from '@/types/eventSheet'
import { useMutation, useQuery } from '@tanstack/react-query'

// 이벤트 시트 조회 API
const getEventSheet = async (eventSheetCode: string, region: string) => {
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

// 기본 이벤트 시트 생성 API
const createEventSheet = async (eventSheet: BasicEventSheet) => {
  const response = await fetch('/v1/event-sheet', {
    method: 'POST',
    body: JSON.stringify(eventSheet),
  })
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

// 특정 날짜 기반 이벤트 시트 생성 API
const createSpecificDateEventSheet = async (
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

// 요일 기반 이벤트 시트 생성 API
const createRecurringWeekdaysEventSheet = async (
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

// 이벤트 시트 조회 쿼리 훅
export const useEventSheetQuery = (eventSheetCode: string, region: string) => {
  return useQuery({
    queryKey: ['eventSheet', eventSheetCode],
    queryFn: () => getEventSheet(eventSheetCode, region),
  })
}

// 기본 이벤트 시트 생성 쿼리 훅
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

// 특정 날짜 기반 이벤트 생성 쿼리 훅
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

// 요일 기반 이벤트 생성 쿼리 훅
const useRecurringWeekdaysEventSheetMutation = () => {
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
