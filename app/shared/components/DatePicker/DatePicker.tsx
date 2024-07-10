import React, { useState } from 'react'
import {
  format,
  isAfter,
  isBefore,
  isEqual,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
} from 'date-fns'
import { Divider } from '../Divider/Divider'
import { Button } from '../Button/Button'
import CalendarIcon from '../../../../public/calendar_month.svg'
import Image from 'next/image'

export interface DatePickerProps {
  title: string
  placeholder: string
  onChange: (dates: { startDate: Date | null; endDate: Date | null }) => void
}

const weekDays = ['일', '월', '화', '수', '목', '금', '토']

export const DatePicker: React.FC<DatePickerProps> = ({
  title,
  placeholder,
  onChange,
}) => {
  const [calendar, setCalendar] = useState<{ year: number; month: number }>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  })
  const [dates, setDates] = useState<{
    startDate: Date | null
    endDate: Date | null
  }>({
    startDate: null,
    endDate: null,
  })
  const [tempDates, setTempDates] = useState<{
    startDate: Date | null
    endDate: Date | null
  }>({
    startDate: null,
    endDate: null,
  })
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const handleDayClick = (day: Date) => {
    if (tempDates.startDate && !tempDates.endDate) {
      if (isAfter(day, tempDates.startDate)) {
        setTempDates({ startDate: tempDates.startDate, endDate: day })
      } else {
        setTempDates({ startDate: day, endDate: tempDates.endDate })
      }
    } else {
      setTempDates({ startDate: day, endDate: null })
    }
  }

  const renderDays = () => {
    const startMonth = startOfMonth(new Date(calendar.year, calendar.month - 1))
    const endMonth = endOfMonth(startMonth)
    const startDate = startOfWeek(startMonth)
    const endDate = endOfWeek(endMonth)
    const days = []
    let day = startDate

    while (day <= endDate) {
      const currentDate = new Date(day)
      const isSelected =
        (tempDates.startDate && isEqual(currentDate, tempDates.startDate)) ||
        (tempDates.endDate && isEqual(currentDate, tempDates.endDate)) ||
        (tempDates.startDate &&
          tempDates.endDate &&
          isAfter(currentDate, tempDates.startDate) &&
          isBefore(currentDate, tempDates.endDate))
      const isCurrentMonth = isSameMonth(currentDate, startMonth)

      days.push(
        <div
          key={currentDate.toString()}
          className={`flex justify-center cursor-pointer p-2 ${isSelected ? 'bg-[#00C27C] bg-opacity-10 text-[#00C27C] rounded-lg' : isCurrentMonth ? 'bg-white text-black' : 'bg-white text-gray-400'}`}
          onClick={() => handleDayClick(currentDate)}
        >
          {format(currentDate, 'd')}
        </div>
      )
      day = addDays(day, 1)
    }
    return days
  }

  const handleCancel = () => {
    setTempDates(dates)
    setIsCalendarOpen(false)
  }

  const handleConfirm = () => {
    setDates(tempDates)
    onChange(tempDates)
    setIsCalendarOpen(false)
  }

  return (
    <div>
      <div className="text-sm text-[#959595] mb-1 ml-2">{title}</div>
      <div className="relative inline-block w-80">
        <div className="relative">
          <input
            type="text"
            className="bg-white text-black border border-[#EFEFEF] placeholder:text-black focus:outline-black font-Pretendard font-semibold rounded-md inline-block leading-none w-full h-12 p-3 pr-10"
            placeholder={placeholder}
            readOnly
            value={
              dates.startDate && dates.endDate
                ? `${format(dates.startDate, 'yyyy/MM/dd')} - ${format(dates.endDate, 'yyyy/MM/dd')}`
                : dates.startDate
                  ? format(dates.startDate, 'yyyy/MM/dd')
                  : ''
            }
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          />
          <Image
            src={CalendarIcon}
            alt="calendar"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
          />
        </div>
        {isCalendarOpen && (
          <div className="absolute bg-white border rounded-md shadow-lg mt-1 w-full z-10">
            <div className="flex justify-between px-2 pt-2">
              <button
                onClick={() =>
                  setCalendar({
                    year: calendar.year,
                    month: calendar.month - 1,
                  })
                }
                disabled={calendar.month === 1}
                className="text-[#959595]"
              >
                ＜
              </button>
              <div className="flex items-end font-semibold text-sm">
                {calendar.year}년 {calendar.month}월
              </div>
              <button
                onClick={() =>
                  setCalendar({
                    year: calendar.year,
                    month: calendar.month + 1,
                  })
                }
                disabled={calendar.month === 12}
                className="text-[#959595]"
              >
                ＞
              </button>
            </div>
            <Divider />
            <div className="grid grid-cols-7 gap-1 p-2">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-sm">
                  {day}
                </div>
              ))}
              {renderDays()}
            </div>
            <Divider />
            <div className="flex justify-between px-3 pb-3">
              <Button
                label="취소"
                backgroundColor="bg-white"
                fontColor="text-black"
                borderColor="border-white"
                onClick={handleCancel}
              />
              <Button label="확인" onClick={handleConfirm} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
