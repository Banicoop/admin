import React from 'react';
import { ActionBtn } from '../../components/buttons/ExportBtn';
import { useNavigate } from 'react-router-dom';


const CellCard = () => {

  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-3 p-4 border-[1px] rounded-3xl w-full sm:w-[48%] md:w-[31%]'>
        <div className="flex justify-between">
            <div className="flex gap-2">
                <h1 className='font-semibold '>Banicoop Default Cell</h1>
                <span className="px-2 py-1 rounded-lg bg-[#8000800f] text-xs text-bgPurple">Active</span>
            </div>
            <img src="/morevert.svg" alt="" className="" />
        </div>
      <div className="flex flex-col w-full gap-3">
            <span className="text-xs">Start Date : March 3, 2023 . End Date : Jan 3, 2024</span>
            <span className="text-xs">Monthly - N30,000 . Output - N300,000</span>
      </div>

      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <img src="/morepic.svg" alt="" className="h-[50px] w-[75px]" />
          {/* <span className="text-xs text-[#000]">Activve members</span> */}
        </div>

        <ActionBtn text='View Details' onClick={() => navigate('/cells/:id')}/>
      </div>
    </div>
  )
}

export default CellCard;
