import { CalendarProps } from '@/types/calendar'
import { cn } from '@/utils/classNameUtils'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import React from 'react'
import CalendarTooltip from '../CalendarTooltip/CalendarTooltip'

const Calendar: React.FC<CalendarProps> = ({
  eventSheetTimeSlots,
  timeSlotTable,
}) => {
  // 첫 번째 시간대의 startTime과 endTime을 기준으로 시간 범위 설정
  const [startHour, startMinute] = eventSheetTimeSlots[0].startTime
    .split(':')
    .map(Number)
  const [endHour, endMinute] = eventSheetTimeSlots[0].endTime
    .split(':')
    .map(Number)

  // 시작 시간부터 종료 시간까지의 시간 배열 생성
  const hours = Array.from(
    { length: endHour - startHour + 1 },
    (_, i) => startHour + i
  )
  const dates = [
    ...new Set(eventSheetTimeSlots.map((slot) => slot.date)),
  ].sort()

  const getParticipationLevel = (ratio: number) => {
    if (ratio >= 70) return 'high'
    if (ratio >= 30) return 'medium'
    return 'low'
  }

  const getTimeSlotForDateAndHour = (date: string, hour: number) => {
    return timeSlotTable.find((slot) => {
      const slotHour = parseInt(slot.startTime.split(':')[0])
      return slot.date === date && slotHour === hour
    })
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px] relative">
        {/* 날짜 헤더 */}
        <div className="flex border-b border-[#EFEFEF]">
          <div className="w-16" /> {/* 시간 열을 위한 빈 공간 */}
          {dates.map((date) => {
            const dayOfWeek = format(new Date(date), 'EEE', { locale: ko })
            const dayOfDate = format(new Date(date), 'd')
            return (
              <div
                key={dayOfDate}
                className="flex-1 flex p-2 items-center text-center border-l border-[#EFEFEF]"
              >
                <div className="text-[16px] text-[#959595] pr-2">
                  {dayOfWeek}
                </div>
                <div className="text-[16px]">{dayOfDate}</div>
              </div>
            )
          })}
        </div>

        {/* 시간대 그리드 */}
        <div>
          {hours.map((hour) => (
            <div key={hour} className="flex">
              <div className="w-16 py-2 text-right pr-2 text-xs text-[#959595]">
                {`${hour.toString().padStart(2, '0')}`}
              </div>
              {dates.map((date) => {
                const timeSlot = getTimeSlotForDateAndHour(date, hour)
                const hasParticipants =
                  timeSlot && timeSlot.participants.length > 0
                const participationLevel = timeSlot
                  ? getParticipationLevel(timeSlot.availableParticipantsRatio)
                  : ''

                return (
                  <div
                    key={`${date}-${hour}`}
                    className={cn(
                      'flex-1 h-12 border-l border-t border-[#EFEFEF] relative group',
                      hasParticipants && 'bg-[#FF6B00]/5',
                      hasParticipants &&
                        'before:absolute before:left-0 before:top-0 before:h-full before:w-[3px]',
                      participationLevel === 'low' && 'before:bg-orange-200',
                      participationLevel === 'medium' && 'before:bg-orange-400',
                      participationLevel === 'high' && 'before:bg-orange-600'
                    )}
                  >
                    {hasParticipants && (
                      <>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-xs [text-shadow:_-2px_0_#fff,_0_-2px_#fff,_2px_0_#fff,_0_2px_#fff]">
                          +{timeSlot.participants.length}
                        </div>
                        {/* NOTE: Alert 컴포넌트의 z-index 가 50 이므로, tooltip 이 Alert 위에 표시되도록 60으로 설정 */}
                        <div className="absolute inset-0 z-[60] opacity-0 group-hover:opacity-100">
                          <CalendarTooltip timeSlot={timeSlot} />
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calendar
