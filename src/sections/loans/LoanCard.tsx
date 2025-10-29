import React, { FC } from 'react';
import ActionBtn from '../../components/buttons/ActionBtn';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment'



type ILoan = {
    className: string;
    loan: any;
}

const LoanCard:FC<ILoan> = ({className, loan }) => {

  const navigate = useNavigate();

  return (
    <>
    <div className={`flex p-2 gap-2 rounded-xl w-full ${className}`}>
      <div className="flex flex-col gap-3 w-[70px]">
        <img src="/loan/profile.png" alt="" className="h-[40px] w-[40px] rounded-full object-cover mt-3" />
        <span className='text-[#B5B5B5] text-[10px]'>{moment(loan?.createdAt).format("MMM Do YY")}</span>
      </div>
        
        <div className="flex flex-col gap-3 justify-center my-auto">
            <Link to={`/loans/application/${loan?._id}`} className="font-[400]"><strong>{loan?.user?.firstName} {loan?.user?.lastName}</strong> applied for a loan of <strong>{loan?.amount}</strong></Link>

            <div className="flex gap-4 items-center justify-end">
                <ActionBtn 
                  text='View Details' 
                  className='text-bgPurple bg-bgR px-4 lg:px-6 py-2 rounded-3xl border-[1px] cursor-pointer' 
                  onClick={() => navigate(`/loans/application/${loan?._id}`)}/>

            </div>
        </div>
    </div>

    </>
  )
}

export default LoanCard;
