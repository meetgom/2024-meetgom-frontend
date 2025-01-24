import React from 'react'

interface ButtonProps {
  backgroundColor?: string
  fontColor?: string
  borderColor?: string
  label: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  icon?: string
}

const sizeClasses = {
  sm: 'w-10 h-7 text-xs p-2 rounded',
  md: 'w-44 h-12 px-4 py-2 rounded-md',
  lg: 'w-80 py-4 px-8 text-base rounded-lg',
}

export const Button = ({
  backgroundColor = 'bg-black',
  fontColor = 'text-white',
  borderColor = 'border-black',
  label,
  onClick,
  size = 'sm',
  icon = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`${backgroundColor} ${fontColor} border ${borderColor} ${sizeClasses[size]} leading-none inline-block hover:opacity-80 hover:shadow duration-300`}
      onClick={onClick}
      {...props}
    >
      <div className="flex justify-center whitespace-nowrap">
        {icon && <img className="mr-2" src={icon} alt="" />}
        {label}
      </div>
    </button>
  )
}
