import React, { FC, MouseEventHandler } from 'react';

type Itext = {
    text: string;
    onClick: MouseEventHandler<HTMLDivElement>
}

const ExportBtn:FC<Itext> = ({text, onClick}) => {
  return (
    <div className='bg-bgR flex items-center gap-3 py-3 px-4 rounded-3xl text-bgPurple border-[1px] cursor-pointer' onClick={onClick}>
        <img src="/export.svg" alt="" className="" />
        <span className="">{text}</span>
    </div>
  )
}

export default ExportBtn;
