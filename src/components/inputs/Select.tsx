import React, { FC } from 'react';

interface Option {
    value: string;
    label: string;
}
  
interface SelectProps {
    name?: string;
    id?: string;
    options: Option[];
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
}

const Select:FC<SelectProps> = ({ name = "select", id = "select", options, onChange, className = "w-[342px] h-[50px] md:max-w-[47%]" }) => {
  return (
    <div className={className}>
        <select name={name} id={id} className='w-full h-full border-[1px] outline-none rounded-lg px-2 bg-white' onChange={onChange}>
            { options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))
            }

        </select>
    </div>
  )
}

export default Select;
