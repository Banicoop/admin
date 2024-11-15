import { FC } from 'react'


type IDate = {
  text: string;
}

const DateInput:FC<IDate> = ({text}) => {

  return (
    <div className="flex flex-col w-full">
        <label className='text-sm font-[500] text-[#000] ml-2' htmlFor="date" id='date'>{text}</label>
          <div className="flex flex-col rounded-2xl border-[1px] px-2 py-3 w-full gap-1 items-center justify-between cursor-pointer">
          <input id='date' type="date" className="w-full h-full outline-none  cursor-pointer" />
        </div>
    </div>
  )
}

export default DateInput;
