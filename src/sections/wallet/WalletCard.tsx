import React, { FC } from 'react'
import SmallCard from './SmallCard';
import BtnCard from './Box'
import { Link } from 'react-router-dom';


type WType = {
    title: string;
    url?: string;
    item: any
}


const WalletCard:FC<WType> = ({title, url, item}) => {

  return (
    <div className='bg-[#E6E6E626] rounded-[28px] p-[30px] h-[343px] w-full lg:w-[47%] flex gap-5 justify-between '>
        <div className="flex flex-col gap-3 justify-between">
            <Link to={url ?? "#"} className="text-[#000000]">{title}</Link>

            <div className="flex flex-col gap-2">
                <h4 className="text-[#6922D1] text-sm font-[400]">Available Balance</h4>
                <p className="text-[#333333] text-[20px] lg:text-[37px] font-[600]">₦{item.availableBalance}</p>
            </div>

            <div className="flex items-center gap-4">
                <SmallCard title='Acct. Number' text={item.accountNumber}/>
                <SmallCard title='Acct. Name' text={item.accountName} />
                <SmallCard title='Bank Name' text={item.bank.name}/>
            </div>
        </div>

        <div className="flex flex-col gap-2 justify-between">
            <BtnCard className='bg-bgWhite' img='/wallet/minus.png'/>
            <BtnCard className='bg-bgWhite' img='/wallet/wallet-add.png'/>
            <BtnCard className='bg-bgPurple' img='/wallet/send-2.png'/>
        </div>
    </div>
  )
}

export default WalletCard;
