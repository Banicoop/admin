import React, { FC, MouseEventHandler } from 'react';



type Itext = {
    text?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
    disabled?: any;
    img?: string;
    loading?: 'pending' | 'succeeded' | 'failed' | 'idle'
}

const ExportBtn:FC<Itext> = ({text, onClick, img}) => {
  return (
    <div className='bg-bgR text-xs lg:text-sm flex items-center gap-3 py-2 px-4 rounded-3xl text-bgPurple border-[1px] cursor-pointer' onClick={onClick}>
        <img src={img ? img : "/export.svg"} alt="" className="h-4 w-4" />
        <span className="">{text}</span>
    </div>
  )
}



export const AuthBtn:FC<Itext> = ({text, onClick, disabled, loading}) => {
    return(
        <div onClick={onClick} className={`flex gap-3 w-max ${disabled ? 'bg-[#3b353b38] cursor-not-allowed': ' bg-bgPurple'}  text-bgWhite rounded-3xl py-3 px-7 cursor-pointer`}>
            <span className="text-bgWhite text-sm">{text}</span>
    
            {loading === 'pending' ? 
            <svg className="animate-spin h-5 w-5 mr-3 bg-white text-white" viewBox="0 0 24 24"></svg>: 
            <img src="/autharr.svg" alt="" className="" />}
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
