import React from 'react'
import { Link } from 'react-router-dom';
import LoanCard from './LoanCard';
import { CircularProgress } from '@mui/material';
import { usePendingLoanQuery } from '../../utils/api';
import EmptyState from '../../components/EmptyState';


const PendingApp = () => {


  const { data, isPending } = usePendingLoanQuery();

  let num = data?.data?.length || 0


  return (
    <div className='flex flex-col border-[1px] rounded-3xl gap-4 p-4 w-full'>
        <div className="flex items-center justify-between">
            <span className='text-sm font-[400]'>{`Pending Application (${num})`}</span>
            
            {( num !== 0) &&
              <Link to='/loan/pending' className='text-[#6922D1] underline cursor-pointer'>View All</Link>
            }
        </div>

      {  isPending ? 
        
          <CircularProgress sx={{display: 'flex', margin: 'auto'}} />:
          num === 0 ?
          <div className="w-full">
            <EmptyState text='No Pending Loan' />
          </div>:
          
          data?.data?.slice(0, 3).map((loan: any) => (
            <LoanCard className='h-[110px] ' loan={loan}/>
          ))
        }

    </div>
  )
}

export default PendingApp;
