import { useQuery } from '@tanstack/react-query';
import SERVER from './server';


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


export const usePendingLoanQuery = () => {
    const { data, error, isPending } = useQuery({
        queryKey: ['pending-loans'],
        queryFn: async () => {
            const res = await SERVER.get(`admin/loans?status=pending`)
            return res.data;
        }
    })

    return { data, error, isPending }
}



export const useAllLoansQuery = () => {
    const { data, error, isPending } = useQuery({
        queryKey: ['all-loans'],
        queryFn: async () => {
            const res = await SERVER.get(`admin/loans`)
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
        }
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
    const { data, error, isPending } = useQuery({
        queryKey: ['wallet'],
        queryFn: async () => {
            const res = await SERVER.get(`admin/wallets`)
            return res.data;
        }
    })

    return { data, error, isPending }
}



export const useWalletBankQuery  = () => {
    const { data, error, isPending } = useQuery({
        queryKey: ['official-banks'],
        queryFn: async () => {
            const res = await SERVER.get(`admin/banks/info`)
            return res.data;
        }
    })

    return { data, error, isPending }
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
