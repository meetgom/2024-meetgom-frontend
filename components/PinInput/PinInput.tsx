import React, { useState, useRef, useEffect } from 'react'

const PinInput = ({
  pinLength = 6,
  onComplete,
}: {
  pinLength?: number
  onComplete?: (pin: string) => void
}) => {
  const [pinCode, setPinCode] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  // 🔹 컴포넌트가 처음 마운트될 때 자동으로 focus
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleGridClick = () => {
    inputRef.current?.focus()
    setActiveIndex(pinCode.length)
  }

  interface PinChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handlePinChange = (e: PinChangeEvent) => {
    const input = e.target.value.replace(/\D/g, '')
    setPinCode(input.slice(0, pinLength))
    setActiveIndex(input.length)

    if (input.length === pinLength) {
      setTimeout(() => onComplete?.(input), 200) // UX를 부드럽게 하기 위해 200ms 대기
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <div
        onClick={handleGridClick}
        className="grid grid-cols-6 gap-2 cursor-text"
      >
        {[...Array(pinLength)].map((_, index) => (
          <div
            key={index}
            className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl 
              ${index === activeIndex ? 'border-2 border-blue drop-shadow-sm' : 'border border-neutral-200'} 
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
