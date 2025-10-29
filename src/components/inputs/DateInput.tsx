import { FC, ChangeEvent } from 'react'


type IDate = {
  text: string;
  value: string;
  id?: string;
  name: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const DateInput:FC<IDate> = ({text, value, onChange, id, name, className}) => {

  return (
    <div className={`flex flex-col ${className}`}>
        <label className='text-sm font-[500] text-[#000] ml-2' htmlFor="date" id='date'>{text}</label>
          <div className="flex flex-col rounded-2xl border-[1px] px-2 py-3 w-full gap-1 items-center justify-between cursor-pointer">
          <input id={id} name={name} value={value} onChange={onChange} type="date" className="w-full h-full outline-none  cursor-pointer" />
        </div>
    </div>
  )
}

export default DateInput;

// w-full md:w-[47%]