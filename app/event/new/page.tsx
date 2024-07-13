'use client'

import { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'

export default function NewEvent() {
  const [step, setStep] = useState(1)

  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNextStep} />}
      {step === 2 && <Step2 />}
    </div>
  )
}
