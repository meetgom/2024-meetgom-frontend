import Header from '@/components/Header/Header'

export default function HeaderCenteredLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="flex flex-col items-center justify-center w-full my-auto">
        {children}
      </div>
    </div>
  )
}
