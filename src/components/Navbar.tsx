import React from 'react'
import Search from './Search';

const Navbar = () => {

  const admindata = localStorage.getItem('loginData');
  const adminId = admindata ? JSON.parse(admindata) : null


  return (
    <div className='flex justify-between items-center py-4 px-8 w-full border-b-[1px] '>
      <h1 className='text-[#000] text-[14px]'>Dashboard Overview</h1>

      <div className="hidden md:flex items-center gap-5">
        <Search onClick={() => {}}  placeholder='Tap to Search'/>

        <div className="flex p-3 rounded-full bg-[#fafafa] relative cursor-pointer">
          <img src="/notification.svg" alt="" className="" />
          <span className="flex items-center rounded-full absolute justify-center h-5 w-5 p-1 bg-[#FF0E00] text-[#fff] font-[600] -top-[0px] -right-2 text-xs">8</span>
        </div>
        <div className="flex p-3 rounded-full bg-[#fafafa] relative cursor-pointer">
          <img src="/message.svg" alt="" className="" />
          <span className="flex items-center rounded-full absolute justify-center h-5 w-5 p-1 bg-[#FF0E00] text-[#fff] font-[600] -top-[0px] -right-2 text-xs">3</span>
        </div>

        <div className="relative">
          <img src="/avater.png" alt="" className="" />
          <div className='bg-[#49AC46] rounded-full h-2 w-2 absolute top-[30px] right-1'/>
        </div>
        <div className="flex flex-col">
          <span className="text-[#000000] font-[500]">Praise Dominic</span>
          <span className="text-[#000000] text-xs">Admin ID: {adminId?.id}</span>
        </div>

        <img src="/arrow-down.svg" alt="" className="h-4 w-4" />

      </div>
    </div>
  )
}

export default Navbar;
