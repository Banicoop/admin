import React from 'react';
import ActionBtn from '../../components/buttons/ActionBtn';
import { loanHistoryData } from '../../constant/data';
import Table from '../../components/tables/Table';


const columns = [
    {
      header: "History",
      accessor: "history",
    },
    {
      header: "Amount",
      accessor: "amount",
      className: "table-cell",
    },
    {
      header: "Date",
      accessor: "date",
      className: "hidden md:table-cell",
    },
    {
      header: "Status",
      accessor: "status",
      className: "",
    },
  ];




  const renderRow = (item: any) => (
    <tr className='border-b border-gray-100 even:bg-slate-50 text-sm py-4 my-2'>
        <td className='flex items-center gap-4 py-4 px-2'>
            <span className="flex items-center gap-3">
                <img src="/loan/remitt.png" alt="" className="h-[20px] w-[20px] rounded-full" />
                <span className="">Remittance</span>
            </span>
        </td>
        <td className=''>₦30,000.00</td>
        <td className=''>3rd Nov 2023</td>
        <td className="">
        <ActionBtn text='Paid ahead' onClick={() => {}} className='px-4 py-2 text-sm rounded-3xl bg-[#E6E6E680] text-bgPurple w-max'/>
        </td>
    </tr>

  )

const LoanHistoryTable = () => {
  return (
    <div>
        <Table data={loanHistoryData} columns={columns} renderRow={renderRow} status='succeeded' />
    </div>
  )
}

export default LoanHistoryTable;
