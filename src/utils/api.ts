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

