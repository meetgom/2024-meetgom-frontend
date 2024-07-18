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
  icon = 'check.svg',
}) => {
  return (
    <div
      className={`fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center p-4 h-12 ${backgroundColor} rounded-lg transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <img className="mr-2" src={icon} alt="check icon" />
      <div className="text-white">{message}</div>
    </div>
  )
}
