import React, { FC } from 'react';

type IText = {
    text: string;
}

const Status:FC<IText> = ({text}) => {
  return (
    <span className='px-4 py-2 text-[green] bg-[#5ea93d39] rounded-2xl text-xs'>{text}</span>
  )
}

export default Status;
