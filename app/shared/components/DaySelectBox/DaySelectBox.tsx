// 요일을 선택할 수 있는 컴포넌트

import { useState } from 'react'

interface DaySelectBoxProps {
  title: string
  onChange: (days: string[]) => void
}

export const DaySelectBox: React.FC<DaySelectBoxProps> = ({
  title,
  onChange,
}) => {
  const [selectedDays, setSelectedDays] = useState<string[]>([])
  const weekDays: { [key: string]: string }[] = [
    { MON: '월' },
    { TUE: '화' },
    { WED: '수' },
    { THU: '목' },
    { FRI: '금' },
    { SAT: '토' },
    { SUN: '일' },
  ]

  const handleDayClick = (day: string) => {
    const newSelectedDays = selectedDays.includes(day)
      ? selectedDays.filter((selectedDay) => selectedDay !== day)
      : [...selectedDays, day]

    setSelectedDays(newSelectedDays)
    onChange(newSelectedDays)
  }

  return (
    <div>
      <div className="text-sm text-[#959595] mb-1 ml-2">{title}</div>{' '}
      <div className="flex justify-between w-80 mx-auto">
        {weekDays.map((weekDay) => {
          const day = Object.keys(weekDay)[0]
          const dayName = weekDay[day]
          return (
            <div
              key={day}
              className={`w-[43px] h-12 flex justify-center items-center rounded-md border border-[#EFEFEF] cursor-pointer ${
                selectedDays.includes(day)
                  ? 'bg-green bg-opacity-10 border-green border-opacity-10 text-green'
                  : 'bg-white text-icon border-stroke'
              }`}
              onClick={() => handleDayClick(day)}
            >
              {dayName}
            </div>
          )
        })}
      </div>
    </div>
  )
}
