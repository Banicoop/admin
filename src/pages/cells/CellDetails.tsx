import React from 'react';
import Info from '../../components/infos/Info';
import Search from '../../components/Search';
import ExportBtn from '../../components/ExportBtn';
import BasicTable from '../../components/tables/BasicTable';

const CellDetails = () => {
  return (
    <div className='px-8'>
      <div className='flex flex-col border-[1px] rounded-3xl gap-4 p-4 w-full'>
      <div className="flex justify-between items-center w-full">
          <Info text="Eze's Cell" text2='Full' details/>

          <div className="flex items-center gap-4">
            <Search onClick={() => {}}/>
            <ExportBtn text='Edit Cell Information' onClick={() => {}}/>
            <ExportBtn text='Export' onClick={() => {}}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CellDetails;
