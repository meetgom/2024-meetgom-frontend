'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRoot>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </RecoilRoot>
      </body>
    </html>
  )
}
