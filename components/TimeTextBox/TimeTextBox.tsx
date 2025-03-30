interface TimeTextBoxProps {
  label: string
  startTime: string
  endTime: string
  timezone: {
    region: string
    timezone: string
  }
}

const TimeTextBox = ({
  label,
  startTime,
  endTime,
  timezone,
}: TimeTextBoxProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-sm text-[#959595] mb-1 ml-2">{label}</div>
      <div className="bg-white border border-[#EFEFEF] rounded-md w-full h-12 p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div>{startTime}</div>
          <div className="text-gray-400">부터</div>
          <div>{endTime}</div>
        </div>
        <div className="flex items-center gap-1">
          <div>{timezone.region}</div>
          <div className="text-gray-200">/</div>
          <div>{timezone.timezone}</div>
          표준시
        </div>
      </div>
    </div>
  )
}

export default TimeTextBox
