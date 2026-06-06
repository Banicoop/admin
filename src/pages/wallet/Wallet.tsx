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

    const walletInfos = data?.payload?.walletInfos ?? [];

    if (isPending) {
      return (
        <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] pb-6 pt-2'>
          <Info text='Wallet Management Hub' />

          <div className='flex w-full h-40'>
            <CircularProgress sx={{ margin: 'auto' }} />
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] pb-6 pt-2'>
          <Info text='Wallet Management Hub' />
          <ErrorPage onClick={handleRetry} />
        </div>
      );
    }

  return (
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] pb-6 pt-2'>
       <Info text='Wallet Management Hub' />
       <section className="grid md:grid-cols-2 gap-6">
        {walletInfos.length > 0 ? (
          walletInfos.map((wallet: any) => (
            <WalletCard
              key={wallet.id ?? wallet.walletName}
              title={wallet.walletName}
              item={wallet}
              url='#'
            />
          ))
        ) : (
          <div className='grid col-span-2 w-full place-items-center '>
            <ErrorPage onClick={handleRetry} />
          </div>
        )}
       </section>
    </div>
  )
}

export default Wallet;
