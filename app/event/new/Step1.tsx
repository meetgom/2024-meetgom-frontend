import { Button } from '@/components/Button/Button'
import { SelectBox } from '@/components/SelectBox/SelectBox'
import { TextInputBox } from '@/components/TextInputBox/TextInputBox'
import { useEventStore } from '@/store/useEventStore'
import { EventSheet } from '@/types/eventSheet'
import React from 'react'

export default function Step1({ onNext }: { onNext: () => void }) {
  const { eventState, setEventField } = useEventStore()

  const handleEventNameChange = (value: string) => {
    setEventField('name', value)
  }

  const handleTimeZoneChange = (value: string) => {
    setEventField('timeZone', value)
  }

  return (
    <div>
      <TextInputBox
        title="이벤트 시트 이름"
        placeholder="제목없는 이벤트"
        onChange={(e) => handleEventNameChange(e.target.value)}
      />
      <div className="h-6" />
      <SelectBox
        enableSearch
        onChange={handleTimeZoneChange}
        options={[
          'Asia/Tokyo',
          'Asia/Tomsk',
          'Asia/Tehran',
          'Asia/Tbilisi',
          'Asia/Tashkent',
          'Asia/Taipei',
          'Asia/Sydney',
          'Asia/Srednekolymsk',
          'Asia/Singapore',
          'Asia/Seoul',
        ]}
        placeholder="선택하세요"
        title="기준시"
      />
      <div className="h-2" />
      <p className="text-[12px] font-normal text-subtitle">
        사용자의 위치 정보를 기반으로 기준 시간대가 설정되었습니다.
      </p>

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
