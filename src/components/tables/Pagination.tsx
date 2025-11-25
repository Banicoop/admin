import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationComponent({count}: {count: number}) {
  return (
    <Stack spacing={2}>
        <Pagination count={count} 
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
