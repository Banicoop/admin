import React, { FC } from 'react';

type BtnTye = {
    className: string;
    img: string;
    onClick: () => void;
}

const BtnCard: FC<BtnTye> = ({className, img}) => {
  return (
    <div className={`w-[50px] lg:w-[64px] h-[50px] lg:h-[64px] rounded-[16px] flex items-center justify-center shadow-lg ${className}`}>
        <img src={img} alt="" className="w-4 h-4 lg:h-[24px] lg:w-[24px] object-cover" />
    </div>
  )
}

export default BtnCard;
