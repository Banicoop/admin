import React, { FC } from 'react';


interface ITable {
    columns: {
        header: string; 
        accessor: string; 
        className?: string
    }[];
    data: any[];
    renderRow: any
}

const Table:FC<ITable> = ({columns, renderRow, data}) => {
  return (
    <table className='mt-4 w-full'>
        <thead className='text-left text-[#242424] text-sm bg-[#E9E7EB] w-full rounded-lg'>
            {columns.map((col) => (
                <th className={`${col.className} p-3`} key={col.accessor}>{col.header}</th>
            ))}
        </thead>

        <tbody>
            {data.map((item) => renderRow(item))}
        </tbody>
    </table>
  )
}

export default Table;
