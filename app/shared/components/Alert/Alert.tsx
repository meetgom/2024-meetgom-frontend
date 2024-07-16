import React from 'react'

interface AlertProps {
  message?: string
  backgroundColor?: string
  visible: boolean
  icon?: string
}

export const Alert: React.FC<AlertProps> = ({
  message = 'default alert message',
  backgroundColor = 'bg-black',
  visible,
  icon = 'check.svg', // Add a default value for the 'icon' prop
}) => {
  return (
    <div
      className={`flex items-center p-4 h-12 ${backgroundColor} rounded-lg transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img className="mr-2" src={icon} alt="check icon" />
      <div className="font-Pretendard text-white">{message}</div>
    </div>
  )
}
