import React, { useState } from 'react'

interface SelectBoxProps {
  title: string
  placeholder: string
  options: string[]
  enableSearch?: boolean
  onChange: (value: string) => void
}

export const SelectBox: React.FC<SelectBoxProps> = ({
  title,
  placeholder,
  options,
  enableSearch = false,
  onChange,
  ...props
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleSelectClick = () => {
    setIsDropdownVisible(!isDropdownVisible)
  }

  const handleSearchChange = (term: string) => {
    setSearchTerm(term)
    if (term.trim() === '') {
      setFilteredOptions(options)
    } else {
      const filtered = options.filter((option) =>
        option.toLowerCase().includes(term.toLowerCase())
      )
      setFilteredOptions(filtered)
    }
  }

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setIsDropdownVisible(false)
    setSearchTerm('')
    onChange(option)
  }

  return (
    <div className="relative w-full">
      <div className="text-sm text-[#959595] mb-1 ml-2">{title}</div>
      <div
        className={`bg-white text-black border border-[#EFEFEF] placeholder:text-black rounded-md leading-none w-full h-12 p-3 flex items-center justify-between cursor-pointer focus-within:outline focus-within:outline-black`}
        onClick={handleSelectClick}
      >
        {selectedOption || placeholder}
        <span className="ml-2">&#9662;</span>
      </div>
      <div
        className={`absolute top-full left-0 right-0 bg-white border border-[#EFEFEF] rounded-md mt-1 z-10 transition-opacity duration-300 ease-in-out ${isDropdownVisible ? 'opacity-100 max-h-60' : 'opacity-0 max-h-0'} overflow-auto`}
      >
        {enableSearch && (
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(event) => handleSearchChange(event.target.value)}
            className="bg-white text-black border-b border-[#EFEFEF] placeholder:text-black focus:outline-hidden w-full h-12 p-3 mb-2"
          />
        )}
        {filteredOptions.map((option, index) => (
          <div
            key={index}
            className="p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  )
}
