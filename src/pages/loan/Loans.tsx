import React, { useEffect, useState } from 'react'
import Info from '../../components/infos/Info';
import Btn from '../../components/buttons/Btn';
import Widget from '../../components/Widget';
import PendingApp from '../../sections/loans/PendingApp';
import ExportBtn from '../../components/buttons/ExportBtn';
import Search from '../../components/Search';
import LoanTable from '../../sections/loans/LaonTable';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '../../redux/store';
import { getAllLoans } from '../../redux/slice/loanSlice';
// import { useAllLoansQuery } from '../../utils/api';
// import { CircularProgress } from '@mui/material';
// import EmptyState from '../../components/EmptyState';




const list = [
  {
    label: 'Today'
  },
  {
    label: 'Last 7 days'
  },
  {
    label: 'Last 30 Days'
  },
  {
    label: 'All Time'
  },
  {
    label: 'Custom'
  },
]


const tableList = [
  {
    label: 'All'
  },
  {
    label: 'Active'
  },
  {
    label: 'Overdue'
  },
  {
    label: 'Completed'
  },
]

const Loans = () => {

  const [activeItem, setActiveItem] = useState('Today');
  const [activeTableItem, setActiveTableItem] = useState('All');

  // const { data, isPending, error } = useAllLoansQuery();

  // console.log(data?.data);


  const { loans } = useSelector((state: any) => state.loan);

  const dispatch = useDispatch<Dispatch>()

  useEffect(() => {
   dispatch(getAllLoans())
  }, [dispatch])


  return (
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px]'>
      <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="flex-[2] flex gap-4 flex-col w-full justify-between">
            <div className="flex w-full justify-between my-2">
                <Info text='Overview'/>

                <div className="hidden md:flex items-center gap-4">
                {list.map((i) => (
                    <Btn onClick={() => setActiveItem(i.label)} activeItem={activeItem} label={i.label} key={i.label}/>
                  ))
                  }
                </div>
            </div>
            <div className="flex flex-col justify-center md:justify-between md:flex-row flex-wrap gap-5">
                <Widget className='w-full md:w-[48%]' type='loan1'/>
                <Widget className='w-full md:w-[48%]' type='loan2'/>
                <Widget className='w-full md:w-[48%]' type='loan3'/>
                <Widget className='w-full md:w-[48%]' type='loan4'/>
                <Widget className='w-full md:w-[48%]' type='loan5'/>
                <Widget className='w-full md:w-[48%]' type='loan6'/>
            </div>
          </div>


          <div className="flex-1 flex w-[300px]">
            <PendingApp/>
          </div>
      </div>

      <div className="w-full flex flex-col my-2 gap-6 rounded-3xl border-[1px] p-4">
          <div className="flex items-center justify-between">
              <Info text='Loans'/>
              <ExportBtn text='Export'/>
          </div>

          <div className="flex items-center justify-between">
               <Search onClick={() => {}} placeholder='Search for loans, users, or reports...'/>
              <div className="hidden md:flex items-center gap-4">
                {tableList.map((i) => (
                    <Btn onClick={() => setActiveTableItem(i.label)} activeItem={activeTableItem} label={i.label} key={i.label}/>
                  ))
                  }
              </div>
          </div>

          <div className="w-full">
              <LoanTable loanData={loans?.data ?? []}/>
          </div>
      </div>
    </div>
  )
}

export default Loans;
