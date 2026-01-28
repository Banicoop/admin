import React, { useState } from 'react'
import Info from '../../components/infos/Info';
import Btn from '../../components/buttons/Btn';
import PendingApp from '../../sections/loans/PendingApp';
import ExportBtn from '../../components/buttons/ExportBtn';
import Search from '../../components/Search';
import LoanTable from '../../sections/loans/LaonTable';
import { useAllLoansQuery, useDownLoadLoan, useLoanMetricsQuery } from '../../utils/api';
import AppWidgets from '../../components/AppWidgets';
import { Spinner } from '../../helpers/spinner';
import { CircularProgress } from '@mui/material';
import { getQueryParams, getAllLoanQuery } from './funcs';




const Loans = () => {

  const [activeItem, setActiveItem] = useState('All');
  const [activeTableItem, setActiveTableItem] = useState('All');

  const [page, setPage] = useState(1);

  const { data, isPending } = useLoanMetricsQuery(getQueryParams(activeItem))

  const { data: loanData, isPending: loanPending, error } = useAllLoansQuery({...getAllLoanQuery(activeTableItem), page});

  const { refetch, isFetching } = useDownLoadLoan();

  const handleLoanDownload = async () => {
    const { data } = await refetch();

    if (!data) return;

    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');

    link.href = url;
    link.setAttribute('download', 'loans.csv');
    document.body.appendChild(link);
    link.click();

    link.remove();
    window.URL.revokeObjectURL(url);
  }



  return (
    <main className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] mt-8'>
      <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="flex-[2] flex gap-4 flex-col w-full justify-between">
            <div className="flex w-full justify-between my-2">
                <Info text='Overview'/>

                <div className="hidden md:flex items-center gap-4">
                {['All', 'Today', 'Last 7 days', 'Last 30 days'].map((i) => (
                    <Btn 
                      onClick={() => setActiveItem(i)}
                      activeItem={activeItem === i} 
                      label={i} 
                      key={i}/>
                  ))
                  }
                </div>
            </div>
            <div className="flex flex-col justify-center md:justify-between md:flex-row flex-wrap gap-5">


              <AppWidgets 
                className='w-full md:w-[48%]' 
                title='Revenue Generated' 
                icon='/loan/wallet.png' 
                icon2='/arrow-right.svg' 
                num={isPending ? <Spinner/> : data?.data?.revenueGenerated.toLocaleString() || 0} 
                bgColor='#27AE60' text2='0'/>

              <AppWidgets 
                className='w-full md:w-[48%]' 
                title='Active Loans' icon='/loan/save-add.png' 
                icon2='/arrow-right.svg' 
                num={isPending ? <Spinner/> : data?.data?.activeLoans.toLocaleString() || 0} 
                bgColor='#27AE60' text2='0'/>

              <AppWidgets 
                className='w-full md:w-[48%]' 
                title='Repaid Loans' icon='/loan/archive-tick.png' 
                icon2='/arrow-right.svg' 
                num={isPending ? <Spinner/> : data?.data?.repaidLoans.toLocaleString() || 0} 
                bgColor='#27AE60' text2='0'/>

              <AppWidgets className='w-full md:w-[48%]' 
                title='Disbursed Loans' 
                icon='/loan/information.png' 
                icon2='/arrow-right.svg' 
                num={isPending ? <Spinner/> : data?.data?.disbursedLoans.toLocaleString() || 0} 
                bgColor='#27AE60' text2='0'/>

              <AppWidgets 
                className='w-full md:w-[48%]' 
                title='Total Loan Disbursed' 
                icon='/loan/wallet.png' 
                icon2='/arrow-right.svg' 
                num={isPending ? <Spinner/> : data?.data?.totalAmountDisbursed.toLocaleString() || 0} 
                bgColor='#27AE60' text2='0'/> 

              <AppWidgets 
                className='w-full md:w-[48%]' 
                title='Defaulted Loans' 
                icon='/loan/information.png' 
                icon2='/arrow-right.svg' 
                num={isPending ? <Spinner/> : data?.data?.defaultedLoans.toLocaleString() || 0} 
                bgColor='#27AE60' text2='0'/>

            </div>
          </div>
          

          <div className="flex-1 flex w-full md:w-[265px]">
            <PendingApp/>
          </div>
      </div>

      <div className="w-full flex flex-col my-2 gap-6 rounded-3xl border-[1px] p-4">
          <div className="flex items-center justify-between">
              <Info text='Loans'/>
              <ExportBtn 
                text={isFetching ? 'Exporting...' : 'Export'}
                onClick={handleLoanDownload}
                />
          </div>

          <div className="flex items-center justify-between">
               <Search onClick={() => {}} placeholder='Search for loans, users, or reports...'/>
              <div className="hidden md:flex items-center gap-4 capitalize">
                {['All', 'pending', 'overdue', 'paid', 'approved', 'disbursed'].map((i) => (
                    <Btn onClick={() => setActiveTableItem(i)} activeItem={activeTableItem === i} label={i} key={i}/>
                  ))
                  }
              </div>
          </div>

          <div className="w-full">
            {
              loanPending ?

              <div className='h-[300px]'>
                <CircularProgress sx={{display: 'flex', margin: 'auto'}} />  
              </div>:
              
               <LoanTable 
                loanData={loanData?.data ?? []} 
                key={loanData?.data?._id} 
                error={error}
                page={loanData?.page}
                total={loanData?.total}
                limit={loanData?.limit}
                onPageChange={(event: any, value: number) => setPage(value)}
                /> 
            } 
            </div>
      </div>
    </main>
  )
}

export default Loans;
