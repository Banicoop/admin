import React from 'react'
import ActionBtn from '../../components/buttons/ActionBtn';

const ReferalCard = () => {
  return (
    <div className='flex justify-between items-center w-[240px] h-[60px]'>
        <img src="/loan/user.png" alt="" className="h-[32px] w-[32px] rounded-full object-cover" />

        <div className="flex flex-col gap-2">
            <span className="font-[400] text-[12px]">Josefina Boyle</span>
            <span className="text-[400] text-[10px]">June 03, 2023</span>
        </div>

        <ActionBtn text='Invited' onClick={() => {}} className='px-4 py-2 text-sm rounded-3xl bg-[#E6E6E680] text-[#6922D1] cursor-pointer w-max'/>

    </div>
  )
}

export default ReferalCard;
