import React from 'react'
import Info from '../../components/infos/Info';
import WalletCard from '../../sections/wallet/WalletCard';
import { Button, CircularProgress } from '@mui/material';
import { useWalletQuery } from '../../utils/api';
import ErrorPage from '../../components/ErrorPage';
import { Download } from '@mui/icons-material';
import SERVER from '../../utils/server';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';

const Wallet = () => {

  const { data, isPending, error, refetch } = useWalletQuery();

    const handleRetry = () => {
      refetch();
    }

    const walletInfos = data?.payload?.walletInfos ?? [];

    const walletNumbers = walletInfos.map((wallet: any) => wallet.walletNumber);

    const { mutate: downloadReport, isPending: isDownloading } = useMutation({
      mutationFn: async () => {
        const res = await SERVER.post(
          "admin/wallets/balance-report",
          { walletNumbers },
          {
            responseType: "blob",
          }
        );

        return res;
      },

      onSuccess: (res) => {
        const url = window.URL.createObjectURL(
          new Blob([res.data], {
            type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          })
        );

        const link = document.createElement("a");
        link.href = url;
        link.download = `wallet-balance-report-${new Date()
          .toISOString()
          .split("T")[0]}.xlsx`;

        document.body.appendChild(link);
        link.click();

        link.remove();
        window.URL.revokeObjectURL(url);

        toast.success("Report downloaded successfully!");
      },

      onError: (error) => {
        console.error(error);
        toast.error("Failed to download report.");
      },
    });

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
      <div className="flex items-center justify-between">
       <Info text='Wallet Management Hub' />
      <Button
        variant="contained"
        startIcon={
          isDownloading ? (
            <CircularProgress size={18} color="inherit" />
          ) : (
            <Download />
          )
        }
        disabled={isDownloading}
        onClick={() => downloadReport()}
      >
        {isDownloading ? "Generating..." : "Download Report"}
      </Button>
      </div>
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
