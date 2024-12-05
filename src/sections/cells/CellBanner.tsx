import React, { FC } from 'react';
import Progress from '../../components/Progress';
import ExportBtn from '../../components/buttons/ExportBtn';
import moment from 'moment';


interface banneerType {
    title: string;
    status: string;
    isCell: boolean;
    cell: any;
}


const CellBanner: FC<banneerType> = ({title, status, isCell, cell}) => {

    let goalFund = (cell?.cell?.duration - 1) * cell?.cell?.contributionAmount
 

  return (
    <div className='flex items-center border-[1px] rounded-3xl gap-4 py-4 px-6 w-full'>
        { !isCell &&
            <div className="">
                <img src="/avater.png" alt="" className="h-[120px] w-[120px]" />
            </div>
        }

        <div className="flex flex-col w-full gap-3">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <h1 className='text-[#000] font-bold text-2xl'>{title}</h1>
                    <span className="p-1 rounded-lg bg-[#1a6a1a4e] text-[green] text-xs">{status}</span>
                </div>

               { !isCell &&
                <div className="flex items-center gap-2">
                    <ExportBtn text='Message' onClick={() => {}}/>
                    <ExportBtn text='Contact' onClick={() => {}}/>
                </div>}
            </div>

            <section className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <span className="text-xs font-[300]">Goal Amount</span>
                    <span className="text-sm font-[500]">NGN {Number(goalFund).toLocaleString('en-NG')}</span>
                </div>

                { !isCell ?
                <>

                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-[300]">Contribured Amount</span>
                        <span className="text-sm font-[500]">NGN 350,000.00</span>
                    </div>

                    <div className="flex flex-col gap-2">
                         <span className="text-xs font-[300]">Participant No</span>
                         <span className="text-sm font-[500]">2 of 9</span>
                    </div>

                    <div className="flex flex-col gap-2">
                    <span className="text-xs font-[300]">Payday amount</span>
                    <span className="text-sm font-[500]">NGN 50,000.00</span>
                    </div>

                    <div className="flex flex-col gap-2">
                    <span className="text-xs font-[300]">Payday</span>
                    <span className="text-sm font-[500]">December 31, 2024</span>
                    </div>
                </>:

                <>
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-[300]">Funds Collected</span>
                        <span className="text-sm font-[500]">NGN 350,000.00</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-[300]">Start Date</span>
                        <span className="text-sm font-[500]">{moment(cell?.cell?.lauchDate).format("MMM Do YY")}</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-[300]">End Date</span>
                        <span className="text-sm font-[500]">{moment(cell?.cell?.endDate).format("MMM Do YY")}</span>
                    </div>
                </>
                }

            </section>

            <div className="flex gap-2 items-center">
                <label htmlFor="progress" className='text-[#000] text-xs font-[500]'>Progress</label>
                <Progress/>
                <p className='text-[#000] text-xs font-[500]'>50%</p>

            </div>
        </div>


    </div>
  )
}

export default CellBanner;
