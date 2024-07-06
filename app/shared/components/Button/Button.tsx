import React from 'react'

interface ButtonProps {
  backgroundColor?: string
  fontColor?: string
  borderColor?: string
  label: string
  onClick?: () => void
}

export const Button = ({
  backgroundColor = 'bg-black',
  fontColor = 'text-white',
  borderColor = 'border-black',
  label,
    onClick,
    ...props
}: ButtonProps) => {
    return (
        <button
        type="button"
        className={`${backgroundColor} ${fontColor} border ${borderColor} text-xs font-Pretendard font-semibold rounded inline-block leading-none w-10 h-7 p-2`}
        onClick={onClick}
        {...props}
        >
        {label}
        </button>
    )
}