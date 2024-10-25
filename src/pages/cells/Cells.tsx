import React from 'react'
import Info from '../../components/Info';
import Search from '../../components/Search';
import ExportBtn from '../../components/ExportBtn';
import BasicTable from '../../components/BasicTable';


const headcells = [
  {
    key: "cellName",
    name: "Cell Name",
  },
  {
    key: "amount",
    name: "Contribution Amount",
  },
  {
    key: "day",
    name: "Remittance Day",
  },
  {
    key: "num",
    name: "Number",
  },
  {
    key: "date",
    name: "Date",
  },
  {
    key: "action",
    name: "Action",
  },
]

const tableData = Array(3)
.fill("")
.map((_, i) => ({
  cellName: "Eze's Cell",
  amount: "₦300,000.00",
  day: "3rd Nov 2023",
  num: '4 of 9',
  date: "09-03-2023",
  action: '',
  id: `row_${i}`,
}));

const Cells = () => {
  return (
    <div className="px-8">
      <div className='flex flex-col border-[1px] rounded-3xl gap-4 p-4 w-full'>
        <div className="flex justify-between items-center w-full">
          <Info/>

          <div className="flex items-center gap-4">
            <Search onClick={() => {}}/>
            <ExportBtn text='Create New Cell' onClick={() => {}}/>
            <ExportBtn text='Export' onClick={() => {}}/>
          </div>
        </div>
        <BasicTable headcells={headcells} tableData={tableData}/>
      </div>
    </div>
  )
}

export default Cells;
