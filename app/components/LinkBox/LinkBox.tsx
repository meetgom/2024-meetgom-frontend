import { Alert } from '@/app/shared/components/Alert/Alert'
import { Button } from '@/app/shared/components/Button/Button'
import { TitleBadge } from '@/app/shared/components/TitleBadge/TitleBadge'
import React, { useState } from 'react'

interface LinkBoxProps {
  linkUrl: string
}

export const LinkBox: React.FC<LinkBoxProps> = ({ linkUrl }) => {
  const [alertVisible, setAlertVisible] = useState(false)

  const showAlert = () => {
    setAlertVisible(true)
    setTimeout(() => {
      setAlertVisible(false)
    }, 2000)
  }

  return (
    <div className="flex justify-between px-4 py-3 items-center w-[680px] h-20 bg-[#F9F9F9] shadow-inner rounded-md">
      <div>
        <TitleBadge title="참가 링크" icon="/follow_the_signs.svg" />
        <div className="font-Pretendard font-bold">{linkUrl}</div>
      </div>
      <Button
        backgroundColor="bg-white"
        fontColor="text-black"
        borderColor="border-[#EFEFEF]"
        label="복사"
        onClick={showAlert}
      />
      <Alert visible={alertVisible} message="링크가 복사되었습니다." />
    </div>
  )
}
