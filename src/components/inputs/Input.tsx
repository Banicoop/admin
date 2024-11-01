import React, { FC } from 'react';


interface IInput {
    type: string;
    placeholder: string;
    img?: string;
    name?: string;
}

const Input:FC<IInput> = ({type, placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className="px-2 py-3 rounded-2xl border-[1px] w-[342px] outline-none"  />
  )
}

export const AuthInput:FC<IInput> = ({type, placeholder, img}) => {
  return(
    <div className="flex rounded-2xl border-[1px] px-2 py-3 w-full gap-1">
      <img src={img} alt="" className="" />
      <input type={type} className="outline-none w-full" placeholder={placeholder} required/>
    </div>
  )
}

export default Input;
