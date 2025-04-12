interface TextBoxProps {
  label: string
  value: string
}

const TextBox = ({ label, value }: TextBoxProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-sm text-[#959595] mb-1 ml-2">{label}</div>
      <div className="bg-white text-black border border-[#EFEFEF] rounded-md w-full h-12 p-3 flex items-center">
        {value}
      </div>
    </div>
  )
}

export default TextBox
