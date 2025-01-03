import React from 'react';
import { loans1 } from '../../constant/menuData';
import LoanCard from '../../sections/loans/LoanCard';

const PendingLoan = () => {
  return (
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] my-5'>
      <h1 className='text=sm font-[400] text-[#000]'>Pending Application (12)</h1>

      <div className="flex flex-col gap-10">
        {
          loans1.map((loan) => (
            <LoanCard className='border-[1px] rounded-lg w-full md:w-[48%] lg:w-[32%] h-[144px] flex justify-center my-3' loan={loan} className1='flex flex-col gap-4 justify-center md:justify-between md:flex-row flex-wrap'/>
          ))
        }

      {
        loans1.map((loan) => (
            <LoanCard className='border-[1px] rounded-lg w-full md:w-[48%] lg:w-[32%] h-[144px] flex justify-center my-3' loan={loan} className1='flex flex-col gap-4 justify-center md:justify-between md:flex-row flex-wrap'/>
          ))
        }
      </div>
    </div>
  )
}

export default PendingLoan;
