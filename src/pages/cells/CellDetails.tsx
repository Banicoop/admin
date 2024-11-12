import React, { useState } from 'react';
import Info from '../../components/infos/Info';
import Search from '../../components/Search';
import ExportBtn from '../../components/buttons/ExportBtn';
import BasicTable from '../../components/tables/BasicTable';
import EditCell from '../../sections/cells/EditCell';
import CellBanner from '../../sections/cells/CellBanner';


const headcells = [
  {
    key: "cellName",
    name: "Customer Name",
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
    name: "Collection Date",
  },
  {
    key: "status",
    name: "Status",
  },
]


const CellDetails = () => {

    const [open, setOpen] = useState(false);

  return (
    <>
      <div className='h-full flex flex-col px-2 md:px-8 gap-3'>
        <CellBanner/>
        <div className='flex flex-col border-[1px] rounded-3xl gap-4 p-4 w-full'>
        <div className="flex justify-between items-center w-full">
            <Info text="Cell Members" text2='In Progress' details/>

            <div className="flex items-center gap-4">
              <Search onClick={() => {}}  placeholder='Search for Cell'/>
              <ExportBtn text='Edit Cell Information' onClick={() => setOpen(true)}/>
              <ExportBtn text='Export' onClick={() => {}}/>
            </div>
          </div>
        <BasicTable headcells={headcells} tableData={tableData}/>
        </div>
      </div>
      <EditCell open={open} onClose={() => setOpen(false)} onClick={() => setOpen(false)}/>
    </>
  )
}



const tableData = Array(5)
.fill("")
.map((_, i) => ({
  cellName: "Obiabo Immanuel",
  amount: "₦300,000.00",
  day: "3rd Nov 2023",
  num: '4 of 9',
  date: "09-03-2023",
  id: `row_${i}`,

}));


export default CellDetails;
