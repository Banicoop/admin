import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
    count: number;
    page: number;
    onChange: (e: any, val: number) => void;
}

export default function PaginationComponent({count, page, onChange}: PaginationProps) {
  return (
    <Stack spacing={2}>
        <Pagination count={count} 
            onChange={onChange}
            page={page}
            variant='outlined' 
            color='primary' 
            sx={{
                '& .MuiPaginationItem-root': {
                    color: '#016AFF',            
                    borderColor: '#016AFF',      
                },
                '& .MuiPaginationItem-root:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)',
                },
                '& .Mui-selected': {
                    backgroundColor: '#016AFF !important',   
                    color: '#FFF !important',       
                    borderColor: '#fff',
                }
                }}
        />
    </Stack>
  );
}
