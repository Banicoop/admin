import { formatDate } from "../../helpers/funcs";

export const getQueryParams = (label: string) => {
  const now = new Date();
  const endDate = formatDate(now);
  let startDate: string;

  switch (label) {
    case 'Last 7 days':
      startDate = formatDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
      return { duration: 'custom', startDate, endDate };

    case 'Last 30 days':
      startDate = formatDate(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000));
      return { duration: 'custom', startDate, endDate };

    case 'Today':
      return {duration: 'Today' }
    case 'All Time':
    default:
      return { duration: 'allTime' }; 
  }
};


export const getAllLoanQuery = (status: string) => {
    switch(status){
      case 'pending':
        return { status: 'pending' };
      case 'overdue':
        return { status: 'overdue' };
      case 'paid':
        return { status: 'paid' };
      case 'approved':
        return { status: 'approved' };
      case 'disbursed':
        return {status: 'disbursed'};
      default:
        return {status: ''}
    }
}

