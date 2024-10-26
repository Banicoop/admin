import React, { FC, MouseEventHandler } from 'react';


type Itext = {
    text?: string;
    onClick?: MouseEventHandler<HTMLDivElement>
}

const ExportBtn:FC<Itext> = ({text, onClick}) => {
  return (
    <div className='bg-bgR flex items-center gap-3 py-3 px-4 rounded-3xl text-bgPurple border-[1px] cursor-pointer' onClick={onClick}>
        <img src="/export.svg" alt="" className="" />
        <span className="">{text}</span>
    </div>
  )
}


export const ActionBtn:FC<Itext> = ({text, onClick }) => {
    return(
        <div onClick={onClick}  className="bg-[#fefefe] text-bgPurple flex gap-3 w-max items-center cursor-pointer rounded-3xl p-3 self-start">
            <span className="text-sm">View Details</span>
            <img src="/arrow-next.svg" alt="" className="" />
        </div >

    )
}

export default ExportBtn;
