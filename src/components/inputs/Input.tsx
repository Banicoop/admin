import React, { ChangeEventHandler, FC, useState } from 'react';


interface IInput {
    type?: string;
    placeholder?: string;
    img?: string;
    name?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const Input:FC<IInput> = ({type, placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className="px-2 py-3 rounded-2xl border-[1px] w-[342px] outline-none"  />
  )
}


export const OtpInput:FC<IInput> = ({ placeholder}) => {
  return (
    <input type='tel' placeholder={placeholder} maxLength={1} minLength={0} className="px-2 py-3 h-[60px] w-[60px] rounded-2xl border-[1px] outline-none text-lg"  />
  )
}


export const AuthInput:FC<IInput> = ({type, placeholder, img, onChange}) => {

  const [showPasword, setShowPasswword] = useState(false);

  return(
    <div className="flex rounded-2xl border-[1px] px-2 py-3 w-full gap-1 items-center">
      <img src={img} alt="" className="" />
      <input type={showPasword ? 'text': type} className="outline-none w-full" placeholder={placeholder} onChange={onChange} required/>
      { type === 'password' &&
        <img src={!showPasword ? '/visibilityoff.svg' : "/visiblity.png"} alt="" className="cursor-pointer" onClick={() => setShowPasswword(!showPasword)}/>
      }
    </div>
  )
}

export default Input;
