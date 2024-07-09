import React from 'react'

interface SelectBoxProps {
    title: string
    placeholder: string
    options: string[]
    onChange: (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => void
}

export const SelectBox = ({
    title,
    placeholder,
    options,
    onChange,
    ...props
}: SelectBoxProps) => {
    return (
        <div>
            <div
                className='text-sm text-[#959595] mb-1 ml-2'>
                {title}
            </div>
            <select
                className="bg-white text-black border border-[#EFEFEF] placeholder:text-black focus:outline-black font-Pretendard font-semibold rounded-md inline-block leading-none w-80 h-12 p-3"
                onChange={onChange}
                {...props}
            >
                <option disabled hidden selected >{placeholder}</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}