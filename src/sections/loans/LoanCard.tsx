import React, { FC } from 'react';
import ActionBtn from '../../components/buttons/ActionBtn';

type ILoan = {
    className: string;
    loan: any;
}

const LoanCard:FC<ILoan> = ({className, loan}) => {
  return (
    <div className="flex flex-col">
      <span className='text-[#B5B5B5] text-[10px]'>{loan.date}</span>

      {
        loan.loans.map((l: any) => (
        <div className={`flex h-[104px] p-2 gap-7 rounded-xl ${className}`}>
            <img src="/loan/profile.png" alt="" className="h-[48px] w-[48px] rounded-full object-cover" />

            <div className="flex flex-col gap-3">
                <span className=""><strong>{l.name}</strong> applied for a loan of <strong>{l.amount}</strong></span>

                <div className="flex justify-between items-center">
                    <ActionBtn text='Accept' className='text-bgPurple bg-bgR px-4 py-2 rounded-3xl border-[1px] cursor-pointer' onClick={() => {}}/>
                    <ActionBtn text='Reject' className='px-4 py-2 rounded-3xl border-[1px] cursor-pointer text-[#6B6B6B]' onClick={() => {}}/>
                </div>
            </div>
        </div>
        ))
      }
    </div>
  )
}

export default LoanCard;
