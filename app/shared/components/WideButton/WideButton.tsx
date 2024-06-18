import React from 'react'
import './WideButton.css'

interface WideButtonProps {
  backgroundColor?: string
  fontColor?: string
  label: string
  onClick?: () => void
}

export const WideButton = ({
  backgroundColor,
  fontColor,
  label,
  ...props
}: WideButtonProps) => {
  return (
    <button type="button" className="wide-button" {...props}>
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
          color: ${fontColor};
        }
      `}</style>
    </button>
  )
}
