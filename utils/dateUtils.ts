export const formatDateToString = (date: Date): string => {
  return date.toISOString().slice(0, 16) // "YYYY-MM-DDTHH:mm" 형식
}

export const parseStringToDate = (dateString: string): Date => {
  return new Date(dateString)
}
