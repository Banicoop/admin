import React, { FC } from 'react';
import ActionBtn from '../../components/buttons/ActionBtn';
import { Link } from 'react-router-dom';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { Dispatch } from '../../redux/store';
import { approveLoan, rejectLoan } from '../../redux/slice/loanSlice';


type ILoan = {
    className: string;
    className1?: string;
    loan: any;
}

const LoanCard:FC<ILoan> = ({className, loan, className1}) => {

  const dispatch = useDispatch<Dispatch>()


  const AcceptLoan = async () => {
    dispatch(approveLoan(loan._id))
  }


  const RejectLoan = async () => {
    dispatch(rejectLoan(loan._id))
  }



  return (
    // <div className="flex flex-col">

      // <div className={`${className1}`}>

            <div className={`flex p-2 gap-2 md:gap-4 rounded-xl ${className}`}>
              <div className="flex flex-col gap-3">
                <img src="/loan/profile.png" alt="" className="h-[48px] w-[48px] rounded-full object-cover mt-3" />
                <span className='text-[#B5B5B5] text-[10px]'>{moment(loan?.createdAt).format("MMM Do YY")}</span>
              </div>
                
                <div className="flex flex-col gap-3 justify-center my-auto">
                    <Link to='/loans/application/:id' className="font-[400]"><strong>{loan?.name || 'A Customr'}</strong> applied for a loan of <strong>{loan?.loanAmount}</strong></Link>

                    <div className="flex gap-4 items-center justify-end">
                        <ActionBtn 
                          text='Accept' 
                          className='text-bgPurple bg-bgR px-4 lg:px-6 py-2 rounded-3xl border-[1px] cursor-pointer' onClick={AcceptLoan}/>

                        <ActionBtn 
                          text='Reject' 
                          className='px-4 lg:px-6 py-2 rounded-3xl border-[1px] cursor-pointer text-[#6B6B6B]' onClick={RejectLoan}/>
                    </div>
                </div>
            </div>

      // </div>
    // </div>
  )
}

export default LoanCard;
