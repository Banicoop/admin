import React, { useEffect } from 'react';
import LoanCard from '../../sections/loans/LoanCard';
import { useDispatch, useSelector } from 'react-redux';
import {  getPendingLoans } from '../../redux/slice/loanSlice';
import { Dispatch } from '../../redux/store';
import EmptyState from '../../components/EmptyState';
import { CircularProgress } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';




const PendingLoan = () => {


  const navigate = useNavigate()


  const { loans, status } = useSelector((state: any) => state.loan);


  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
   dispatch(getPendingLoans())
  }, [dispatch])

  let num = loans?.data?.length || 0


  return (
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] my-5'>
      <div className="flex items-center gap-4">
         <ArrowBack style={{ color: 'gray', cursor: 'ponter', height: '27px', width: '27px' }} onClick={() => navigate('/loans')}/>
          <h1 className='text=sm font-[400] text-[#000]'>{`Pending Application (${num})`}</h1>
      </div>

      <div className="flex flex-col md:flex-row w-full gap-[20px]">
        { status === 'pending' ? 

        <CircularProgress sx={{display: 'flex', margin: 'auto'}} />:
        Array.isArray(loans?.data) ?
          loans?.data?.map((loan: any) => (
            <LoanCard className='border-[1px] rounded-lg w-[320px] md:w-max lg:w-[32%] h-[144px] flex justify-center my-3' key={loan?._id} loan={loan} /> 
          )): 
          <EmptyState text='No Pending Loan' />
        }
      </div>
    </div>
  )
}

export default PendingLoan;
