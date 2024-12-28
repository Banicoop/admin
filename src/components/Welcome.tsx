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
    <div className='flex items-center justify-between py-2'>
        <div className="flex items-center gap-4">
            <span className='text-[#000] text-[14px]'>Welcome Dominic 👋</span>
            <img src="/alert-circle.svg" alt="" className="" />
        </div>

        <div className="hidden md:flex items-center gap-4">
            { list.map((l) => (
                <span  
                onClick={() => setActiveItem(l.label)} 
                className={`py-2 px-6 rounded-3xl text-xs lg:text-[14px] cursor-pointer font-[500] ${activeItem === l.label ? 'bg-bgR text-bgPurple' : 'hover:bg-bgR hover:text-bgPurple'}`} 
                key={l.label}>{l.label}</span>
            ))
            }
          
        </div>
    </div>
  )
}

export default Welcome;
