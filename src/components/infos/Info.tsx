import React, { FC } from 'react';

type IText = {
  text: string;
  text2?: string;
  details?: boolean;
}

const Info:FC<IText> = ({text, text2, details }) => {
  return (
    <div className='flex gap-3 items-center'>
        <span className='text-[#000] text-[14px]'>{text}</span>
        { details &&
            <span className="bg-bgR text-[#FE6309] text-[10px] p-2 rounded-xl">{text2}</span>
        }
        <img src="/alert-circle.svg" alt="" className="" />
    </div>
  )
}

export default Info;
