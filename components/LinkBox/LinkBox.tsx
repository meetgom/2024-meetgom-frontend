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

  const handleCopy = () => {
    navigator.clipboard.writeText(linkUrl)
    showAlert()
  }

  const handleShare = () => {
    alert('공유')
    // 공유 기능 구현
  }

  return (
    <div className="flex flex-col gap-2 px-4 py-3 border border-neutral-200 w-full bg-[#F9F9F9] rounded-md">
      <div className="flex items-center justify-between">
        <TitleBadge title="참가 링크" icon="/images/follow_the_signs.svg" />
        <div className="flex items-center gap-2">
          <Button
            backgroundColor="bg-white"
            fontColor="text-black"
            borderColor="border-[#EFEFEF]"
            label="복사"
            onClick={handleCopy}
          />
          <Button
            backgroundColor="bg-black"
            fontColor="text-white"
            label="공유"
            onClick={handleShare}
          />
        </div>
      </div>
      <div>{linkUrl}</div>
      <Alert visible={alertVisible} message="링크가 복사되었습니다." />
    </div>
  )
}
