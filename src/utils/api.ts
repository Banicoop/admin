import { useQuery } from '@tanstack/react-query';
import SERVER from './server';
import { AllLoanType } from './type';


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



export const useAllLoansQuery = ({status, startDate, endDate, search}: AllLoanType) => {
    const { data, error, isPending } = useQuery({
        queryKey: ['loans', status, startDate, endDate, search],
        queryFn: async () => {

            const params = new URLSearchParams();

            if (status) params.append('status', status);
            if (startDate) params.append('startDate', startDate);
            if (endDate) params.append('endDate', endDate);
            if (search) params.append('search', search);

            const res = await SERVER.get(`admin/loans?${params.toString()}`)
            return res.data;
        }
    })

    return { data, error, isPending }
}



export const useLoanDetailsQuery = (Id: string) => {
    const { data, error, isPending } = useQuery({
        queryKey: ['loan-details'],
        queryFn: async () => {
            const res = await SERVER.get(`admin/loans/${Id}`)
            return res.data;
        },
        enabled: !!Id
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


export const useLoanMetricsQuery  = () => {
    const { data, error, isPending } = useQuery({
        queryKey: ['loan-metrics'],
        queryFn: async () => {
            const res = await SERVER.get(`admin/loans/metrics`)
            return res.data;
        }
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
