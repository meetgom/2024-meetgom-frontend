// 간단한 버튼 예제
import React from "react"

export interface ButtonProps {
  /**
   * 버튼의 색상을 지정합니다.
   */
  color?: "primary" | "secondary"
  /**
   * 버튼의 크기를 지정합니다.
   */
  size?: "small" | "medium" | "large"
  /**
   * 버튼의 레이블을 지정합니다.
   */
  label: string
  /**
   * 버튼을 비활성화합니다.
   */
  disabled?: boolean
  /**
   * 클릭 이벤트를 처리합니다.
   */
  onClick?: () => void
}

/**
 * 버튼 컴포넌트입니다.
 */
export const Button: React.FC<ButtonProps> = ({
  color = "primary",
  size = "medium",
  label,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button button-${color} button-${size}`}
      disabled={disabled}
    >
      {label}
    </button>
  )
}
