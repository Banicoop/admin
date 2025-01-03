import React from 'react'
import { Link } from 'react-router-dom';
import LoanCard from './LoanCard';

const PendingApp = () => {
  return (
    <div className='flex flex-col border-[1px] rounded-3xl gap-4 p-4 w-full'>
        <div className="flex items-center justify-between">
            <span className='text-sm font-[400]'>Pending Application (07)</span>
            <Link to='/loan/pending' className='text-[#6922D1] underline cursor-pointer'>View All</Link>
        </div>

        <div className="flex flex-col">
            <span className='text-[#B5B5B5] text-[10px]'>Oct 15, 2024</span>
            <LoanCard />
            <LoanCard />
            <LoanCard />
        </div>


    </div>
  )
}

export default PendingApp;
