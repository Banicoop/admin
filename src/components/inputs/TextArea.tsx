import React, { ChangeEventHandler, FC } from 'react';

type Itext = {
    text: string;
    onChange: ChangeEventHandler
}

const TextArea:FC<Itext> = ({text, onChange}) => {
  return (
    <div className="rounded-2xl border-[1px] w-full px-2 py-3 h-[140px]">
      <textarea placeholder={text} className='outline-none resize-none h-full w-full' onChange={onChange}/>
    </div>

  )
}

export default TextArea;
