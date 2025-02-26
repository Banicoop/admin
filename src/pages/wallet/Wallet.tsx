import React from 'react'
import Info from '../../components/infos/Info';
import WalletCard from '../../sections/wallet/WalletCard';
import { useWalletQuery } from '../../utils/api';

const Wallet = () => {

  const { data } = useWalletQuery();

  console.log(data);

  return (
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] pb-6 pt-2'>
       <Info text='Wallet Management Hub' />

       <section className="flex flex-col lg:flex-row lg:flex-wrap gap-6">
            <WalletCard title='Investor Wallet' url='/wallet/:id'/>
            <WalletCard title='Loan Disbursement Wallet' url='/wallet/:id'/>
            <WalletCard title='Savings Contribution Wallet' url='/wallet/:id'/>
            <WalletCard title='Operational Expenses Wallet' url='/wallet/:id'/>
            <WalletCard title='Miscellaneous Wallet' url='/wallet/:id'/>
       </section>
    </div>
  )
}

export default Wallet;
