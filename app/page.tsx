'use client'

import Link from 'next/link'
import { Button } from '../components/Button/Button'

export default function Home() {
  return (
    <>
      <p className="text-4xl font-medium">
        이벤트를 가장 쉽고 빠르게 관리하는 방법
      </p>

      <p className="text-lg text-subtitle text-center">
        밋곰에서 이벤트를 만들고 참여자들에게 공유하세요. <br />
        다양한 시간대를 이용하는 참여자 관리가 더욱 쉬워집니다.
      </p>

      <Link href="/event/new">
        <Button
          backgroundColor="bg-black"
          fontColor="text-white"
          label="지금 이벤트 만들기"
          size="md"
        />
      </Link>
    </>
  )
}
