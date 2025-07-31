import React, { FC } from 'react';


type AType = {
    img?: any;
    title: string | number;
    text: string | number;
    title1: string | number;
    text1: string | number;
}

const ApplicationCard: FC<AType> = ({img, title, text, title1, text1}) => {
  return (
    <div className='flex flex-col gap-4 justify-start'>
        <span className='font-[400] text-[14px] text-[#545454]'>{title}</span>

        <h4 className='text-[#545454] text-[16px] font-bold mb-6'>{text}</h4>

        <span className='font-[400] text-[14px] text-[#545454]'>{title1}</span>
        <div className="flex items-center gap-2">
            {img && <img src={img} alt="" className="h-5 w-5 object-cover rounded-full" />}
            <h4 className='text-[#545454] text-[16px] font-bold'>{text1}</h4>
        </div>
    </div>
  )
}

export default ApplicationCard;

