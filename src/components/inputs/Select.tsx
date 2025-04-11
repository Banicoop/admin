import React, { FC } from 'react';

export interface Option {
    value: string
    label: string
    bankName?: string;
    bankCode?: string;
    bankAccountName?: string;
    key?: string;
}
  
interface SelectProps {
    name?: string;
    id?: string;
    options: Option[];
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    className: string;
    onClick?: any;
    onSelect?: any
    isBank?: boolean
}

const Select:FC<SelectProps> = ({ name = "select", id = "select", options, onChange, className, onSelect, isBank }) => {
  return (
    <div className={className}>
        <select name={name} id={id}  className='w-full h-full border-[1px] outline-none rounded-lg px-2 bg-white' onSelect={onSelect} onChange={onChange}>
            { options.map((option) => (
                <>
                    {isBank &&<option value="" className="">Select Bank/Wallet</option>}
                    <option key={option.value} value={option.value}>{option.label}</option>
                </>
            ))
            }

        </select>
    </div>
  )
}

export default Select;
