import React, { FC } from 'react';

type Itext = {
    text: string;
}

const TextArea:FC<Itext> = ({text}) => {
  return (
    // <input type="text" className="px-2 py-3 rounded-2xl border-[1px] w-full h-[150px] outline-none"  placeholder='Cell Description'/>

    <textarea placeholder={text} className='px-2 py-3 rounded-2xl h-40 border-[1px] w-full outline-none resize-none'/>
  )
}

export default TextArea;
