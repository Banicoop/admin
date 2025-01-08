import React, { FC } from 'react';
import ActionBtn from '../../components/buttons/ActionBtn';
import { Link } from 'react-router-dom';


type ILoan = {
    className: string;
    className1?: string;
    loan: any;
}

const LoanCard:FC<ILoan> = ({className, loan, className1}) => {
  return (
    <div className="flex flex-col">
      <span className='text-[#B5B5B5] text-[10px]'>{loan.date}</span>

      <div className={`${className1}`}>
      {
        loan.loans.map((l: any) => (
            <div className={`flex p-2 gap-2 md:gap-7 rounded-xl ${className}`}>
                <img src="/loan/profile.png" alt="" className="h-[48px] w-[48px] rounded-full object-cover mt-3" />

                <div className="flex flex-col gap-3 justify-center my-auto">
                    <Link to='/loans/application/:id' className=""><strong>{l.name}</strong> applied for a loan of <strong>{l.amount}</strong></Link>

                    <div className="flex justify-between items-center">
                        <ActionBtn text='Accept' className='text-bgPurple bg-bgR px-4 py-2 rounded-3xl border-[1px] cursor-pointer' onClick={() => {}}/>
                        <ActionBtn text='Reject' className='px-4 py-2 rounded-3xl border-[1px] cursor-pointer text-[#6B6B6B]' onClick={() => {}}/>
                    </div>
                </div>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default LoanCard;
