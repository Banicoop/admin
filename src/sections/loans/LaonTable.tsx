import React, { useEffect } from 'react'
import ActionBtn from '../../components/buttons/ActionBtn';
import Table from '../../components/tables/Table';
import { loanData } from '../../constant/menuData';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLoans } from '../../redux/slice/loanSlice';
import { Dispatch } from '../../redux/store';


const columns = [
    {
      header: "ID",
      accessor: "id",
    },
    {
      header: "User",
      accessor: "user",
      className: "table-cell",
    },
    {
      header: "Loan Amount",
      accessor: "amount",
      className: "hidden md:table-cell",
    },
    {
      header: "Status",
      accessor: "status",
      className: "hidden md:table-cell",
    },
    {
      header: "Date",
      accessor: "date",
      className: "hidden lg:table-cell",
    },
    {
      header: "Repayment Status",
      accessor: "repayment_status",
      className: "hidden md:table-cell",
    },
  ];

  const renderRow = (item: any) => (
    <tr className='border-b border-gray-100 even:bg-slate-50 text-sm py-4 my-2'>
        <td className='flex items-center gap-4 py-4 px-2'>{item.id}</td>
        <td className=''>
            <div className="flex items-center gap-3">
                <img src={item.img} alt="" className="h-6 w-6 rounded-full" />
                <span className="">{item.name}</span>
            </div>
        </td>
        <td className=''>{item.amount}</td>
        <td>
            <ActionBtn text='Active' onClick={() => {}} className='px-4 py-2 text-sm rounded-3xl bg-[#E6E6E680] text-[#6922D1] border-[1px] border-[#6922D1] cursor-pointer w-max'/>
        </td>
        <td>3rd Nov 2023</td>
        <td>
            <ActionBtn text='Withdraw' onClick={() => {}} className='px-4 py-2 text-sm rounded-3xl bg-[#E6E6E680] text-[#6922D1] border-[1px] border-[#6922D1] cursor-pointer w-max'/>
        </td>
    </tr>

  )

const LoanTable = () => {

  const { loans } = useSelector((state: any) => state.loan);

  const dispatch = useDispatch<Dispatch>()

  useEffect(() => {
   dispatch(getAllLoans())
  }, [dispatch])

  console.log(loans)

  return (
    <div>
        <Table data={loanData} columns={columns} renderRow={renderRow} status='succeeded'/>
    </div>
  )
}

export default LoanTable;
