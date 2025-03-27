import { TimeSlotTable } from './timeSlot'

/** EventSheet 참여자 */
export interface Participant {
  id: number
  participantName: string
  eventSheetCode: string
  user: {
    userName: string
    userType: 'STANDARD'
  }
  role: 'ADMIN'
  timeZone: string
  availableTimeSlots: TimeSlotTable
}
