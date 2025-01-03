import React, { FC } from 'react';
import { WidgetDetails, WidgetProps } from '../type';

const Widget: FC<WidgetProps> = ({type, className}) => {

    const wigetDetails = (): WidgetDetails => {
        switch(type){
            case 'transactions':
                return {
                    title: 'Total Transactions',
                    num: 600000,
                    icon:'/tcard.svg',
                    bgColor: '#FF0B0B',
                    icon2: '/arrow-left.svg',
                    text2: '50.4'
                };
            case 'customers':
                return {
                    title: 'Total Customers',
                    num: 83000,
                    icon: '/user2.svg',
                    bgColor: '#FF0B0B',
                    icon2: '/arrow-left.svg',
                    text2: '50.4'
                };
            case 'cells':
                return {
                    title: 'Total Cells',
                    num: 30000,
                    icon: '/user2.svg',
                    bgColor: '#27AE60',
                    icon2: '/arrow-right.svg',
                    text2: '35.4'
                };
            

            //loans
            case 'loan1':
                return {
                    title: 'Total Loan Disbursed',
                    num: 'N230,000',
                    icon: '/loan/wallet.png',
                    bgColor: '#27AE60',
                    icon2: '/arrow-right.svg',
                    text2: '35.4'
                };
            case 'loan2':
                return {
                    title: 'Revenue Generated',
                    num: 'N230,000',
                    icon: '/loan/wallet.png',
                    bgColor: '#27AE60',
                    icon2: '/arrow-right.svg',
                    text2: '35.4'
                };
            case 'loan3':
                return {
                    title: 'Active Loans',
                    num: 25,
                    icon: '/loan/save-add.png',
                    bgColor: '#27AE60',
                    icon2: '/arrow-right.svg',
                    text2: '35.4'
                };
            case 'loan4':
                return {
                    title: 'Repaid Loans',
                    num: 65,
                    icon: '/loan/archive-tick.png',
                    bgColor: '#27AE60',
                    icon2: '/arrow-right.svg',
                    text2: '35.4'
                };
            case 'loan5':
                return {
                    title: 'Defaulted Loans',
                    num: 'N200,000',
                    icon: '/loan/information.png',
                    bgColor: '#FF0B0B',
                    icon2: '/arrow-left.svg',
                    text2: '25'
                };
            case 'loan6':
                return {
                    title: 'Extended Loans',
                    num: 'N200,000',
                    icon: '/loan/information.png',
                    bgColor: '#FF0B0B',
                    icon2: '/arrow-left.svg',
                    text2: '25'
                };
            default:
                throw new Error();
        }
}

    const details = wigetDetails();
  return (
    <div className={`min-h-[108px] flex items-center border-[1px] rounded-3xl gap-4 p-4 justify-between ${className}`}>
        <div className="flex items-center gap-4">
            <div className="bg-bgR p-3 rounded-2xl">
                <img src={details.icon} alt="" className="h-6 w-6 object-cover" />
            </div>

            <div className="flex flex-col gap-2">
                <span className="text-[12px] text-[#363434] font-[300]">{details.title}</span>
                <strong className="text-lg md:text-[24px]">{details.num}</strong>
            </div>
        </div>

        <div className="flex py-1 px-3 rounded-2xl bg-bgR mr-3">
            <span className='' style={{color: `${details.bgColor}`}}>{details.text2}%</span>
            <img src={details.icon2} alt="" className="h-4 w-4 object-cover" />
        </div>
    </div>
  )
}

export default Widget;
