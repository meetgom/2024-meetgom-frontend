interface TextInputBoxProps {
  title: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}

export const TextInputBox = ({
  title,
  placeholder,
  value = '',
  onChange,
  ...props
}: TextInputBoxProps) => {
  return (
    <div>
      <div className="text-sm text-[#959595] mb-1 ml-2">{title}</div>
      <input
        type="text"
        className="bg-white text-black border border-[#EFEFEF] placeholder:text-black focus:outline-black rounded-md inline-block leading-none w-full h-12 p-3"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
        {...props}
      />
    </div>
  )
}
