import React from 'react';
import { ActionBtn } from '../../components/buttons/ExportBtn';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';


const CellCard = ({data}: any) => {

  const navigate = useNavigate();


  var duration = data.contributionAmount * data.duration;

  // console.log(data);

  return (
    <div className='flex flex-col gap-3 p-4 border-[1px] rounded-3xl w-full sm:w-[48%] md:w-[31%]'>
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <h1 className='font-semibold '>{data.cellName}</h1>
                <span className="px-2 py-1 rounded-lg bg-[#8000800f] text-xs text-bgPurple">Active</span>
            </div>
            <img src="/morevert.svg" alt="" className="cursor-pointer" />
        </div>
      <div className="flex flex-col w-full gap-3">
            <span className="text-xs">Start Date : {moment(data.launchDate).format("MMM Do YYYY")} . End Date : {moment(data.endDate).format("MMM Do YYYY")} </span>
            <span className="text-xs">{data.type} - N{data.contributionAmount} . Output - N{duration}</span>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2 items-center">
          <img src="/morepic.svg" alt="" className="h-[50px] w-[75px]" />
          {/* <span className="text-[8px] text-[#000]">Active members</span> */}
        </div>

        <ActionBtn text='View Details' onClick={() => navigate(`/cells/${data?._id}`)}/>
      </div>
    </div>
  )
}

export default CellCard;
