import React, { FC, MouseEventHandler } from 'react';


type Itext = {
    text: string;
    cancel?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button:FC<Itext> = ({text, cancel, onClick}) => {
  return (
    <button onClick={onClick} className={`${cancel ? 'bg-bgR text-bgPurple': 'bg-[#6922D1] text-[#fff]'} rounded-3xl px-8 py-3 border-[1px]`}>{text}</button>
  )
}

export default Button;
