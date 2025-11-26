import { CircularProgress } from '@mui/material';
import React, { FC } from 'react';
import PaginationComponent from './Pagination';

interface IColumn {
  header: string;
  accessor: string;
  className?: string;
}

interface ITable {
  columns: IColumn[];
  data: any[];
  renderRow: (item: any) => React.ReactNode;
  status?: 'pending' | 'failed' | 'succeeded';

  // pagination props
  page?: number;
  perPage?: number;
  total?: number;
  onPageChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
}

const Table: FC<ITable> = ({
  columns,
  renderRow,
  data,
  status,
  page = 1,
  total,
  onPageChange,
  perPage,
}) => {
  const colSpan = columns?.length || 1;

  return (
    <section className="w-full">
      <table className="mt-4 w-full">
        <thead className="text-left text-[#242424] text-sm bg-[#E9E7EB] w-full rounded-lg">
          <tr>
            {columns?.map((col) => (
              <th className={`${col.className} p-3`} key={col.accessor}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data?.map((item) => {
            const row = renderRow(item);
            return React.isValidElement(row) && row.key == null ? (
              React.cloneElement(row, { key: item._id ?? JSON.stringify(item) })
            ) : (
              row
            );
          })}

          {status === 'pending' && (
            <tr>
              <td colSpan={colSpan} className="py-6">
                <div className="flex justify-center">
                  <CircularProgress />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Section */}
      {typeof total === 'number' && typeof perPage === 'number' && perPage > 0 && (
        <div className="flex justify-center mt-6">
          <PaginationComponent
            count={Math.max(1, Math.ceil(total / perPage))}
            page={page}
            onChange={(e, value) => onPageChange?.(e as React.ChangeEvent<unknown>, value)}
          />
        </div>
      )}
    </section>
  );
};

export default Table;

