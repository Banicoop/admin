import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 w-full border-b-[1px] '>
      <h1 className='text-[#000] text-[14px]'>Dashboard Overview</h1>

      <div className="flex items-center gap-5">
        <div className="flex items-center border-[1px] rounded-full px-5 py-3 gap-3 bg-[#fafafa]">
          <img src="/search.svg" alt="" className="" />
          <input type="text" className="w-[260px] outline-none bg-inherit text-[13px]" placeholder='Search' />
        </div>

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
          <span className="text-[#000000] text-xs">Admin ID: 00234563</span>
        </div>

        <img src="/arrow-down.svg" alt="" className="" />

      </div>
    </div>
  )
}

export default Navbar;
