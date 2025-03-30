import { Button } from '@/components/Button/Button'
import { DatePicker } from '@/components/DatePicker/DatePicker'
import { DaySelectBox } from '@/components/DaySelectBox/DaySelectBox'
import { SelectBox } from '@/components/SelectBox/SelectBox'
import { TimeRangeBox } from '@/components/TimeRangeBox/TimeRangeBox'
import React, { useEffect, useState } from 'react'
import { format, set } from 'date-fns'
import { timeStringToTime } from '../../../utils/timeUtils'
import { useEventStore } from '@/store/useEventStore'

export default function Step2({ onNext }: { onNext: () => void }) {
  const { eventState, setEvent, setEventField } = useEventStore()

  useEffect(() => {
    console.log('eventState', eventState)
  }, [eventState])

  const [selectedEventSheetType, setSelectedEventSheetType] =
    useState('요일만 선택')

  const handleEventSheetTypeChange = (value: string) => {
    setSelectedEventSheetType(value)

    if (value === '요일만 선택') {
      setEventField('eventSheetType', 'RECURRING_WEEKDAYS')
      setEventField('specificDates', [])
    } else {
      setEventField('eventSheetType', 'SPECIFIC_DATES')
      setEventField('recurringWeekdays', [])
    }
  }

  const handleDaySelectChange = (value: string[]) => {
    setEventField('recurringWeekdays', value)
  }

  const handleTimeRangeChange = (startTimeStr: string, endTimeStr: string) => {
    setEventField('startTime', startTimeStr)
    setEventField('endTime', endTimeStr)
  }

  const handleDatePickerChange = (dates: {
    startDate: Date | null
    endDate: Date | null
  }) => {
    setEventField('specificDates', [
      dates.startDate ? format(dates.startDate, 'yyyy-MM-dd') : '',
      dates.endDate ? format(dates.endDate, 'yyyy-MM-dd') : '',
    ])
  }

  const getFormattedApiPayload = () => {
    // if (formState.specificDate?.startDate && formState.specificDate?.endDate) {
    //   return {
    //     activeStartDateTime: format(
    //       formState.specificDate.startDate,
    //       "yyyy-MM-dd'T'HH:mm"
    //     ),
    //     activeEndDateTime: format(
    //       formState.specificDate.endDate,
    //       "yyyy-MM-dd'T'HH:mm"
    //     ),
    //     timeZone: formState.timeZone,
    //   }
    // }

    return null
  }

  return (
    <div>
      <SelectBox
        title="유형"
        placeholder="요일만 선택"
        options={['요일만 선택', '날짜 지정']}
        onChange={handleEventSheetTypeChange}
      />

      {selectedEventSheetType === '요일만 선택' && (
        <>
          <div className="h-6" />
          <DaySelectBox title="요일" onChange={handleDaySelectChange} />
        </>
      )}

      {selectedEventSheetType === '날짜 지정' && (
        <>
          <div className="h-6" />
          <DatePicker
            title="날짜"
            placeholder="날짜를 선택해주세요"
            onChange={handleDatePickerChange}
          />
        </>
      )}

      <div className="h-6" />

      <TimeRangeBox
        title="시간"
        placeholder="부터"
        onChange={handleTimeRangeChange}
      />

      <div className="h-6" />

      <Button
        backgroundColor="bg-black"
        fontColor="text-white"
        label="다음"
        onClick={onNext}
        size="lg"
      />
    </div>
  )
}
