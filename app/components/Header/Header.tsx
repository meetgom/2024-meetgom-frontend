'use client'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className="flex w-full justify-between items-center bg-white px-12 py-9">
      {/* add svg logo */}
      <Image src="/meetgom_logo.svg" alt="Logo" width={129} height={22} />
    </header>
  )
}

export default Header
