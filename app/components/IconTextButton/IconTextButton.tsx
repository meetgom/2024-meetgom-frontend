import Image from 'next/image'

interface IconTextButtonProps {
  icon: string
  alt: string
  title: string
  label: string
  onClick?: () => void
}

export const IconTextButton = ({
  icon = '/carete_event.svg',
  alt = 'icon',
  title,
  label = 'default label',
  onClick,
  ...props
}: IconTextButtonProps) => {
  return (
    <button
      className="flex flex-col w-80 border-2 border-[#EFEFEF] rounded-lg p-6"
      onClick={onClick}
      {...props}
    >
      <Image src={icon} alt={alt} width={40} height={40} />
      <div className="font-bold text-2xl mt-4">{title}</div>
      <div className="text-base text-[#959595] text-left">{label}</div>
    </button>
  )
}
