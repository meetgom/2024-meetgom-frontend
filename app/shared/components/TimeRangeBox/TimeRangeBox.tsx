import React, { useState } from 'react'
import { Button } from '../Button/Button'

interface TimeRangeBoxProps {
  title: string
  placeholder: string
  onChange: (startTime: string, endTime: string) => void
}

const generateHourOptions = () => {
  const options = []
  for (let i = 0; i <= 23; i++) {
    options.push(i < 10 ? `0${i}` : `${i}`)
  }
  return options
}

const generateMinuteOptions = () => {
  const options = []
  for (let i = 0; i <= 55; i += 5) {
    options.push(i < 10 ? `0${i}` : `${i}`)
  }
  return options
}

export const TimeRangeBox = ({
  title,
  placeholder,
  onChange,
  ...props
}: TimeRangeBoxProps) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const [startHour, setStartHour] = useState('09')
  const [startMinute, setStartMinute] = useState('30')
  const [endHour, setEndHour] = useState('22')
  const [endMinute, setEndMinute] = useState('30')

  const [tempStartHour, setTempStartHour] = useState(startHour)
  const [tempStartMinute, setTempStartMinute] = useState(startMinute)
  const [tempEndHour, setTempEndHour] = useState(endHour)
  const [tempEndMinute, setTempEndMinute] = useState(endMinute)

  const hours = generateHourOptions()
  const minutes = generateMinuteOptions()

  const handleDropdownVisibility = (visible: boolean) => {
    if (visible) {
      setTempStartHour(startHour)
      setTempStartMinute(startMinute)
      setTempEndHour(endHour)
      setTempEndMinute(endMinute)
    }
    setIsDropdownVisible(visible)
  }

  return (
    <div className="flex flex-col">
      <div className="text-sm text-[#959595] mb-1 ml-2">{title}</div>
      <button
        className="px-4 py-2 w-80 h-12 rounded border border-[#EFEFEF] rounded-md px-3"
        onClick={() => handleDropdownVisibility(!isDropdownVisible)}
      >
        <div className="flex items-center justify-between">
          <div className="w-32 flex justify-start">
            {startHour}시 {startMinute}분
          </div>
          <div className="text-[#959595] text-sm">{placeholder}</div>
          <div className="w-32 flex justify-end">
            {endHour}시 {endMinute}분
          </div>
        </div>
      </button>
      {isDropdownVisible && (
        <div className="shadow mt-2 w-80 rounded border border-[#EFEFEF] rounded-md">
          <div className="h-40 flex justify-between px-12">
            <div className="flex">
              <div className="mr-1 overflow-y-scroll h-40 scrollbar-hide">
                {hours.map((hour) => (
                  <div
                    key={`start-hour-${hour}`}
                    className={`w-10 h-8 items-center flex justify-center px-1 rounded my-1 cursor-pointer ${hour === tempStartHour ? 'text-[#00C27C] bg-[#00C27C]/10' : 'text-[#B2B2B2]'}`}
                    onClick={() => setTempStartHour(hour)}
                  >
                    {hour}
                  </div>
                ))}
              </div>

              <div className="overflow-y-scroll h-40 scrollbar-hide">
                {minutes.map((minute) => (
                  <div
                    key={`start-minute-${minute}`}
                    className={`w-10 h-8 items-center flex justify-center px-1 rounded my-1 cursor-pointer ${minute === tempStartMinute ? 'text-[#00C27C] bg-[#00C27C]/10' : 'text-[#B2B2B2]'}`}
                    onClick={() => setTempStartMinute(minute)}
                  >
                    {minute}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex">
              <div className="mr-1 overflow-y-scroll h-40 scrollbar-hide">
                {hours.map((hour) => (
                  <div
                    key={`end-hour-${hour}`}
                    className={`w-10 h-8 items-center flex justify-center px-1 rounded my-1 cursor-pointer ${hour === tempEndHour ? 'text-[#00C27C] bg-[#00C27C]/10' : 'text-[#B2B2B2]'}`}
                    onClick={() => setTempEndHour(hour)}
                  >
                    {hour}
                  </div>
                ))}
              </div>

              <div className="overflow-y-scroll h-40 scrollbar-hide">
                {minutes.map((minute) => (
                  <div
                    key={`end-minute-${minute}`}
                    className={`w-10 h-8 items-center flex justify-center px-1 rounded my-1 cursor-pointer ${minute === tempEndMinute ? 'text-[#00C27C] bg-[#00C27C]/10' : 'text-[#B2B2B2]'}`}
                    onClick={() => setTempEndMinute(minute)}
                  >
                    {minute}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr />
          <div className="h-12 flex items-center justify-between px-3">
            <Button
              backgroundColor="bg-white"
              fontColor="text-black"
              borderColor="border-[#EFEFEF]"
              label="취소"
              onClick={() => handleDropdownVisibility(false)}
            />
            <Button
              backgroundColor="bg-black"
              fontColor="text-white"
              borderColor="border-black"
              label="확인"
              onClick={() => {
                const start = new Date()
                start.setHours(parseInt(tempStartHour))
                start.setMinutes(parseInt(tempStartMinute))

                const end = new Date()
                end.setHours(parseInt(tempEndHour))
                end.setMinutes(parseInt(tempEndMinute))

                const diff = (end.getTime() - start.getTime()) / 60000

                if (diff < 0) {
                  alert('종료 시간이 시작 시간보다 빠릅니다.')
                } else if (diff < 30) {
                  alert(
                    '시작 시간과 종료 시간의 차이는 30분 이상이어야 합니다.'
                  )
                } else {
                  setIsDropdownVisible(false)
                  setStartHour(tempStartHour)
                  setStartMinute(tempStartMinute)
                  setEndHour(tempEndHour)
                  setEndMinute(tempEndMinute)
                  onChange(
                    `${tempStartHour}:${tempStartMinute}`,
                    `${tempEndHour}:${tempEndMinute}`
                  )
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
