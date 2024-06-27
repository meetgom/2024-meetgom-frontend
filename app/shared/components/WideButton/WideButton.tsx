import React from 'react'

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
      className={`${backgroundColor} ${fontColor} font-Pretendard font-semibold rounded-lg inline-block leading-none w-80 py-4 px-8`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  )
}
