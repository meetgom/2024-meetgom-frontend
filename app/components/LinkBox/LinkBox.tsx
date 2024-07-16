import React from 'react'

interface LinkBoxProps {
  title: string
  icon?: string
}

export const LinkBox: React.FC<LinkBoxProps> = ({
  title,
  icon = '/follow_the_signs.svg',
}) => {
  return (
    <div className="flex items-center p-4 h-12 bg-black rounded-lg">
      <img className="mr-2" src={icon} alt="check icon" />
      <div className="font-Pretendard text-white">{title}</div>
    </div>
  )
}
