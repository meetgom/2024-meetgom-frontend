import { eventState } from '@/store/eventState'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import {
  useCreateEventSheetMutation,
  useSpecificDateEventSheetMutation,
  useRecurringWeekdaysEventSheetMutation,
} from '@/hooks/queries/eventSheet'
import {
  BasicEventSheet,
  SpecificDateEventSheet,
  RecurringWeekdaysEventSheet,
} from '@/types/eventSheet'

export default function Step4({ onNext }: { onNext: () => void }) {
  const [formState] = useRecoilState(eventState)

  // 이벤트 생성 훅들
  const createBasicMutation = useCreateEventSheetMutation()
  const createSpecificDateMutation = useSpecificDateEventSheetMutation()
  const createRecurringWeekdaysMutation =
    useRecurringWeekdaysEventSheetMutation()

  useEffect(() => {
    if (!formState.eventName) return // 이벤트 이름이 없으면 실행 X

    if (
      formState.eventSheetType === 'SPECIFIC_DATES' &&
      formState.specificDate
    ) {
      // 특정 날짜 기반 이벤트 생성
      const payload: SpecificDateEventSheet = {
        name: formState.eventName,
        description: 'Event created via Step4',
        eventSheetType: 'SPECIFIC_DATES',
        timeZone: formState.timeZone,
        pinCode: formState.pincode || '',
        activeStartDateTime: formState.specificDate.startDate
          ? new Date(formState.specificDate.startDate).toISOString()
          : '',
        activeEndDateTime: formState.specificDate.endDate
          ? new Date(formState.specificDate.endDate).toISOString()
          : '',
        manualActive: false,
        specificDates: [
          formState.specificDate.startDate,
          formState.specificDate.endDate,
        ]
          .filter((date): date is Date => date !== null) // null 제거
          .map((date) => date.toISOString().split('T')[0]), // YYYY-MM-DD 변환
        startTime: formState.startTime
          ? `${formState.startTime.hours}:${formState.startTime.minutes}`
          : '00:00',
        endTime: formState.endTime
          ? `${formState.endTime.hours}:${formState.endTime.minutes}`
          : '23:59',
      }
      createSpecificDateMutation.mutate(payload)
    } else if (formState.eventSheetType === 'RECURRING_WEEKDAYS') {
      // 요일 반복 이벤트 생성
      const payload: RecurringWeekdaysEventSheet = {
        name: formState.eventName,
        description: 'Event created via Step4',
        eventSheetType: 'RECURRING_WEEKDAYS',
        timeZone: formState.timeZone,
        pinCode: formState.pincode || '',
        activeStartDateTime: '',
        activeEndDateTime: '',
        manualActive: false,
        recurringWeekdays: formState.recurringWeekdays, // ['Monday', 'Wednesday', 'Friday']
        startTime: formState.startTime
          ? `${formState.startTime.hours}:${formState.startTime.minutes}`
          : '00:00',
        endTime: formState.endTime
          ? `${formState.endTime.hours}:${formState.endTime.minutes}`
          : '23:59',
      }
      createRecurringWeekdaysMutation.mutate(payload)
    }

    console.log('Event Created!', formState)
    alert('Event Created!')
  }, [formState]) // formState가 변경될 때 실행

  return (
    <div>
      <h1>Event Created!</h1>
      {/* 이벤트 정보 출력 */}
      <div>
        <h2>Event Info</h2>
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </div>
    </div>
  )
}
