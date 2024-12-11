import React, { FC,  ReactNode } from 'react';
import { Box, Modal } from '@mui/material';

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
    outline: 'none',
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

interface DeleteModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}


const DeleteModal: FC<DeleteModalProps> = ({open, onClose, children}) => {
    return(
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    )
}

export default DeleteModal;
