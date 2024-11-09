import React, { FC } from 'react'

type IBtn = {
  activeItem: any;
  onClick: any;
  label: string;
}

const Btn:FC<IBtn> = ({ activeItem, onClick, label }) => {
  return (
    <span  
    onClick={onClick} 
    className={`py-2 px-6 rounded-3xl text-[14px] cursor-pointer ${activeItem ? 'bg-bgR text-bgPurple' : 'hover:bg-bgR hover:text-bgPurple'}`}>
      {label}
    </span>
  )
}

export default Btn;
