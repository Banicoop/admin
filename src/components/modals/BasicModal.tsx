import React, { FC,  ReactNode } from 'react';
import { Box, Modal, Typography,} from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'maxContent',
    maxHeight: '100%', 
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '20px',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    p: { 
        xs: 2,
        sm: 4
    },
};
  

interface BasicModalProps {
    open: boolean;
    onClose: () => void;
    children?: ReactNode;
    h2: string;
    p: string;
}
  

const BasicModal:FC<BasicModalProps> = ({ open, onClose, children, h2, p }) => {
  return (
    <Modal open={open} onClose={onClose}>
        <Box sx={style}>
            <Typography variant='h1' sx={{color: '#000', fontSize: '18px', fontWeight: 500}}>{h2}</Typography>
            <Typography variant='h4' sx={{color: '#111', fontSize: '14px', fontWeight: 500}}>{p}</Typography>
            {children}
        </Box>
    </Modal>
  )
}

export default BasicModal;

