import React from 'react'
import Info from '../../components/infos/Info';
import WalletCard from '../../sections/wallet/WalletCard';
import { CircularProgress } from '@mui/material';
import { useWalletQuery } from '../../utils/api';
import ErrorPage from '../../components/ErrorPage';

const Wallet = () => {

  const { data, isPending, error, refetch } = useWalletQuery();


  const handleRetry = () => {
    refetch();
  }


  return (
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] pb-6 pt-2'>
       <Info text='Wallet Management Hub' />
       <section className="flex flex-col lg:flex-row lg:flex-wrap justify-between gap-6">
       {
        isPending ? 
        <div className="flex w-full h-40">
          <CircularProgress sx={{display: 'flex', margin: 'auto'}} />
        </div>
          : error ? 
           <ErrorPage onClick={handleRetry}/> : 
            data.payload?.walletInfos?.map((item: any) => (
              <WalletCard title={item?.walletName} item={item} url='#' key={item.title} />
            ))
           }
       </section>

    </div>
  )
}

export default Wallet;
