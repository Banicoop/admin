import React from 'react'
import { menuData } from '../utils/menuData';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-[250px] min-h-full border-r-[1px] flex flex-col'>
      <div className="p-4">
        <div className="flex gap-4 items-center mt-6 ml-[20px]">
          <img src="/logo1.svg" alt="" className="" />
          <img src="/banicoop.svg" alt="" className="" />
        </div>

      { menuData.map((i) => (
        <div className="flex flex-col p-4 gap-6 mt-10">
          <h2 className='text-[14px] m-6'>{i.title}</h2>

         { i.items.map((item) => (
          <Link to={item.url} className="flex items-center gap-2 px-3 py-5 hover:bg-[#fafafa] hover:text-[#6922D1] rounded-full">
            <img src={item.icon} alt="" className="ml-[20px] text-bgPurple" />
            <span className='text-[14px]'>{item.name}</span>
          </Link>
         ))}
        </div>
      ))}
      </div>


    {/* BOTTOM */}
      <div className="mt-auto border-t-[1px] flex justify-center items-center p-8 gap-3">
        <div className="relative">
          <img src="/avater.png" alt="" className="" />
          <div className='bg-[#49AC46] rounded-full h-2 w-2 absolute top-[30px] right-1'/>
        </div>

        <div className="flex flex-col ">
            <span className="text-[#000000] font-[500]">Praise Dominic</span>
            <span className="text-[#000000] font-[300]">Admin ID: 00234563</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
