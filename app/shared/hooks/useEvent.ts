import { useRecoilState } from 'recoil'
import { eventState, EventState } from '../store/eventState'

const useEvent = () => {
  const [event, setEvent] = useRecoilState<EventState>(eventState)

  const updateEvent = (key: keyof EventState, value: any) => {
    setEvent((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return {
    event,
    updateEvent,
  }
}

export default useEvent
