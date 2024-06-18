import React from 'react'
import './WideButton.css'

interface WideButtonProps {
  backgroundColor?: string
  fontColor?: string
  label: string
  onClick?: () => void
}

export const WideButton = ({
  backgroundColor = 'bg-gray-200', // Default Tailwind background color class
  fontColor = 'text-black', // Default Tailwind text color class
  label,
  onClick,
  ...props
}: WideButtonProps) => {
  return (
    <button
      type="button"
      className={`wide-button ${backgroundColor} ${fontColor} py-2 px-4 rounded`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  )
}
