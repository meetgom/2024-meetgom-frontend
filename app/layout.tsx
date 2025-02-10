'use client'

import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import Header from '../components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <div className="flex min-h-screen flex-col items-center">
              <Header />
              <div className="flex flex-col items-center justify-center w-full my-auto space-y-4 px-4 md:px-24 lg:px-48">
                {children}
              </div>
            </div>
          </RecoilRoot>
        </QueryClientProvider>
      </body>
    </html>
  )
}
