import { Alert } from '@/components/Alert/Alert'
import { Button } from '@/components/Button/Button'
import { TitleBadge } from '@/components/TitleBadge/TitleBadge'
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
    <div className="flex justify-between px-4 py-3 items-center w-[680px] h-20 bg-[#F9F9F9] rounded-md">
      <div>
        <TitleBadge title="참가 링크" icon="/images/follow_the_signs.svg" />
        <div className=" font-bold mt-2">{linkUrl}</div>
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
