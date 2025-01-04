import React, { useEffect, useState } from 'react';
import Info from '../../components/infos/Info';

import ExportBtn from '../../components/buttons/ExportBtn';
import BasicTable from '../../components/tables/BasicTable';
import CellDetailsTable from '../../sections/cells/CellDetailsTable';
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



    const { entities: cell,  } = useSelector((state: any) => state.cell);

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



  return (
    <>
      <div className='h-full flex flex-col px-2 md:px-8 gap-3'>
        <CellBanner title={cell?.cell?.cellName} status='Active' isCell cell={cell}/>
        <div className='flex flex-col border-[1px] rounded-3xl gap-4 p-4 w-full'>
        <div className="flex justify-between items-center w-full">
            <Info text="Cell Members" />

            <div className="hidden lg:flex items-center gap-4">
              <ExportBtn text='Export' onClick={() => {}}/>
            </div>
          </div>

        <div className="flex flex-col md:flex-row gap-3 m-1">
          {/* <BasicTable headcells={headcells} tableData={tableData}/> */}
          <CellDetailsTable/>
          <div className="border-r-2 w-[1px]"></div>
          <Updates title='Updates'/>
        </div>
        </div>
      </div>


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
