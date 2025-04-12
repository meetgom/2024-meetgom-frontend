import { useEffect } from 'react'
import {
  SpecificDateEventSheet,
  RecurringWeekdaysEventSheet,
  EventSheet,
} from '@/types/eventSheet'
import { useSpecificDateEventSheetMutation } from '@/hooks/useSpecificDateEventSheetMutation'
import { useRecurringWeekdaysEventSheetMutation } from '@/hooks/useRecurringWeekdaysEventSheetMutation'
import { useEventStore } from '@/store/useEventStore'
import { create } from 'domain'

export default function Step4({ onNext }: { onNext: () => void }) {
  const { eventState } = useEventStore()

  // 이벤트 생성 훅
  const createSpecificDateMutation = useSpecificDateEventSheetMutation()
  const createRecurringWeekdaysMutation =
    useRecurringWeekdaysEventSheetMutation()

  const isPending =
    createSpecificDateMutation.isPending ||
    createRecurringWeekdaysMutation.isPending

  useEffect(() => {
    const payload: EventSheet = {
      name: eventState.name,
      description: eventState.description,
      eventSheetType: eventState.eventSheetType,
      timeZone: eventState.timeZone,
      pinCode: eventState.pinCode || '',
      activeStartDateTime: eventState.activeStartDateTime,
      activeEndDateTime: eventState.activeEndDateTime,
      manualActive: false,
      startTime: eventState.startTime,
      endTime: eventState.endTime,
    }
    if (eventState.eventSheetType === 'SPECIFIC_DATES') {
      // 특정 날짜 기반 이벤트 생성
      payload.specificDates = eventState.specificDates
      createSpecificDateMutation.mutate(payload as SpecificDateEventSheet)
    } else {
      // 요일 반복 이벤트 생성
      payload.recurringWeekdays = eventState.recurringWeekdays
      createRecurringWeekdaysMutation.mutate(
        payload as RecurringWeekdaysEventSheet
      )
    }
  }, [])

  // 로딩 중일 때 표시할 내용
  if (isPending) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Loading...</h2>
        {/* 스피너를 추가하거나 원하는 스타일을 적용할 수 있습니다 */}
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="mt-25 w-full">
      <h1 className="text-4xl font-bold">Event Created!</h1>
      <div className="w-full flex gap-4 mt-8">
        <div>
          <h2>Event Info</h2>
          <pre className="border border-blue-500 p-4">
            {JSON.stringify(eventState, null, 2)}
          </pre>
        </div>

        <div>
          <h2>API Response</h2>
          <pre className="border border-green-500 p-4">
            {JSON.stringify(
              createSpecificDateMutation.data ||
                createRecurringWeekdaysMutation.data,
              null,
              2
            )}
          </pre>
        </div>

        <div>
          <h2>API Error</h2>
          <pre className="border border-red-500 p-4">
            {JSON.stringify(
              createSpecificDateMutation.error ||
                createRecurringWeekdaysMutation.error,
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </div>
  )
}
