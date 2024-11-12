import React, { useState } from 'react'
import Info from '../../components/infos/Info';
import Search from '../../components/Search';
import ExportBtn from '../../components/buttons/ExportBtn';
import CreateCell from '../../sections/cells/CreateCell';
import Btn from '../../components/buttons/Btn';
import CellCard from '../../sections/cells/CellCard';
import Welcome from '../../components/Welcome';
import Widget from '../../components/Widget';





const list = [
  {
      label: 'All'
  },
  {
      label: 'Inactive'
  },
  {
      label: 'Near Payout'
  },
  {
      label: 'Completed'
  },
  {
      label: 'Active'
  },
]


const Cells = () => {


  const [activeItem, setActiveItem] = useState('All');
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="h-full flex flex-col px-2 md:px-8 gap-3">
        <Welcome/>
        <section className="flex flex-wrap items-center gap-2 py-2">
          <Widget type='cells'/>
          <Widget type='cells'/>
          <Widget type='cells'/>
          <Widget type='cells'/>
          <Widget type='cells'/>
          <Widget type='cells'/>
        </section>

        <div className='flex flex-col border-[1px] rounded-3xl gap-4 p-4 w-full'>
          <div className="flex justify-between items-center w-full">
            <Info text='Cell information'/>
            <ExportBtn text='Create New Cell' onClick={() => setOpenModal(true)}/>
          </div>
          <div className="flex items-center justify-between">
              <Search onClick={() => {}} placeholder='Search for Cell'/>
              {list.map((i) => (
                <Btn onClick={() => setActiveItem(i.label)} activeItem={activeItem} label={i.label} key={i.label}/>
              ))
              }
          </div>

          <div className="flex flex-col justify-between md:flex-row md:flex-wrap gap-4 w-full">
            <CellCard/>
            <CellCard/>
            <CellCard/>
            <CellCard/>
            <CellCard/>
            <CellCard/>
          </div>

        </div>
      </div>
      <CreateCell open={openModal} onClick={() => setOpenModal(false)} onClose={() => setOpenModal(false)}/>
    </>
  )
}


export default Cells;
