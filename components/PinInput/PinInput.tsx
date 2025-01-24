import React, { useState, useRef } from 'react'

const PinInput = ({ pinLength = 6 }) => {
  const [pinCode, setPinCode] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleGridClick = () => {
    inputRef.current?.focus()
    setActiveIndex(pinCode.length)
  }

  interface PinChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handlePinChange = (e: PinChangeEvent) => {
    const input = e.target.value.replace(/\D/g, '')
    setPinCode(input.slice(0, pinLength))
    setActiveIndex(input.length)
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div
        onClick={handleGridClick}
        className="grid grid-cols-6 gap-2 cursor-text"
      >
        {[...Array(pinLength)].map((_, index) => (
          <div
            key={index}
            className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl 
              ${index === activeIndex ? 'border-2 border-blue drop-shadow' : 'border border-neutral-200'} 
              `}
          >
            {index < pinCode.length - 1 ? (
              <img src="/images/star.svg" alt="*" className="w-3 h-3" />
            ) : (
              pinCode[index] || ''
            )}
          </div>
        ))}
      </div>
      <input
        ref={inputRef}
        type="tel"
        inputMode="numeric"
        maxLength={pinLength}
        value={pinCode}
        onChange={handlePinChange}
        className="absolute opacity-0 w-0 h-0"
        pattern="[0-9]*"
      />
    </div>
  )
}

export default PinInput
