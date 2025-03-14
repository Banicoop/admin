import React from 'react'


const AddFundsCard = () => {

  return (
    <div className='flex flex-col gap-3'>
        <section className="flex items-center gap-5">

        <div className="flex flex-col gap-2">
          <h4 className='text-[#6922D1] text-sm font-[400]'>Wallet Acct Number</h4>
            <div className="flex items-center gap-2">
                <h2 className='text-[32px] text-[#333333] font-[600]'>0123456789</h2>

                <div className="flex rounded-3xl bg-[#F0E9F9] p-2 cursor-pointer">
                  <img src="/wallet/copy.svg" alt="" className="h-4 w-4" />
                </div>
            </div>
        </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-[#6922D1] text-sm font-[400]">Acct. Name</h4>
                <p className="text-[#333333] text-[14px] font-[500]">Pochi</p>
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-[#6922D1] text-sm font-[400]">Bank Name</h4>
                <p className="text-[#333333] text-[14px] font-[500]">Bank of NG</p>
            </div>
        </section>
    </div>
  )
}

export default AddFundsCard;


