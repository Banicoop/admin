import React, { FC, ReactNode } from 'react';


type LWtype = {
    children: ReactNode;
    text: string;
}

const LoadWidgetCard:FC<LWtype> = ({children, text}) => {
  return (
    <div className='flex flex-col gap-3 justify-start'>

        <h4 className='font-[500] text-[14px] text-[#000]'>{text}</h4>

        <div className="bg-[#F9F9F9] w-[320px] h-[86px] rounded-xl">
            {children}
        </div>
    </div>
  )
}

export default LoadWidgetCard;
