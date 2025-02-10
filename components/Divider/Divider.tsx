import React from 'react'

interface DividerProps {
  label?: string
}

export const Divider = ({ label }: DividerProps) => {
  return (
    // 실제 사용할 떄는 가장 바깥쪽 div를 제거하고 사용해야함.
    // 가장 바깥쪽 div는 스토리북에서 컴포넌트를 렌더링할 때 필요한 요소

    <div className="flex items-center justify-between my-4">
      <hr className="border-t border-[#EFEFEF] flex-grow" />
      {label && <span className="text-subtitle mx-4">{label}</span>}
      <hr className="border-t border-[#EFEFEF] flex-grow" />
    </div>
  )
}
