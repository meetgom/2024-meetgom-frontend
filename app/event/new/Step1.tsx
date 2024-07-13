import { DatePicker } from '@/app/shared/components/DatePicker/DatePicker'
import { DaySelectBox } from '@/app/shared/components/DaySelectBox/DaySelectBox'
import { SelectBox } from '@/app/shared/components/SelectBox/SelectBox'
import { TextInputBox } from '@/app/shared/components/TextInputBox/TextInputBox'
import { WideButton } from '@/app/shared/components/WideButton/WideButton'
import { eventState } from '@/app/shared/store/eventState'
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
      <WideButton
        backgroundColor="bg-black"
        fontColor="text-white"
        label="다음"
        onClick={onNext}
      />
    </div>
  )
}
