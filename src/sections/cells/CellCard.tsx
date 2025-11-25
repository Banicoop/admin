import React, { useState } from 'react';
import  ActionBtn  from '../../components/buttons/ActionBtn';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Button from '../../components/buttons/Button1';
import DeleteModal from '../../components/modals/DeleteModal';
import { deleteCell } from '../../redux/slice/cellSlice';
import { useDispatch } from 'react-redux';
import type { Dispatch } from '../../redux/store';



const CellCard = ({data}: any) => {

  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch>();


  var duration = ((data?.contributionAmount || data?.amount) * (data?.duration - 1)) || 0;

  const [items, setItems] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [cellId, setCellId] = useState('');


  const openDeleteModal = () => {
    setOpenDelete(true);
    setCellId(data._id);
    setItems(false);
  }

  const handleCellDelete = () => {
      dispatch(deleteCell({ cellId }));
  }

  
  return (
    <>
      <div className='flex flex-col gap-3 p-4 border-[1px] rounded-3xl w-full sm:w-[48%] md:w-[31%]'>
          <div className="flex justify-between relative">
              <div className="flex gap-2 items-center">
                  <h1 className='text-[12px] font-[300] md:font-semibold '>{data?.cellName}</h1>
                  <span className="px-2 py-1 rounded-lg bg-[#8000800f] text-xs text-bgPurple">Active</span>
              </div>

              {items === true && 
                <div className="flex z-[9999] bg-white flex-col gap-3 p-4 absolute top-1 right-1 shadow-lg rounded-md">
                  <div className="flex gap-2 items-center cursor-pointer" onClick={openDeleteModal}>
                    <img src="/edit.svg" alt="" className="" />
                    <span className="text-xs font-[300]">Delete Cell</span>
                  </div>

                  <div className="flex gap-2 items-center cursor-pointer">
                    <img src="/edit.svg" alt="" className="" />
                    <span className="text-xs font-[500]">View members</span>
                  </div>

                  <div className="flex gap-2 items-center cursor-pointer">
                    <img src="/edit.svg" alt="" className="" />
                    <span className="text-xs font-[500]">Download Report</span>
                  </div>
                </div>
              }
              <img src="/morevert.svg" alt="" className="cursor-pointer" onClick={() => setItems(!items)}/>

          </div>
        <div className="flex flex-col w-full gap-3 z-0">
              <span className="text-xs">Start Date : {moment(data?.launchDate).format("MMM Do YYYY")} . End Date : {moment(data?.endDate).format("MMM Do YYYY")} </span>
              <span 
                className="text-xs">{data?.type} - N{data?.contributionAmount?.toLocaleString('en-NG') || data?.amount?.toLocaleString('en-NG') || 0} . Output - N{duration?.toLocaleString('en-NG')}</span>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="hidden md:flex gap-2 items-center">
            <img src="/morepic.svg" alt="" className="h-[50px] w-[75px]" />
            {/* <span className="text-[8px] text-[#000]">Active members</span> */}
          </div>

          <ActionBtn text='View Details' className='bg-bgR text-bgPurple border-[1px] flex gap-3 w-max items-center cursor-pointer rounded-3xl p-3 self-start' onClick={() => navigate(`/cells/${data?._id}`)}/>
        </div>
      </div>
      <DeleteModal open={openDelete} onClose={()=> setOpenDelete(false)}>
          <div className="flex flex-col gap-4">
            <h1 className='text-xl text-[#000] font-[300]'>Are you sure you want to delete this cell?</h1>
            <p className='text-sm  text-[#c82c2c] font-[300]'>This action will remove all cell details, including users details</p>

              <div className="flex items-center justify-between">
                <Button text='Cancel' onClick={() =>setOpenDelete(false)} cancel/>
                <Button text='Yes, Delete' onClick={handleCellDelete} />
              </div>
          </div>

      </DeleteModal>
    </>
  )
}

export default CellCard;
