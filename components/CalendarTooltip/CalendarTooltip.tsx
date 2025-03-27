import { TimeSlot } from '@/types/timeSlot'
import { cn } from '@/utils/classNameUtils'
import { formatDateWithDayOfWeek } from '@/utils/dateUtils'
import React from 'react'

interface CalendarTooltipProps {
  timeSlot: TimeSlot
  className?: string
}

const CalendarTooltip: React.FC<CalendarTooltipProps> = ({
  timeSlot,
  className,
}) => {
  const {
    date,
    dayOfWeek,
    startTime,
    endTime,
    availableParticipantsRatio,
    availableParticipantsCount,
    participants,
  } = timeSlot

  return (
    <div
      className={cn(
        'absolute bg-white rounded-[3px] py-2 px-3 shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-[opacity,visibility] duration-200 z-[1000]',
        className
      )}
    >
      <div className="text-xs font-medium">
        ▪︎ {formatDateWithDayOfWeek(date, dayOfWeek)}
      </div>
      <div className="h-[1px] bg-gray-100 my-2" />
      <div className="flex flex-col gap-2 text-xs font-normal text-[#6A6A6A]">
        <span>
          {startTime} - {endTime}
        </span>
        <span>
          {availableParticipantsCount}명 중 {participants?.length}명 참석 (
          {availableParticipantsRatio}%)
        </span>
      </div>
    </div>
  )
}

export default CalendarTooltip
