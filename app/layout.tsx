'use client'

import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  )
}
