import React from 'react'
import Info from '../../components/Info';
import Search from '../../components/Search';
import ExportBtn from '../../components/ExportBtn';

const Cells = () => {
  return (
    <div className="px-8">
      <div className='flex items-center border-[1px] rounded-3xl gap-4 p-4 w-full'>
        <div className="flex justify-between items-center w-full">
          <Info/>

          <div className="flex items-center gap-4">
            <Search onClick={() => {}}/>
            <ExportBtn text='Create New Cell' onClick={() => {}}/>
            <ExportBtn text='Export' onClick={() => {}}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cells;
