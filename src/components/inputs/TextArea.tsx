import React, { ChangeEventHandler, FC } from 'react';

type Itext = {
    text: string;
    onChange: ChangeEventHandler;
    name: string;
    value: string;
}

const TextArea:FC<Itext> = ({text, onChange, name, value}) => {
  return (
    <div className="rounded-2xl border-[1px] w-full px-2 py-3 h-[140px]">
      <textarea placeholder={text} name={name} value={value} className='outline-none resize-none h-full w-full' onChange={onChange}/>
    </div>

  )
}

export default TextArea;
