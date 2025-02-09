import React, { useState } from 'react'
import Info from '../../components/infos/Info';
import ActionBtn from '../../components/buttons/ActionBtn';
import Balance from '../../sections/wallet/Balance';
import Btn from '../../components/buttons/Btn';
import Widget from '../../components/Widget';
import ExportBtn from '../../components/buttons/ExportBtn';
import Search from '../../components/Search';
import LoanTable from '../../sections/loans/LaonTable';
import DeleteModal from '../../components/modals/DeleteModal';
import { AuthInput } from '../../components/inputs/Input';
import TextArea from '../../components/inputs/TextArea';
import OtpInput from '../../components/inputs/OtpInput';
import { loanData } from '../../constant/menuData';



const list = ['Today', 'Last 7 Days', 'Last 30 Days', 'Custom', 'All Time'];
const list1 = ['All', 'Successful', 'Pending', 'Incomplete']


const InvestorWallet = () => {

    const [activeItem, setActiveItem] = useState('Today');
    const [addFunds, setAddFunds] = useState(false);
    const [otpsent, setOtpsent] = useState(false);
    const [successful, setSuccessful]  = useState(false);

  return (
    <>
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] pb-6 pt-2'>
      <div className="flex items-center justify-between">
         <Info text='Overview'/>

         <div className="flex items-center gap-3">
          <ActionBtn 
            className='flex cursor-pointer items-center gap-3 bg-[#FFFFFF59] border-[1px] rounded-[16px] text-[#333333] shadow-lg px-6 py-4 text-[12px] font-[400]' text='Add Funds' 
            onClick={() => setAddFunds(true)} img1='/wallet/wallet-add.png' 
            className2='h-[16px] w-[16px]'/>

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
                <Search placeholder='Search for loans, users, or reports...' onClick={() => {}} />

                <div className="flex gap-5">
                  {list1.map((l) => (
                    <Btn onClick={() => setActiveItem(l)} activeItem={activeItem} label={l} key={l}/>
                  ))}
                </div>
                <ExportBtn text='Export'/>
            </div>
        <LoanTable loanData={loanData}/>
        </div>
    </div>
    <DeleteModal open={addFunds} onClose={() => setAddFunds(false)}>
        <div className="flex flex-col gap-4 p-6 max-w-[700px]">
            <img src="/admin/x.svg" alt="" className="h-[16px] w-[16px] flex ml-auto cursor-pointer" onClick={() => setAddFunds(false)} />
            <h4 className='text-[#000000] font-[500] text-[16px]'>{otpsent ? 'Enter Pin': 'Send Funds'}</h4>
            
            {!successful && !otpsent ?
            <>
              <AuthInput placeholder='Enter Account/Wallet Number' type='' onChange={() => {}}/>
              <AuthInput placeholder='Enter Amount' type='' onChange={() => {}}/>
              <AuthInput placeholder='Select Bank/Wallet' type='' onChange={() => {}}/>

              <div className="">
                <TextArea text='Narration'/>
              </div>

              <ActionBtn className='flex items-center text-center justify-center mx-auto gap-3  shadow-lg px-[20px] py-[12px] border-[1px] rounded-[16px] bg-bgPurple text-bgWhite font-[400] h-[48px] w-[160px]' text='Proceed' onClick={() => setOtpsent(true)}  img='/wallet/send.svg' className2='h-[16px] w-[16px]'/>
            </>: 
            <div className="flex flex-col gap-7">
              <OtpInput onChange={() => {}} className=''/>

                <div className="flex justify-center items-center gap-[20px]">
                <ActionBtn className='flex items-center text-center justify-center mx-auto gap-3  shadow-lg px-[20px] py-[12px] border-[1px] rounded-full bg-[#6922D10A] text-bgPurple font-[400] h-[48px] w-[160px]' text='Go Back' onClick={() => setOtpsent(false)}  />

                <ActionBtn className='flex items-center text-center justify-center mx-auto gap-3  shadow-lg px-[20px] py-[12px] border-[1px] rounded-full bg-bgPurple text-bgWhite font-[400] h-[48px] w-[160px]' text='Proceed' onClick={() => setSuccessful(true)} />
                </div>
            </div>
              }

              {successful &&
                <div className="flex flex-col gap-4 p-6 max-w-[700px]">
                  <img src="/admin/x.svg" alt="" className="h-[16px] w-[16px] flex ml-auto cursor-pointer" onClick={() => setAddFunds(false)} />

                  <div className="flex flex-col justify-center items-center gap-5">
                    <img src="/wallet/archive-tick.svg" alt="" className="h-[64px] w-[64px]" />

                    <h4>Transaction Successful</h4>
                    <span className="">Your transaction has been successfully completed.</span>

                    <div className="flex justify-center items-center gap-[20px]">
                      <ActionBtn className='flex items-center text-center justify-center mx-auto gap-3  shadow-lg px-[20px] py-[12px] border-[1px] rounded-full bg-[#6922D10A] text-bgPurple font-[400] h-[48px] w-[160px]' text='Go Back' onClick={() => setOtpsent(false)}  />

                      <ActionBtn className='flex items-center text-center justify-center mx-auto gap-3  shadow-lg px-[20px] py-[12px] border-[1px] rounded-full bg-bgPurple text-bgWhite font-[400] h-[48px] w-[160px]' text='Proceed' onClick={() => setOtpsent(true)} />
                      </div>
                  </div>
                </div>
              }
        </div>
        
    </DeleteModal>
    </>
  )
}

export default InvestorWallet;
