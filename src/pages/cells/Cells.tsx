import React, { useState, useEffect } from 'react'
import Info from '../../components/infos/Info';
import Search from '../../components/Search';
import ExportBtn from '../../components/buttons/ExportBtn';
import CreateCell from '../../sections/cells/CreateCell';
import Btn from '../../components/buttons/Btn';
import CellCard from '../../sections/cells/CellCard';
import Welcome from '../../components/Welcome';
import Widget from '../../components/Widget';
import { getCells } from '../../redux/slice/cellSlice';
import { useDispatch, useSelector } from 'react-redux';
import type { Dispatch } from '.././../redux/store';
import { CircularProgress } from '@mui/material';
import EmptyState from '../../components/EmptyState';




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


  const {  entities: cells, status } = useSelector((state: any) => state.cell)

  const dispatch = useDispatch<Dispatch>();


  useEffect(() => {
    dispatch(getCells())
  }, [dispatch])



  return (
    <>
      <div className="h-full flex w-full flex-col px-2 md:px-8 gap-3">
        <Welcome/>
        <section className="flex flex-col md:flex-row md:flex-wrap justify-between items-center gap-2 py-2">
          <Widget  className='w-full md:w-[300px]' type='cells'/>
          <Widget  className='w-full md:w-[300px]' type='cells'/>
          <Widget  className='w-full md:w-[300px]' type='cells'/>
          <Widget  className='w-full md:w-[300px]' type='cells'/>
          <Widget  className='w-full md:w-[300px]' type='cells'/>
          <Widget  className='w-full md:w-[300px]' type='cells'/>
        </section>

        <div className='flex flex-col border-[1px] rounded-3xl gap-4 p-4 w-full'>
          <div className="flex flex-col-reverse gap-3 md:flex-row justify-between items-center w-full">
            <Info text='Cell information'/>
            <ExportBtn text='Create New Cell' onClick={() => setOpenModal(true)}/>
          </div>

          { (cells?.length > 0) &&
          <div className="hidden md:flex items-center justify-between">
              <Search onClick={() => {}} placeholder='Search for Cell'/>
              {list.map((i) => (
                <Btn onClick={() => setActiveItem(i.label)} activeItem={activeItem} label={i.label} key={i.label}/>
              ))
              }
          </div>
          }

          <div className="flex flex-col justify-between md:flex-row md:flex-wrap gap-4 w-full">
            {status === 'pending' && <CircularProgress sx={{display: 'flex', margin: 'auto'}}/>  }
             {
              (!cells || cells?.length === 0 ) && <div className="flex w-full justify-center items-center">
                <EmptyState text='No Created Cell'/>
              </div>
            }
            {
                status === 'succeeded' &&
                (Array.isArray(cells) ? (
                  cells?.map((cell: any) => <CellCard key={cell?._id} data={cell} />)
                ) : (
                  <EmptyState text='No Created Cell'/>
                ))
            }
          </div>
        </div>
      </div>
      <CreateCell open={openModal} onClick={() => setOpenModal(false)} onClose={() => setOpenModal(false)}/>
    </>
  )
}


export default Cells;
