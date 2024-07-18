'use client'

import Link from 'next/link'
import { IconTextButton } from './components/IconTextButton/IconTextButton'
import { Divider } from './shared/components/Divider/Divider'
import { WideButton } from './shared/components/WideButton/WideButton'
import { Button } from './shared/components/Button/Button'

export default function Home() {
  return (
    <>
      <Link href="/event/new">
        <IconTextButton
          icon="/create_event.svg"
          alt="icon"
          title="빠르게 만들기"
          label="로그인없이 이벤트 링크 또는 코드로 일정을 생성하고 관리하세요."
        />
      </Link>

      <IconTextButton
        icon="/join_with_code.svg"
        alt="join event icon"
        title="코드로 참여하기"
        label="로그인 없이 가지고 있는 링크 또는 코드로 이벤트에 참여하세요."
      />
      <Divider label="또는" />
      <Button
        backgroundColor="bg-black"
        fontColor="text-white"
        label="로그인"
        size="lg"
      />
    </>
  )
}
