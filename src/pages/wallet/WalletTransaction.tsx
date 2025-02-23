import React from 'react'
import ActionBtn from '../../components/buttons/ActionBtn';
import Transaction from '../Transaction';



const WalletTransaction = () => {
  return (
    <div className='h-full w-full px-2 md:px-8'>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-[50px] p-6 h-[555px]">

            <div className="bg-[#6922D10A] rounded-[10px] flex-1 h-full flex flex-col justify-center items-center gap-2">

                <div className="flex flex-col justify-center items-center gap-2  mt-auto mb-3">
                    <span className="font-[400] text-[14px] text-[#000000]">Loan Disbursement</span>
                    <span className="font-[500] text-[40px] text-[#000000]">₦50,000</span>

                    <div className="flex items-center gap-2">
                        <img src="/wallet/group.svg" alt="" className="h-[22px] w-[22px]" />
                        <span className="font-[500] text-[18px] text-[#000000]">Sucessful</span>
                    </div>
                </div>


                
                <div className="flex items-center gap-4 mt-auto mb-4">
                    <ActionBtn text='Download Receipt' onClick={() => {}} className='p-4 text-sm rounded-3xl bg-[#E6E6E680] text-[#6922D1]  cursor-pointer w-max'/>

                    <ActionBtn text='Share Receipt' onClick={() => {}} className='p-4 text-sm rounded-3xl bg-[#E6E6E680] text-[#6922D1]  cursor-pointer wmax]'/>
                </div>
            </div>

            <div className="flex-1 h-full">
                <Transaction/>
            </div>
        </div>
    </div>
  )
}

export default WalletTransaction;

