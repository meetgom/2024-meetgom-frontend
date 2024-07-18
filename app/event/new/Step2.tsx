import { Button } from '@/app/shared/components/Button/Button'
import { SelectBox } from '@/app/shared/components/SelectBox/SelectBox'
import { TimeRangeBox } from '@/app/shared/components/TimeRangeBox/TimeRangeBox'
import { WideButton } from '@/app/shared/components/WideButton/WideButton'
import React from 'react'

export default function Step2() {
  return (
    <div>
      <TimeRangeBox title="시간" placeholder="부터" onChange={() => {}} />
      <div className="h-6" />
      <SelectBox
        enableSearch
        onChange={() => {}}
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
        title="유형"
      />
      <div className="h-12" />
      <Button
        backgroundColor="bg-black"
        fontColor="text-white"
        label="이벤트 생성"
        onClick={() => {}}
        size="lg"
      />
    </div>
  )
}
