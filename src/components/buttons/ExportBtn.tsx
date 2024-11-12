import React, { FC, MouseEventHandler } from 'react';



type Itext = {
    text?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    disabled?: any
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
        <div onClick={onClick}  className="bg-bgR text-bgPurple border-[1px] flex gap-3 w-max items-center cursor-pointer rounded-3xl p-3 self-start">
            <span className="text-sm">{text}</span>
            <img src="/arrow-next.svg" alt="" className="" />
        </div >

    )
}


export const AuthBtn:FC<Itext> = ({text, onClick, disabled}) => {
    return(
        <div onClick={onClick} className={`flex gap-3 ${disabled ? 'bg-[#3b353b38] cursor-not-allowed': ' bg-bgPurple'}  text-bgWhite rounded-3xl py-3 px-7 cursor-pointer`}>
            <span className="text-bgWhite text-sm">{text}</span>
            <img src="/autharr.svg" alt="" className="" />
        </div>
    )
}


export const BackBtn:FC<Itext> = ({text, onClick}) => {
    return(
        <div onClick={onClick} className="flex items-center gap-2 bg-bgWhite text-bgPurple rounded-3xl py-3 px-7 cursor-pointer">
            <img src="/arrowleft.svg" alt="" className="" />
            <span className="text-bgPurple text-sm">{text}</span>
        </div>
    )
}

export default ExportBtn;
