import React, { useEffect } from 'react';
// import { loans1 } from '../../constant/menuData';
import LoanCard from '../../sections/loans/LoanCard';
import { useDispatch, useSelector } from 'react-redux';
import {  getPendingLoans } from '../../redux/slice/loanSlice';
import { Dispatch } from '../../redux/store';
import EmptyState from '../../components/EmptyState';
import { CircularProgress } from '@mui/material';

const PendingLoan = () => {


  const { loans, status } = useSelector((state: any) => state.loan);

  console.log(loans?.data);

  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
   dispatch(getPendingLoans())
  }, [dispatch])

  let num = loans?.data?.length || 0


  return (
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] my-5'>
      <h1 className='text=sm font-[400] text-[#000]'>{`Pending Application (${num})`}</h1>

      <div className="flex flex-col ">
        { status === 'pending' ? 

        <CircularProgress sx={{display: 'flex', margin: 'auto'}} />:
        Array.isArray(loans?.data) ?
          loans?.data?.map((loan: any) => (
            <LoanCard className='border-[1px] rounded-lg w-full md:w-max lg:w-[32%] h-[144px] flex justify-center my-3' key={loan?._id} loan={loan} className1='flex gap-4 justify-center md:justify-between md:flex-row flex-wrap'/> 
          )): 
          <EmptyState text='No Pending Loan' />
        }
      </div>
    </div>
  )
}

export default PendingLoan;
