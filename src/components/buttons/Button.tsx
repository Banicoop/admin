import React, { FC } from 'react';


type Itext = {
    text: string;
    cancel?: boolean;
}

const Button:FC<Itext> = ({text, cancel}) => {
  return (
    <button className={`${cancel ? 'bg-bgR text-bgPurple': 'bg-[#6922D1] text-[#fff]'} rounded-3xl px-8 py-3 border-[1px]`}>{text}</button>
  )
}

export default Button;
