import React from 'react'
import ActionBtn from '../../components/buttons/ActionBtn';
import Table from '../../components/tables/Table';
import moment from 'moment';
import { Link } from 'react-router-dom';



const columns = [
    // {
    //   header: "Loan Type",
    //   accessor: "type",
    // },
    {
      header: "User",
      accessor: "user",
      className: "table-cell",
    },
    {
      header: "Loan Amount",
      accessor: "loanAmount",
      className: "hidden md:table-cell",
    },
    {
      header: "Status",
      accessor: "status",
      className: "hidden md:table-cell",
    },
    {
      header: "Submission Date",
      accessor: "createdAt",
      // className: "hidden lg:table-cell",
    },
    {
      header: "Disbursed Date",
      accessor: "updatedAt",
      className: "table-cell",
      // className: "hidden lg:table-cell",
    },
    {
      header: "Due Date",
      accessor: "dueDate",
      className: "hidden md:table-cell",
    },
  ];

  const renderRow = (item: any) => (
    <tr className='border-b border-gray-100 even:bg-slate-50 text-sm py-4 my-2'>
      
        {/* <td className='flex items-center gap-4 py-4 px-2 capitalize'>{item.type}</td> */}
        <td className=''>
            <Link to={`/loans/application/${item?._id}`} className="flex items-center gap-3">
                <img src={item.img || '/loan/profile.png'} alt="" className="h-6 w-6 rounded-full" />
                <span className="">{item?.userId?.firstName} {item?.userId?.lastName}</span>
            </Link>
        </td>
        <td className=''>{`₦${item.loanAmount}`}</td>
        <td className='px-1 py-2'>
            <ActionBtn text={item?.status} onClick={() => {}} className='px-4 py-2 text-sm rounded-3xl bg-[#E6E6E680] text-[#6922D1]  cursor-pointer w-max'/>
        </td>
        <td>{moment(item.createdAt).format("MMM Do YY")}</td>
        <td>{moment(item.disbursementDate).format("MMM Do YY")}</td>
        <td>
          {moment(item.dueDate).format("MMM Do YY")}
        </td>
    </tr>

  )

const LoanTable = ({loanData}: {loanData: any[]}) => {


  return (
    <div>
        <Table data={loanData} columns={columns} renderRow={renderRow} />
    </div>
  )
}

export default LoanTable;
