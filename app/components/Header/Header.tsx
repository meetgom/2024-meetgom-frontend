'use client'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="flex fixed w-full justify-between items-center bg-white px-4 md:px-12 py-6 md:py-9">
      <Image src="/meetgom_logo.svg" alt="Logo" width={129} height={22} />
    </header>
  )
}

export default Header
