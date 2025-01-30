import React from 'react'
import SmallCard from './SmallCard';

const WalletCard = () => {

  return (
    <div className='bg-[#E6E6E626] rounded-[28px] p-[30px] h-[343px] w-[47%] flex'>
        <div className="flex flex-col gap-3 justify-between">
            <h2 className="text-[#000000]">Investor Wallet</h2>

            <div className="flex flex-col gap-2">
                <h4 className="text-[#6922D1] text-sm font-[400]">Available Balance</h4>
                <p className="text-[#333333] text-[37px] font-[600]">₦2,300,000,000</p>
            </div>

            <div className="flex items-center gap-4">
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
            </div>
        </div>

        <div className="flex flex-col gap-2">

        </div>
    </div>
  )
}

export default WalletCard;
