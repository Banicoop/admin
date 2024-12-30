import { CircularProgress } from '@mui/material';
import React, { FC } from 'react';


interface ITable {
    columns: {
        header: string; 
        accessor: string; 
        className?: string
    }[];
    data: any[];
    renderRow: any;
    status: 'pending' | 'failed' | 'succeeded'
}

const Table:FC<ITable> = ({columns, renderRow, data, status}) => {
  return (
    <table className='mt-4 w-full'>
        <thead className='text-left text-[#242424] text-sm bg-[#E9E7EB] w-full rounded-lg'>
            {columns?.map((col) => (
                <th className={`${col.className} p-3`} key={col.accessor}>{col.header}</th>
            ))}
        </thead>

        <tbody>
            {status === 'succeeded' && data?.map((item) => renderRow(item))}
            <div className="flex w-full justify-center items-center m-auto">
                {status === 'pending' && 
                    <CircularProgress  sx={{display: 'flex', margin: 'auto'}}/>
                }
            </div>
        </tbody>
    </table>
  )
}

export default Table;
