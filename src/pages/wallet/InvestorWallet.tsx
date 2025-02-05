import React, { useState } from 'react'
import Info from '../../components/infos/Info';
import ActionBtn from '../../components/buttons/ActionBtn';
import Balance from '../../sections/wallet/Balance';
import Btn from '../../components/buttons/Btn';
import Widget from '../../components/Widget';
import ExportBtn from '../../components/buttons/ExportBtn';


const list = ['Today', 'Last 7 Days', 'Last 30 Days', 'Custom', 'All Time']


const InvestorWallet = () => {

    const [activeItem, setActiveItem] = useState('Today');

  return (
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] pb-6 pt-2'>
      <div className="flex items-center justify-between">
         <Info text='Overview'/>

         <div className="flex items-center gap-3">
          <ActionBtn className='flex items-center gap-3 bg-[#FFFFFF59] border-[1px] rounded-[16px] text-[#333333] shadow-lg px-6 py-4 text-[12px] font-[400]' text='Add Funds' onClick={() => {}} img1='/wallet/wallet-add.png' className2='h-[16px] w-[16px]'/>
          <ActionBtn className='flex items-center gap-3  shadow-lg px-6 py-4 border-[1px] rounded-[16px] bg-bgPurple text-bgWhite font-[400]' text='Send Funds' onClick={() => {}}  img1='/wallet/send-2.png' className2='h-[16px] w-[16px]'/>
         </div>
      </div>


      <div className="flex  justify-between ">
        <Balance/>

        <div className="flex mt-auto gap-5 mb-2">
          {list.map((l) => (
            <Btn onClick={() => setActiveItem(l)} activeItem={activeItem} label={l} key={l}/>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-3">
          <Widget type='customers' className='' />
          <Widget type='customers' className='' />
          <Widget type='customers' className='' />
      </div>

      <div className="w-full flex flex-col my-2 gap-6 rounded-3xl border-[1px] p-4">
      <div className="flex items-center justify-between">
              <Info text='Transactions'/>
              <ExportBtn text='Export'/>
          </div>
      </div>
    </div>
  )
}

export default InvestorWallet;
