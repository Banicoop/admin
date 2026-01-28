export interface AllLoanType {
    status?: string;
    startDate?: string;
    endDate?: string;
    search?: string;
    page?: number
}

export type DownloadLoanParams = {
  duration?: string;
  startDate?: string;
  endDate?: string;
};
