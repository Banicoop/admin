import React from 'react'

const CellBanner = () => {
  return (
    <div className='flex flex-col border-[1px] rounded-3xl gap-4 py-4 px-6 w-full'>
        <div className="flex gap-2 items-center">
            <h1 className='text-[#000] font-bold text-2xl'>Banicoop Default Cell</h1>
            <span className="p-1 rounded-lg bg-[#1a6a1a4e] text-[green] text-xs">Active</span>
        </div>

        <section className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <span className="text-xs font-[300]">Goal Amount</span>
                <span className="text-sm font-[500]">NGN 500,000.00</span>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-xs font-[300]">Funds Collected</span>
                <span className="text-sm font-[500]">NGN 350,000.00</span>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-xs font-[300]">Start Date</span>
                <span className="text-sm font-[500]">January 1, 2024</span>
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-xs font-[300]">End Date</span>
                <span className="text-sm font-[500]">December 31, 2024</span>
            </div>
        </section>

        <div className="flex gap-1 items-center">
            <label htmlFor="progress">Progress</label>
            <progress ></progress>

        </div>
    </div>
  )
}

export default CellBanner;
