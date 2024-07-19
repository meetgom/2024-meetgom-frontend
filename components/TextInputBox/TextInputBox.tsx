import React from 'react'

interface TextInputBoxProps {
  title: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInputBox = ({
  title,
  placeholder,
  onChange,
  ...props
}: TextInputBoxProps) => {
  return (
    <div>
      <div className="text-sm text-[#959595] mb-1 ml-2">{title}</div>
      <input
        type="text"
        className="bg-white text-black border border-[#EFEFEF] placeholder:text-black focus:outline-black rounded-md inline-block leading-none w-80 h-12 p-3"
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}
