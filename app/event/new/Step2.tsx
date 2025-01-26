import { Button } from '@/components/Button/Button'
import { DatePicker } from '@/components/DatePicker/DatePicker'
import { DaySelectBox } from '@/components/DaySelectBox/DaySelectBox'
import { SelectBox } from '@/components/SelectBox/SelectBox'
import { TimeRangeBox } from '@/components/TimeRangeBox/TimeRangeBox'
import { eventState } from '@/store/eventState'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { format, parse, setHours, setMinutes } from 'date-fns'
import { timeStringToTime } from '../../../utils/timeUtils'

export default function Step2({ onNext }: { onNext: () => void }) {
  const [formState, setFormState] = useRecoilState(eventState)
  const [selectedEventSheetType, setSelectedEventSheetType] =
    useState('요일만 선택')

  const handleEventSheetTypeChange = (value: string) => {
    setSelectedEventSheetType(value)
    setFormState((prev) => ({
      ...prev,
      eventSheetType:
        value === '요일만 선택' ? 'RECURRING_WEEKDAYS' : 'SPECIFIC_DATES',
    }))
  }

  const handleDaySelectChange = (value: string[]) => {
    setFormState((prev) => ({
      ...prev,
      recurringWeekdays: value,
    }))
  }

  const handleTimeRangeChange = (startTimeStr: string, endTimeStr: string) => {
    setFormState((prev) => ({
      ...prev,
      startTime: timeStringToTime(startTimeStr),
      endTime: timeStringToTime(endTimeStr),
    }))
  }

  const handleDatePickerChange = (dates: {
    startDate: Date | null
    endDate: Date | null
  }) => {
    setFormState((prev) => ({
      ...prev,
      startDate: dates.startDate,
      endDate: dates.endDate,
    }))
  }

  const getFormattedApiPayload = () => {
    if (formState.specificDate?.startDate && formState.specificDate?.endDate) {
      return {
        activeStartDateTime: format(
          formState.specificDate.startDate,
          "yyyy-MM-dd'T'HH:mm"
        ),
        activeEndDateTime: format(
          formState.specificDate.endDate,
          "yyyy-MM-dd'T'HH:mm"
        ),
        timeZone: formState.timeZone,
      }
    }
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
