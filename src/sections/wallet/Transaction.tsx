import React from 'react';
import { dataWallet } from '../../constant/data';




const Transaction = () => {
  return (
    <div className='flex flex-col gap-5 w-full h-full'>
        {
            dataWallet.map((d) => (
                <div className="flex flex-col gap-4 justify-between h-full">
                    <h4 className='font-[500] text-bgBlack text-[14px]'>{d.header}</h4>
                    {
                        d.details.map((i) => (
                        <div className="flex items-center justify-between">
                            <span className="font-[300] text-bgBlack text-[14px]">{i.key}</span>
                            <span className="font-[300] text-bgBlack text-[14px]">{i.details}</span>
                        </div>
                        ))
                    }
                </div>

            ))
        }
</div>
  )
}

export default Transaction;
