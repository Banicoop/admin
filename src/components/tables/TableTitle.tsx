import React, { FC } from 'react';

interface IData {
    img?: string;
    text: string;
}

const TableTitle:FC<IData> = () => {
  return (
    <div className='flex items center gap-2'>
        <img src="/avatermale.svg" alt="" className="" />
        <span className="text-[#000]">Eze’s Cell</span>
    </div>
  )
}

export default TableTitle;
