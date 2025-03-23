'use client'

import { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import { useRecoilState } from 'recoil'
import { eventState } from '@/store/eventState'

export default function NewEvent() {
  const [step, setStep] = useState(1)
  const [formState, setFormState] = useRecoilState(eventState)

  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNextStep} />}
      {step === 2 && <Step2 onNext={handleNextStep} />}
      {step === 3 && <Step3 onNext={handleNextStep} />}
      {step === 4 && <Step4 onNext={handleNextStep} />}
    </div>
  )
}
