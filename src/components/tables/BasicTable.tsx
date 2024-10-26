import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React, { FC } from 'react';
import { ActionBtn } from '../buttons/ExportBtn';
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
        <TableHead>
          <TableRow sx={{ backgroundColor: '#6922D1', color: '#fff' }}>
          {headcells?.map((data: any, i: any) => (
							<TableCell key={i} sx={{ fontWeight: 500, fontSize: 14, color: '#fff' }}>
								{data?.name}
							</TableCell>
						))}
          </TableRow>
        </TableHead>

        <TableBody sx={{ backgroundColor: '#fafafa', color: '#000' }}>
        {tableData?.map((row: any, rowIndex: any) => (
						<TableRow key={rowIndex}>
							{headcells?.map((col: any, colIndex: any) => (
								<TableCell align="left" key={colIndex} sx={{ fontWeight: 400, fontSize: 13 }}>
									{row[col.key]}
                  {col.key === "action" && (
                    <ActionBtn onClick={() => onNavigate(row.id)}/>
                  )}
                  { col.key === 'status' &&
                  <Status text='Pending'/>
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
