import React from 'react'
import Table from '../../components/tables/Table';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ActionBtn from '../../components/buttons/ActionBtn';


const columns = [
    {
      header: "ID",
      accessor: "_id",
    },
    {
      header: "Type",
      accessor: "type",
      className: "table-cell",
    },
    {
      header: "Amount",
      accessor: "amount",
      className: "hidden md:table-cell",
    },
    {
      header: "Status",
      accessor: "status",
      className: "hidden md:table-cell",
    },
    {
      header: "Date Issued",
      accessor: "issued",
      className: "hidden md:table-cell",
    },
    {
        header: "Action",
        accessor: "action",
        className: "hidden md:table-cell",
      },
  ];


  const renderRow = (item: any) => (
    <tr className='border-b border-gray-100 even:bg-slate-50 text-sm py-4 my-2'>

        <td className='flex items-center gap-4 py-4 px-2 capitalize'>{item._id}</td>
            <td>
                <span className="flex items-center gap-3">
                  <span className="flex p-2 rounded-xl bg-[#FFECED80]">
                    <img src={`${item.type === 'Withdrawal' ? '/wallet/Icon.svg' : '/wallet/arrow-down.svg'}`} alt="" className="h-[12px] w-[12px]" />
                  </span>
                  <span className="">{item.type}</span>
                </span>
            </td>

        <td className='flex items-center gap-4 py-4 px-2 capitalize'>{item.amount}</td>

        <td>
            <ActionBtn text={item.status} onClick={() => {}} className='px-4 py-2 text-sm rounded-3xl bg-[#E6E6E680] text-[#6922D1]  cursor-pointer w-[120px]'/>
        </td>
        <td className='flex items-center gap-4 py-4 px-2 capitalize'>{item.issued}</td>

        <td>
          <Link to='/wallet/:id/transaction'>
            <ActionBtn text='View Details' onClick={() => {}} className='px-4 py-2 text-sm rounded-3xl bg-[#E6E6E680] text-[#6922D1]  cursor-pointer w-max'/>
          </Link>
        </td>
    </tr>

  )


const WalletTable = ({data}: {data: any[]}) => {
  return (
    <div>
        <Table data={data} columns={columns} renderRow={renderRow} />
    </div>
  )
}

export default WalletTable;
