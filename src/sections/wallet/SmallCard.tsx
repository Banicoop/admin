import React, { FC } from 'react';


type CardType = {
  title: string;
  text: string;
}

const SmallCard: FC<CardType> = ({title, text}) => {
  return (
    <div className='flex flex-col'>
        <span className="text-bgPurple text-[10px]">{title}</span>
        <span className="text-bgBlack text-xs">{text}</span>
    </div>
  )
}

export default SmallCard;
