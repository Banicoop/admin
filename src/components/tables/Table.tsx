import { CircularProgress } from '@mui/material';
import React, { FC } from 'react';
import PaginationComponent from './Pagination';


interface ITable {
    columns: {
        header: string; 
        accessor: string; 
        className?: string
    }[];
    data: any[];
    renderRow: any;
    status?: 'pending' | 'failed' | 'succeeded'

    // NEW pagination props
    page?: number;
    perPage?: number;
    total?: number;
    onPageChange?: (event: any, value: number) => void;
}

const Table:FC<ITable> = ({columns, renderRow, data, status, page, total, onPageChange, perPage}) => {
  return (
    <section className="w-full">
        <table className='mt-4 w-full'>
            <thead className='text-left text-[#242424] text-sm bg-[#E9E7EB] w-full rounded-lg'>
                {columns?.map((col) => (
                    <th className={`${col.className} p-3`} key={col.accessor}>{col.header}</th>
                ))}
            </thead>

            <tbody>
                { data?.map((item) => renderRow(item))}
                <span className="flex w-full justify-center items-center m-auto">
                    {status === 'pending' && 
                        <CircularProgress  sx={{display: 'flex', margin: 'auto'}}/>
                    }
                </span>
            </tbody>
        </table>

        {/* Pagination Section */}
        {total && perPage && (
            <div className="flex justify-center mt-6">
            <PaginationComponent
                count={Math.ceil(total / perPage)}
                page={page ?? 1}
                onChange={onPageChange!}
            />
            </div>
        )}
    </section>
  )
}

export default Table;
