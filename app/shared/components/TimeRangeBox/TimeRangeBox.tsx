import React from 'react'
import { useState } from 'react'

interface TimeRangeBoxProps {
  title: string
  placeholder: string
  onChange: (startTime: string, endTime: string) => void
}

export const TimeRangeBox = ({
  title,
  placeholder,
  onChange,
  ...props
}: TimeRangeBoxProps) => {
  const [showModal, setShowModal] = useState(false)
  const [startTime, setStartTime] = useState('00:00')
  const [endTime, setEndTime] = useState('00:00')

  const handleStartTimeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newStartTime = `${event.target.value}:${startTime.split(':')[1]}`
    setStartTime(newStartTime)
    onChange(newStartTime, endTime)
  }

  const handleStartMinuteChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newStartTime = `${startTime.split(':')[0]}:${event.target.value}`
    setStartTime(newStartTime)
    onChange(newStartTime, endTime)
  }

  const handleEndTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newEndTime = `${event.target.value}:${endTime.split(':')[1]}`
    setEndTime(newEndTime)
    onChange(startTime, newEndTime)
  }

  const handleEndMinuteChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newEndTime = `${endTime.split(':')[0]}:${event.target.value}`
    setEndTime(newEndTime)
    onChange(startTime, newEndTime)
  }

  return (
    <div>
      <div className="text-sm text-[#959595] mb-1 ml-2">{title}</div>
      <button
        className="px-4 py-2  w-80 h-12 rounded border border-[#EFEFEF] rounded-md px-3"
        onClick={() => setShowModal(true)}
      >
        <div className="flex items-center justify-between">
          <div className="ml-3">{startTime}</div>
          <div className="text-[#959595] text-sm">{placeholder}</div>
          <div className="mr-3">{endTime}</div>
        </div>
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <div className="flex">
              <div className="mr-4">
                <div className="font-bold mb-2 text-center">시작 시간</div>
                <div className="flex space-x-2">
                  <select
                    value={startTime.split(':')[0]}
                    onChange={handleStartTimeChange}
                  >
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={i.toString().padStart(2, '0')}>
                        {i.toString().padStart(2, '0')}
                      </option>
                    ))}
                  </select>
                  <select
                    value={startTime.split(':')[1]}
                    onChange={handleStartMinuteChange}
                  >
                    {Array.from({ length: 60 }, (_, i) => (
                      <option key={i} value={i.toString().padStart(2, '0')}>
                        {i.toString().padStart(2, '0')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="">
                <div className="font-bold mb-2 text-center">종료 시간</div>
                <div className="flex space-x-2">
                  <select
                    value={endTime.split(':')[0]}
                    onChange={handleEndTimeChange}
                  >
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={i.toString().padStart(2, '0')}>
                        {i.toString().padStart(2, '0')}
                      </option>
                    ))}
                  </select>
                  <select
                    value={endTime.split(':')[1]}
                    onChange={handleEndMinuteChange}
                  >
                    {Array.from({ length: 60 }, (_, i) => (
                      <option key={i} value={i.toString().padStart(2, '0')}>
                        {i.toString().padStart(2, '0')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <button
              className="w-full mt-4 px-3 py-2 bg-blue-500 text-white rounded"
              onClick={() => setShowModal(false)}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
