import React, { FC } from 'react';
import { WidgetDetails } from '../type';




const AppWidgets: FC<WidgetDetails> = ({className, icon, title, num, bgColor, text2, icon2}) => {
  return (
    <div className={`min-h-[108px] flex items-center border-[1px] rounded-3xl gap-4 p-4 justify-between ${className}`}>
        <div className="flex items-center gap-4">
            <div className="bg-bgR p-3 rounded-2xl">
                <img src={icon} alt="" className="h-6 w-6 object-cover" />
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-[12px] text-[#363434] font-[300]">{title}</span>
                <strong className="text-lg md:text-[24px]">{num}</strong>
            </div>
        </div>

        <div className="flex py-1 px-3 rounded-2xl bg-bgR mr-3">
            <span className='' style={{color: `${bgColor}`}}>{text2}%</span>
            <img src={icon2} alt="" className="h-4 w-4 object-cover" />
        </div>
    </div>
  )
}

export default AppWidgets;
