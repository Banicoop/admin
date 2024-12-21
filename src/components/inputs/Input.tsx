import React, { ChangeEventHandler, FC, useState } from 'react';


interface IInput {
    type: string;
    placeholder: any;
    img?: string;
    name?: string;
    value?: any;
    onChange: ChangeEventHandler<HTMLInputElement>
    readOnly?: boolean;
    className?: string;
}

const Input:FC<IInput> = ({ type, placeholder, onChange, name,  readOnly }) => {
  return (
    <input type={type} name={name} placeholder={placeholder}  readOnly={readOnly} onChange={onChange} className="px-2 py-3 rounded-2xl border-[1px] w-[342px] max-w-full md:max-w-[48%] outline-none"  />
  )
}


export const AuthInput:FC<IInput> = ({type, placeholder, img, onChange, className}) => {

  const [showPasword, setShowPasswword] = useState(false);

  return(
    <div className={`flex rounded-2xl border-[1px] px-2 py-3 gap-1 items-center ${className}`}>
      <img src={img} alt="" className="h-4 w-4" />
      <input type={showPasword ? 'text': type} className="outline-none w-full" placeholder={placeholder} onChange={onChange} required/>
      { type === 'password' &&
        <img src={!showPasword ? '/visibilityoff.svg' : "/visiblity.png"} alt="" className="cursor-pointer" onClick={() => setShowPasswword(!showPasword)}/>
      }
    </div>
  )
}

export default Input;
