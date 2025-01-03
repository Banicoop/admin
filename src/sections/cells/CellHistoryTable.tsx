import React from 'react';
import ActionBtn from '../../components/buttons/ActionBtn';
import { historyData } from '../../constant/data';
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
        className: "hidden md:table-cell",
      },
]

const CellHistoryTable = () => {

    const renderRow = (item: any) => (
        <tr className='border-b border-gray-100 even:bg-slate-50 text-sm py-4'>
            <td className='p-4'>
                <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[#7097FF0D] p-2">
                        <img src="/cell/check.png" alt="" className="h-4 w-4 rounded-full object-cover" />
                    </div>
                    <span className=''>Remittance</span>
                </div>
            </td>
            <td>₦30,000.00</td>
            <td>3rd Nov 2023</td>
            <td>
                <ActionBtn text='Paid ahead' onClick={() => {}} className='bg-[#F0E9F9] text-[#6922D1] p-2 rounded-md w-max text-[8px]' />
            </td>
        </tr>
    )



  return (
    <div className='w-full'>
        <Table data={historyData} columns={columns} renderRow={renderRow} status='succeeded' />
    </div>
  )
}

export default CellHistoryTable;
