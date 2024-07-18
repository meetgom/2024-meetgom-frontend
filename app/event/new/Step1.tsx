import { Button } from '@/components/Button/Button'
import { DatePicker } from '@/components/DatePicker/DatePicker'
import { DaySelectBox } from '@/components/DaySelectBox/DaySelectBox'
import { SelectBox } from '@/components/SelectBox/SelectBox'
import { TextInputBox } from '@/components/TextInputBox/TextInputBox'
import { eventState } from '@/store/eventState'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'

export default function Step1({ onNext }: { onNext: () => void }) {
  const [formState, setFormState] = useRecoilState(eventState)
  const [selectedEventType, setSelectedEventType] = useState('')

  const handleEventTypeChange = (value: string) => {
    setSelectedEventType(value)
    setFormState((prev) => ({
      ...prev,
      eventType: value === '요일별' ? 'dayOfWeek' : 'specificDate',
    }))
  }

  return (
    <div>
      <TextInputBox
        title="이벤트 이름"
        placeholder="제목없는 이벤트"
        onChange={() => {}}
      />
      <div className="h-6" />
      <SelectBox
        title="이벤트 타입"
        placeholder="선택하세요"
        options={['요일별', '특정 날짜']}
        onChange={handleEventTypeChange}
      />
      {selectedEventType === '요일별' && (
        <>
          {' '}
          <div className="h-6" />
          <DaySelectBox title="요일" onChange={() => {}} />
        </>
      )}
      {selectedEventType === '특정 날짜' && (
        <>
          {' '}
          <div className="h-6" />
          <DatePicker
            title="날짜"
            placeholder="날짜를 선택해주세요"
            onChange={() => {}}
          />
        </>
      )}
      <div className="h-12" />
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
