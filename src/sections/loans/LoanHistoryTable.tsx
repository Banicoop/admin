import React from 'react';
import ActionBtn from '../../components/buttons/ActionBtn';
// import { loanHistoryData } from '../../constant/data';
import Table from '../../components/tables/Table';
import EmptyState from '../../components/EmptyState';
import moment from 'moment';


const columns = [
    // {
    //   header: "History",
    //   accessor: "history",
    // },
    {
      header: "Amount Applied",
      accessor: "amount",
      className: "table-cell",
    },
    {
      header: "Date",
      accessor: "date",
      // className: "hidden md:table-cell",
    },
    {
      header: "Status",
      accessor: "status",
      // className: "",
    },
  ];




  const renderRow = (item: any) => (
    <tr className='border-b border-gray-100 even:bg-slate-50 text-sm py-4 my-2'>
        <td className='p-1'>N {item.amount}</td>
        <td className='p-1'>{moment(item.date).format('MMM Do YY')}</td>
        <td className="p-1">
          <ActionBtn text={item.status} onClick={() => {}} className='px-4 py-2 text-sm rounded-3xl capitalize bg-[#E6E6E680] text-bgPurple w-max'/>
        </td>
    </tr>

  )

const LoanHistoryTable = ({loanHistory}: {loanHistory: any[]}) => {

  console.log(loanHistory);

  return (
    <>
      <div className='flex flex-col'>
        {( 
          !loanHistory || loanHistory.length <= 0) ?
            <EmptyState text='No loan history' />:
          <Table data={loanHistory} columns={columns} renderRow={renderRow} status='succeeded' />

        }
    </div>
    </>
  )
}

export default LoanHistoryTable;
