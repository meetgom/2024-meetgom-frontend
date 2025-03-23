/**
 * 서버 API의 공통 응답 형식
 */
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
