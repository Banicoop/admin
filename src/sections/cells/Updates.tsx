import React from 'react'

const Updates = () => {
  return (
    <div className='flex flex-col m-2 h-full w-1/3 gap-3'>
        <h2 className='bg-[#fafafa] px-2 py-3 text-xl rounded-lg w-full'>Updates</h2>

        <div className="flex flex-col gap-1 m-1 w-full">
            <span className="text-xs">Oct 15, 2024</span>
            <div className="flex flex-row items-center gap-1">
                <img src="/avater.png" alt="" className="h-[20px] w-[20px]" />
                <p className='text-xs w-full'>Sarah Olu joined the Home Savings Cell.</p>
            </div>
        </div>

        <div className="flex flex-col gap-1 m-1">
            <span className="text-xs">Oct 15, 2024</span>
            <div className="flex flex-row items-center gap-1">
                <img src="/avater.png" alt="" className="h-[20px] w-[20px]" />
                <p className='text-xs'>Sarah Olu joined the Home Savings Cell.</p>
            </div>
        </div>

        <div className="flex flex-col gap-1 m-1">
            <span className="text-xs">Oct 15, 2024</span>
            <div className="flex flex-row items-center gap-1">
                <img src="/avater.png" alt="" className="h-[20px] w-[20px]" />
                <p className='text-xs'>Sarah Olu joined the Home Savings Cell.</p>
            </div>
        </div>

        <div className="flex flex-col gap-1 m-1">
            <span className="text-xs">Oct 15, 2024</span>
            <div className="flex flex-row items-center gap-1">
                <img src="/avater.png" alt="" className="h-[20px] w-[20px]" />
                <p className='text-xs'>Sarah Olu joined the Home Savings Cell.</p>
            </div>
        </div>

        <div className="mb-auto text-[purple] text-sm mt-2 cursor-pointer">
            View all
        </div>
    </div>
  )
}

export default Updates;

