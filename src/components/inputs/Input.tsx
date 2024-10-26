import React, { FC } from 'react';


interface IInput {
    type: string;
    placeholder: string;
    name?: string;
}

const Input:FC<IInput> = ({type, placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className="px-2 py-3 rounded-2xl border-[1px] w-[342px] outline-none"  />
  )
}

export default Input;
