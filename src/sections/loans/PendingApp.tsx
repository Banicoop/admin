import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import LoanCard from './LoanCard';
import { useDispatch, useSelector } from 'react-redux';
import { getPendingLoans } from '../../redux/slice/loanSlice';
import { Dispatch } from '../../redux/store';
import { CircularProgress } from '@mui/material';


const PendingApp = () => {

  const { loans, status } = useSelector((state: any) => state.loan);


  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
   dispatch(getPendingLoans())
  }, [dispatch])

  let num = loans?.data?.length || 0


  return (
    <div className='flex flex-col border-[1px] rounded-3xl gap-4 p-4 w-full'>
        <div className="flex items-center justify-between">
            <span className='text-sm font-[400]'>{`Pending Application ${num}`}</span>
            <Link to='/loan/pending' className='text-[#6922D1] underline cursor-pointer'>View All</Link>
        </div>

        { status === 'pending' ? 
        
          <CircularProgress sx={{display: 'flex', margin: 'auto'}} />:
          loans?.data?.slice(0, 3).map((loan: any) => (
            <LoanCard className='h-[110px] ' loan={loan}/>
          ))
        }

    </div>
  )
}

export default PendingApp;
