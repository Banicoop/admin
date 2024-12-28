import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React, { FC } from 'react';
import ActionBtn  from '../buttons/ActionBtn';
import Status from '../infos/Status';

interface ITbale {
  headcells: any;
  tableData: any[];
  onNavigate?: any
}

const BasicTable:FC<ITbale> = ({headcells, tableData, onNavigate}) => {
  return (
    <TableContainer sx={{ boxShadow: "none", border: '1px solid #fafafa', borderRadius: '20px 20px 0 0'}}>
      <Table>
        <TableHead  sx={{ marginY: '10px' }}>
          <TableRow sx={{ backgroundColor: '#fafafa', color: '#fff',  borderRadius: '10px' }}>
          {headcells?.map((data: any, i: any) => (
							<TableCell key={i} sx={{ fontWeight: 500, fontSize: 12, color: '#000' }}>
								{data?.name}
							</TableCell>
						))}
          </TableRow>
        </TableHead>

        <TableBody sx={{ backgroundColor: '#fff', color: '#000',  fontSize: 10 }}>
        {tableData?.map((row: any, rowIndex: any) => (
						<TableRow key={rowIndex}>
							{headcells?.map((col: any, colIndex: any) => (
								<TableCell align="left" key={colIndex} sx={{ fontWeight: 400, fontSize: 10 }}>
									{row[col.key]}
                  {col.key === "action" && (
                    <ActionBtn className='bg-bgR text-bgPurple border-[1px] flex gap-3 w-max items-center cursor-pointer rounded-3xl p-3 self-start' onClick={() => onNavigate(row.id)} img='/arrow-next.svg' text=''/>
                  )}
                  { col.key === 'status' &&
                  <Status text='withraw'/>
                  }
								</TableCell>
							))}

						</TableRow>
					))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable;
