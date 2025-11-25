import React, { FC, MouseEventHandler } from 'react';


type Itext = {
    text: string;
    cancel?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    loading?: string
}

const Button:FC<Itext> = ({text, cancel, onClick, className, loading}) => {
  return (
    <button onClick={onClick} className={`${cancel ? 'bg-bgR text-bgPurple': 'bg-[#6922D1] text-[#fff]'} rounded-3xl px-8 py-3 border-[1px] ${className} flex gap-2` }>
      {text}
      {loading === 'pending' && <svg className="animate-spin h-4 w-4 mr-3 bg-white text-white" viewBox="0 0 24 24"></svg>}
    </button>
  )
}

export default Button;
