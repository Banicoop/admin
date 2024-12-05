import React from 'react'
import CellBanner from '../../sections/cells/CellBanner';
import Info from '../../components/infos/Info';
import Search from '../../components/Search';
import ExportBtn from '../../components/buttons/ExportBtn';
import BasicTable from '../../components/tables/BasicTable';
import Updates from '../../sections/cells/Updates';


const headcells = [
  {
    key: "history",
    name: "History",
  },
  {
    key: "amount",
    name: "Amount",
  },
  {
    key: "date",
    name: "Datet",
  },
  {
    key: "status",
    name: "Status",
  },
]


const CellUserDetails = () => {
  return (
    <div className='h-full flex flex-col px-2 md:px-8 gap-3'>
        <CellBanner title='Dada Oladimeji' status='Overdue' isCell={false} cell/>

        <div className='flex flex-col border-[1px] rounded-3xl gap-4 p-4 w-full'>
        <div className="flex justify-between items-center w-full">
          <Info text='Contribution History'/>

          <div className="flex items-center gap-4">
            <Search onClick={() => {}}  placeholder='Search'/>
            <ExportBtn text='Export' onClick={() => {}}/>
          </div>
        </div>

        <div className="flex gap-3 m-1">
          <BasicTable headcells={headcells} tableData={tableData}/>
          <Updates/>
        </div>
        </div>
    </div>
  )
}


const tableData = Array(5)
.fill("")
.map((_, i) => ({
  history: '4 of 9',
  amount: "₦30,000.00",
  date: "3rd Nov 2023",
  id: `row_${i}`,

}));


export default CellUserDetails;
