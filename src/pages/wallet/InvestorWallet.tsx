import React from 'react'
import Info from '../../components/infos/Info';
import ActionBtn from '../../components/buttons/ActionBtn';


const InvestorWallet = () => {

  return (
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] pb-6 pt-2'>
      <div className="flex items-center justify-between">
         <Info text='Overview'/>

         <div className="flex items-center gap-3">
          <ActionBtn className='flex items-center gap-3 bg-[#FFFFFF59] border-[1px] rounded-[16px] text-[#333333] shadow-lg px-6 py-4 text-[12px] font-[400]' text='Add Funds' onClick={() => {}} img1='/wallet/wallet-add.png' className2='h-[16px] w-[16px]'/>
          <ActionBtn className='flex items-center gap-3  shadow-lg px-6 py-4 border-[1px] rounded-[16px] bg-bgPurple text-bgWhite font-[400]' text='Send Funds' onClick={() => {}}  img1='/wallet/send-2.png' className2='h-[16px] w-[16px]'/>
         </div>
      </div>
    </div>
  )
}

export default InvestorWallet;
