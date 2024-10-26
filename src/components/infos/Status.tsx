import React, { FC } from 'react';

type IText = {
    text: string;
}

const Status:FC<IText> = ({text}) => {
  return (
    <span className='p-3 text-[#FE6309] bg-[#86665339] rounded-2xl text-xs'>{text}</span>
  )
}

export default Status;
