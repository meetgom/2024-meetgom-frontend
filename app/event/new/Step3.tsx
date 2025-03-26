import { useState } from 'react'
import PinInput from '@/components/PinInput/PinInput'
import { useEventStore } from '@/store/useEventStore'

export default function Step3({ onNext }: { onNext: () => void }) {
  const { eventState, setEvent, setEventField } = useEventStore()

  const [firstPin, setFirstPin] = useState<string | null>(null)

  const handleFirstPinComplete = (pin: string) => {
    setFirstPin(pin) // 첫 번째 PIN 저장
    setEventField('pinCode', pin) // 전역 상태에 저장
  }

  const handleConfirmPinComplete = (pin: string) => {
    if (pin === firstPin) {
      alert('PIN이 확인되었습니다!')
      onNext() // 다음 단계로 진행
    } else {
      alert('입력한 PIN이 일치하지 않습니다. 다시 입력해주세요.')
      setFirstPin(null) // 다시 첫 번째 PIN 입력 단계로 이동
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-2xl font-semibold text-center">
        {firstPin === null
          ? '암호로 사용할 6자리 숫자를 입력하세요'
          : 'PIN을 다시 입력하세요'}
      </h1>

      {/* key를 다르게 설정해서 PinInput을 강제 초기화 */}
      <PinInput
        key={firstPin === null ? 'first' : 'confirm'}
        pinLength={6}
        onComplete={
          firstPin === null ? handleFirstPinComplete : handleConfirmPinComplete
        }
      />
    </div>
  )
}
