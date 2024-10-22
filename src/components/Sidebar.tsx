import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[250px] min-h-full border-r-[1px] flex flex-col'>
      <div className="p-4">
        <div className="flex gap-4 items-center mt-4 ml-[20px]">
          <img src="/logo1.svg" alt="" className="" />
          <img src="/banicoop.svg" alt="" className="" />
        </div>

        <div className="flex flex-col ">

        </div>
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
