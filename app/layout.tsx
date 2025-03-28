import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '../components/Header/Header'
import ClientProviders from './ClientProviders'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <div className="flex min-h-screen flex-col items-center">
            <Header />
            <div className="flex flex-col items-center justify-center w-full my-auto">
              {children}
            </div>
          </div>
        </ClientProviders>
      </body>
    </html>
  )
}
