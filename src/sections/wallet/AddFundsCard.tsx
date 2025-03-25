import React from 'react';
import { AddFunddsprops } from './type';
// import {CopyToClipboard} from 'react-copy-to-clipboard';


const AddFundsCard = ({bankType, acctName, bankName, acctNum}: AddFunddsprops) => {

  return (
    <div className='flex flex-col gap-3'>
        <section className="flex items-center gap-5">

        <div className="flex flex-col gap-2">
          <h4 className='text-[#6922D1] text-[11px] font-[300]'>{bankType}</h4>
            <div className="flex items-center gap-2">
                <h2 className='text-[27px] text-[#333333] font-[500]'>{acctNum}</h2>

                <div className="flex justify-center items-center rounded-full bg-[#F0E9F9] h-[32px] w-[32px] cursor-pointer">
                  <img src="/wallet/copy.svg" alt="" className="h-4 w-4" />
                </div>
            </div>
        </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-[#6922D1] text-[11px] font-[400]">Acct. Name</h4>
                <p className="text-[#333333] text-[14px] font-[500]">{acctName}</p>
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-[#6922D1] text-[11px] font-[400]">Bank Name</h4>
                <p className="text-[#333333] text-[14px] font-[500]">{bankName}</p>
            </div>
        </section>
    </div>
  )
}

export default AddFundsCard;


