import React, { FC } from 'react';

type BtnTye = {
    className: string;
    img: string
}

const BtnCard: FC<BtnTye> = ({className, img}) => {
  return (
    <div className={`w-[64px] h-[64px] rounded-[16px] flex items-center justify-center shadow-lg ${className}`}>
        <img src={img} alt="" className="h-[24px] w-[24px] object-cover" />
    </div>
  )
}

export default BtnCard;
