import { useQuery } from '@tanstack/react-query';
import SERVER from './server';
import { AllLoanType } from './type';

// Get all Admins endpoint
export const useAdminsQuery = () => {
    const { data, error, isPending } = useQuery({
        queryKey: ['admins'],
        queryFn: async () => {
            const res = await SERVER.get(`admin/getAll`)
            return res.data;
        }
    })

    return { data, error, isPending }
}


export const useGetAdminDetails = (id: string) => {
        const { data, error, isPending } = useQuery({
        queryKey: ['admin', id],
        queryFn: async () => {
            const res = await SERVER.get(`admin?adminId=${id}`)
            return res.data;
        },
        enabled: !!id,
        retry: 1
    })

    return { data, error, isPending }
}


export const useAllLoansQuery = ({
  status,
  startDate,
  endDate,
  search,
  page
}: AllLoanType) => {

  const { data, error, isPending } = useQuery({
    queryKey: ['loans', status, startDate, endDate, search, page],

    queryFn: async () => {
      const params = new URLSearchParams();

      if (status) params.append('status', status);
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);
      if (search) params.append('search', search);
      if (page) params.append('page', page.toString());  

      const res = await SERVER.get(`admin/loans?${params.toString()}`);
      return res.data;
    },
  });

  return { data, error, isPending };
};


export const useLoanHistory = (Id: string) => {
    const { data, error, isPending } = useQuery({
        queryKey: ['loan-history', Id],
        queryFn: async () => {
            const res = await SERVER.get(`admin/${Id}/loans/history`);
            return res.data;
        },
        enabled: !!Id,
        retry: 1,
    })

    return { data, error, isPending }
}



export const useLoanDetailsQuery = (Id: string) => {
    const { data, error, isPending } = useQuery({
        queryKey: ['loan-details', Id],
        queryFn: async () => {
            const res = await SERVER.get(`admin/loans/${Id}`)
            return res.data;
        },
        enabled: !!Id,
        retry: 1,
    })

    return { data, error, isPending }
}


export const useCellsQuery = () => {
    const { data, error, isPending } = useQuery({
        queryKey: ['cells'],
        queryFn: async () => {
            const res = await SERVER.get(`admin/contribution/cell/all`)
            return res.data;
        }
    })

    return { data, error, isPending }
}


export const useWalletQuery  = () => {
    const { data, error, isPending, refetch } = useQuery({
        queryKey: ['wallet'],
        queryFn: async () => {
            const res = await SERVER.get(`admin/wallets`)
            return res.data;
        }
    })

    return { data, error, isPending, refetch }
}



export const useWalletBankQuery  = () => {
    const { data, error, isPending, refetch } = useQuery({
        queryKey: ['official-banks'],
        queryFn: async () => {
            const res = await SERVER.get(`admin/banks/info`)
            return res.data;
        }
    })

    return { data, error, isPending, refetch }
}


export const useLoanMetricsQuery  = ({ duration, startDate, endDate }:  { duration?: string; startDate?: string; endDate?: string;
}) => {
    const { data, error, isPending } = useQuery({
        queryKey: ['loan-metrics', duration, startDate, endDate],
        queryFn: async () => {
            const res = await SERVER.get(`admin/loans/metrics`, {
                params: { duration, startDate, endDate }
            });
            return res.data;
        },
        enabled: !!duration || (!!startDate && !!endDate),
    })

    return { data, error, isPending }
}


export const useBankQuery = () => {
    const { data, error, isPending } = useQuery({
        queryKey: ['official-banks'],
        queryFn: async () => {
            const res = await SERVER.get(`admin/banks/info`)
            return res.data;
        }
    })

    return { data, error, isPending }
}
