import { eventState } from '@/store/eventState'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'

export default function Step4({ onNext }: { onNext: () => void }) {
  const [formState, setFormState] = useRecoilState(eventState)

  useEffect(() => {
    console.log('Event Created!', formState)
    alert('Event Created!')
  }, [formState])

  return (
    <div>
      <h1>Event Created!</h1>
      {/* 이벤트 정보 출력 */}
      <div>
        <h2>Event Info</h2>
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </div>
    </div>
  )
}
