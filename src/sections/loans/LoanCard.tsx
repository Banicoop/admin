import React, { FC, useState } from 'react';
import ActionBtn from '../../components/buttons/ActionBtn';
import { Link } from 'react-router-dom';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { Dispatch } from '../../redux/store';
import { approveLoan, rejectLoan } from '../../redux/slice/loanSlice';
import BasicModal from '../../components/modals/DeleteModal';
import { motion } from 'framer-motion';


type ILoan = {
    className: string;
    loan: any;
}

const LoanCard:FC<ILoan> = ({className, loan }) => {

  const dispatch = useDispatch<Dispatch>()
  const [openAccept, setOpenAccept] = useState(false);
  const [openRejectModal, setOpenRejectModal] = useState(false);


  const AcceptLoan = async () => {
    console.log('Successful!!');
    // dispatch(approveLoan(loan?.payload?.loan?._id))
  }


  const RejectLoan = async () => {
    console.log('Successful!!');
    // dispatch(rejectLoan(loan?.payload?.loan?._id))
  }



  return (
    <>
    <div className={`flex p-2 gap-2 rounded-xl w-full ${className}`}>
      <div className="flex flex-col gap-3 w-[70px]">
        <img src="/loan/profile.png" alt="" className="h-[40px] w-[40px] rounded-full object-cover mt-3" />
        <span className='text-[#B5B5B5] text-[10px]'>{moment(loan?.createdAt).format("MMM Do YY")}</span>
      </div>
        
        <div className="flex flex-col gap-3 justify-center my-auto">
            <Link to={`/loans/application/${loan?._id}`} className="font-[400]"><strong>{loan?.userId?.firstName} {loan?.userId?.lastName}</strong> applied for a loan of <strong>{loan?.loanAmount}</strong></Link>

            <div className="flex gap-4 items-center justify-end">
                <ActionBtn 
                  text='Accept' 
                  className='text-bgPurple bg-bgR px-4 lg:px-6 py-2 rounded-3xl border-[1px] cursor-pointer' onClick={() => setOpenAccept(true)}/>

                <ActionBtn 
                  text='Reject' 
                  className='px-4 lg:px-6 py-2 rounded-3xl border-[1px] cursor-pointer text-[#6B6B6B]' onClick={() => setOpenRejectModal(true)}/>
            </div>
        </div>
    </div>

    <BasicModal onClose={() => setOpenAccept(false)} open={openAccept}>
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="flex flex-col p-2 gap-3 justify-center items-center w-[320px]">

           <img src="/wallet/archive-tick.svg" alt="" className="h-[64px] w-[64px]" />

          <span className="text-center font-[500] text-[16px]">Confirm Loan Approval</span>

          <span className='text-center font-[300] text-[12px]'>Are you sure you want to approve this loan request?</span>

          <div className="flex p-4 justify-between items-center w-full">
            <ActionBtn text='Cancel' 
              onClick={() => setOpenAccept(false)} 
              className='px-[24px] py-[12px] rounded-3xl bg-[#fff] text-[#6922D1] border-[1px] border-[#6922D1] text-[12px] cursor-pointer leading-[100%]'/>

            <ActionBtn 
              text='Approve' 
              onClick={AcceptLoan} 
              className='px-[24px] py-[12px] rounded-3xl bg-bgPurple text-bgWhite border-[1px] border-[#6922D1] text-[12px] cursor-pointer leading-[100%]'/>
          </div>
        </motion.div>
    </BasicModal>


    <BasicModal onClose={() => setOpenRejectModal(false)} open={openRejectModal}>
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="flex flex-col  p-2 gap-3 justify-center items-center w-[320px]">

            <img src="/wallet/remove.svg" alt="" className="h-[64px] w-[64px]" />

            <span className="text-center font-[500] text-[16px]">Confirm Loan Rejection</span>

            <span className='text-center font-[300] text-[12px]'>Are you sure you want to reject this loan request? 
            Please provide a reason for rejection.</span>

          <div className="flex p-4 justify-between items-center w-full">
            <ActionBtn text='Cancel' 
              onClick={() => setOpenRejectModal(false)} 
              className='px-[24px] py-[12px] text-[12px] rounded-3xl bg-[#fff] text-[#6922D1] border-[1px] border-[#6922D1] cursor-pointer'/>

            <ActionBtn 
              text='Reject' 
              onClick={RejectLoan} 
              className='px-[24px] py-[12px] text-[12px] rounded-3xl bg-bgPurple text-bgWhite cursor-pointer'/>
          </div>
        </motion.div>
    </BasicModal>
    </>
  )
}

export default LoanCard;
