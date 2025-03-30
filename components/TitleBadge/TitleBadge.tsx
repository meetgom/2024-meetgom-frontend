import Image from 'next/image'
import Reaact from 'react'

interface TitleBadgeProps {
  backgroundColor?: string
  title: string
  icon?: string
}

export const TitleBadge: React.FC<TitleBadgeProps> = ({
  backgroundColor = 'bg-[#0085FF]',
  title,
  icon = '/images/follow_the_signs.svg',
}) => {
  return (
    <div
      className={`flex justify-between items-center w-20 h-7 p-1 px-2 ${backgroundColor} rounded-sm`}
    >
      <Image className="" src={icon} alt="check icon" width={16} height={16} />
      <div className="text-white text-sm font-bold whitespace-nowrap">
        {title}
      </div>
    </div>
  )
}
