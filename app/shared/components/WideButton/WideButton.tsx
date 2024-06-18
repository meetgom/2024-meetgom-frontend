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
      className={`wide-button ${backgroundColor} ${fontColor} font-nunito-sans font-semibold rounded-full cursor-pointer inline-block leading-none py-4 px-8`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  )
}
