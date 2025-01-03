import React from 'react'
import { Link } from 'react-router-dom';
import LoanCard from './LoanCard';
import { loans } from '../../constant/menuData';

const PendingApp = () => {
  return (
    <div className='flex flex-col border-[1px] rounded-3xl gap-4 p-4 w-full'>
        <div className="flex items-center justify-between">
            <span className='text-sm font-[400]'>Pending Application (07)</span>
            <Link to='/loan/pending' className='text-[#6922D1] underline cursor-pointer'>View All</Link>
        </div>

        {
          loans.map((loan) => (
            <LoanCard className='' loan={loan}/>
          ))
        }

    </div>
  )
}

export default PendingApp;
