import React from 'react'
import Info from '../../components/infos/Info';


const InvestorWallet = () => {

  return (
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] pb-6 pt-2'>
      <div className="flex items-center justify-between">
         <Info text='Overview'/>
      </div>
    </div>
  )
}

export default InvestorWallet;
