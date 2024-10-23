import React, { useState } from 'react';


const list = [
    {
        label: 'Today'
    },
    {
        label: 'Last 7 days'
    },
    {
        label: 'Last 30 Days'
    },
    {
        label: 'All Time'
    },
    {
        label: 'Custom'
    },
]

const Welcome = () => {

    const [activeItem, setActiveItem] = useState('Today');

  return (
    <div className='flex items-center justify-between mt-5'>
        <div className="flex items-center gap-4">
            <span className='text-[#000] text-[14px]'>Welcome Dominic 👋</span>
            <img src="/alert-circle.svg" alt="" className="" />
        </div>

        <div className="flex items-center gap-6">
            { list.map((l) => (
                <span  
                onClick={() => setActiveItem(l.label)} 
                className={`py-4 px-7 rounded-3xl text-[14px] cursor-pointer ${activeItem === l.label ? 'bg-bgR text-bgPurple' : 'hover:bg-bgR hover:text-bgPurple'}`} 
                key={l.label}>{l.label}</span>
            ))
            }
          
        </div>
    </div>
  )
}

export default Welcome;
