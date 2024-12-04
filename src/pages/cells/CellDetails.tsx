import React, { useEffect, useState } from 'react';
import Info from '../../components/infos/Info';
import Search from '../../components/Search';
import ExportBtn from '../../components/buttons/ExportBtn';
import BasicTable from '../../components/tables/BasicTable';
import EditCell from '../../sections/cells/EditCell';
import CellBanner from '../../sections/cells/CellBanner';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCellDetail } from '../../redux/slice/cellSlice';
import type { Dispatch } from '../../redux/store';
import Updates from '../../sections/cells/Updates';


const headcells = [
  {
    key: "no",
    name: "No",
  },
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
    name: "Last Contribution ",
  },
  {
    key: "next",
    name: "Next Contribution ",
  },
  {
    key: "status",
    name: "Status",
  },
]


const CellDetails = () => {

    const [open, setOpen] = useState(false);


    const { entities: cell, status } = useSelector((state: any) => state.cell);

    const location = useLocation();
    const dispatch = useDispatch<Dispatch>();


    const path = location.pathname.split('/')[2];


    const adminId = localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData')!).id
        : null;


    useEffect(() => {
      if (adminId) {
        dispatch(fetchCellDetail({ cellId: path, userId: adminId }));
    }
    }, [path, adminId, dispatch])


    console.log(cell);
    console.log(adminId);
    console.log(status)

  return (
    <>
      <div className='h-full flex flex-col px-2 md:px-8 gap-3'>
        <CellBanner title='Banicoop Default Cell' status='Active' isCell/>
        <div className='flex flex-col border-[1px] rounded-3xl gap-4 p-4 w-full'>
        <div className="flex justify-between items-center w-full">
            <Info text="Cell Members" text2='In Progress' details/>

            <div className="flex items-center gap-4">
              <Search onClick={() => {}}  placeholder='Search for Cell'/>
              <ExportBtn text='Edit Cell Information' onClick={() => setOpen(true)}/>
              <ExportBtn text='Export' onClick={() => {}}/>
            </div>
          </div>

        <div className="flex gap-3 m-1">
          <BasicTable headcells={headcells} tableData={tableData}/>
          <Updates/>
        </div>
        </div>
      </div>

      <EditCell open={open} onClose={() => setOpen(false)} onClick={() => setOpen(false)}/>


    </>
  )
}



const tableData = Array(5)
.fill("")
.map((_, i) => ({
  no: '4 of 9',
  cellName: "Obiabo Immanuel",
  amount: "₦300,000.00",
  day: "3rd Nov 2023",
  next: '3rd Nov 2023',
  id: `row_${i}`,

}));


export default CellDetails;
