import React from 'react';
import ActionBtn from '../../components/buttons/ActionBtn';
import { cellmembers } from '../../constant/data';
import Table from '../../components/tables/Table';
import { Link } from 'react-router-dom';


const columns = [
    {
        header: "No",
        accessor: "no",
      },
      {
        header: "Name",
        accessor: "name",
        className: "table-cell",
      },
      {
        header: "Contribution Amount",
        accessor: "amount",
        className: "table-cell",
      },
      {
        header: "Last Contribution",
        accessor: "last",
        className: "hidden md:table-cell",
      },
      {
        header: "Next Contribution",
        accessor: "next",
        className: "hidden md:table-cell",
      },
      {
        header: "Status",
        accessor: "status",
        className: "hidden md:table-cell",
      },
]

const CellDetailsTable = () => {


    const renderRow = (item: any) => (
        <tr className='border-b border-gray-100 even:bg-slate-50 py-4 text-xs'>
            <td className='py-1 text-[8px]'>{item.no}</td>
            <td className='p-2'>
                <Link to='/cells/:id/:user' className="flex items-center gap-2">
                    <img src="/loan/profile.png" alt="" className="h-4 w-4 rounded-full object-cover" />
                    <span className="text-[10px]">{item.name}</span>
                </Link>
            </td>
            <td className='px-4'>{item.amount}</td>
            <td>3rd Nov 2023</td>
            <td>3rd Nov 2023</td>
            <td className='py-2'>
                <ActionBtn text='Paid ahead' onClick={() => {}} className='bg-[#F0E9F9] text-[#6922D1] p-2 rounded-md w-max text-[8px]' />
            </td>
        </tr>
    )

  return (
    <div className='w-full'>
        <Table data={cellmembers} columns={columns} renderRow={renderRow} status='succeeded' />
    </div>
  )
}

export default CellDetailsTable;
