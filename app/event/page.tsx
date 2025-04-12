'use client'

import { Button } from '@/components/Button/Button'
import Calendar from '@/components/Calendar/Calendar'
import Checkbox from '@/components/CheckBox/CheckBox'
import { Divider } from '@/components/Divider/Divider'
import EventSaveBar from '@/components/EventSaveBar/EventSaveBar'
import { LinkBox } from '@/components/LinkBox/LinkBox'
import TextBox from '@/components/TextBox/TextBox'
import { TextInputBox } from '@/components/TextInputBox/TextInputBox'
import TimeTextBox from '@/components/TimeTextBox/TimeTextBox'
import { mockEventSheetData } from '@/mocks/eventSheetData'
import { useState } from 'react'

const EventPage = () => {
  // 변경 내용이 있을 때 저장 바 보여줄지 말지
  const [isChanged, setIsChanged] = useState<boolean>(false)

  const [eventSheetName, setEventSheetName] =
    useState<string>('타임데스크 21주차 정기 회의')
  // API로 받아온 이벤트 이름으로 초기값 세팅

  // 응답 받기 상태
  const [enableResponse, setEnableResponse] = useState<boolean>(false)
  const [enableResponseDeadline, setEnableResponseDeadline] =
    useState<boolean>(false)

  const handleTest = () => {
    console.log('eventSheetName : ', eventSheetName)
    console.log('enableResponse : ', enableResponse)
    console.log('enableResponseDeadline : ', enableResponseDeadline)
  }

  // 저장 바 상태 초기화 핸들러
  const resetChanges = () => {
    setIsChanged(false)
    setEventSheetName('타임데스크 21주차 정기 회의')
    setEnableResponse(false)
    setEnableResponseDeadline(false)
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-15 gap-8 min-w-125">
      <div className="w-full flex flex-col gap-4 lg:w-95 min-w-95">
        <div className="text-3xl font-medium">이벤트 시트 관리</div>

        <Divider />

        {/* 이벤트 시트 이름 */}
        {/* 수정 가능 */}
        <TextInputBox
          title="이벤트 시트 이름"
          placeholder="이벤트 시트 이름을 입력해주세요."
          onChange={(value) => {
            setEventSheetName(value)
            setIsChanged(true)
          }}
          value={eventSheetName}
        />

        {/* 유형 */}
        <TextBox label="유형" value="날짜 지정" />

        {/* 날짜 */}
        <TextBox label="날짜" value="2024/04/23" />

        {/* 시간 */}
        <TimeTextBox
          label="시간"
          startTime="09:30"
          endTime="22:30"
          timezone={{ region: 'Asia', timezone: 'Tokyo' }}
        />

        {/* 응답받기 */}
        <div className="flex flex-col">
          <span className="text-sm text-[#959595] mb-1 ml-2">응답받기</span>
          <div className="flex flex-col gap-2 ml-2">
            <Checkbox
              label="이벤트 시트 기록을 허용합니다."
              checked={enableResponse}
              onChange={() => {
                setEnableResponse(!enableResponse)
                setIsChanged(true)
              }}
            />
            <Checkbox
              label="시트 기록 마감 시간을 지정합니다."
              checked={enableResponseDeadline}
              onChange={() => {
                setEnableResponseDeadline(!enableResponseDeadline)
                setIsChanged(true)
              }}
            />
          </div>
        </div>

        {/* 참가 링크 */}
        <LinkBox linkUrl="meetgom.com/abc-def-xyz" />

        {/* 테스트 버튼 */}
        <Button label="테스트 버튼" onClick={handleTest} size="md" />
      </div>
      <Calendar
        eventSheetTimeSlots={mockEventSheetData.data.eventSheetTimeSlots}
        timeSlotTable={mockEventSheetData.data.timeSlotTable}
      />

      {/* 저장 바 */}
      {isChanged && (
        <EventSaveBar onCancel={resetChanges} onSave={resetChanges} />
      )}
    </div>
  )
}

export default EventPage
