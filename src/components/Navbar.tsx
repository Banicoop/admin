import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-8 w-full border-b-[1px] '>
      <h1 className='text-[#000] text-[14px]'>Dashboard Overview</h1>

      <div className="flex items-center gap-5">
        <div className="flex items-center border-[1px] rounded-full p-5 gap-3 bg-[#fafafa]">
          <img src="/search.svg" alt="" className="" />
          <input type="text" className="w-[320px] outline-none bg-inherit text-[13px]" placeholder='Search' />
        </div>

        <div className="flex p-5 rounded-full bg-[#fafafa] relative cursor-pointer">
          <img src="/notification.svg" alt="" className="" />
          <span className="flex items-center rounded-full absolute justify-center h-6 w-6 bg-[#FF0E00] text-[#fff] font-[600] -top-[0px] -right-2">8</span>
        </div>
        <div className="flex p-5 rounded-full bg-[#fafafa] relative cursor-pointer">
          <img src="/message.svg" alt="" className="" />
          <span className="flex items-center rounded-full absolute justify-center h-6 w-6 bg-[#FF0E00] text-[#fff] font-[600] -top-[0px] -right-2">3</span>
        </div>

        <div className="relative">
          <img src="/avater.png" alt="" className="" />
          <div className='bg-[#49AC46] rounded-full h-2 w-2 absolute top-[30px] right-1'/>
        </div>
        <div className="flex flex-col">
          <span className="text-[#000000] font-[500]">Praise Dominic</span>
          <span className="text-[#000000] font-[300]">Admin ID: 00234563</span>
        </div>

        <img src="/arrow-down.svg" alt="" className="" />

      </div>
    </div>
  )
}

export default Navbar;
