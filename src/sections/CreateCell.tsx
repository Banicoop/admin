import React, { FC } from 'react'
import BasicModal from '../components/modals/BasicModal';
import Input from '../components/inputs/Input';

interface cType {
  open: boolean;
  onClose: any
}

const CreateCell:FC<cType> = ({open, onClose}) => {
  return (
    <div className=''>
      <BasicModal h2='Create New Cell' p='Enter cell information to continue.' open={open} onClose={onClose}>
        <Input/>
      </BasicModal>
    </div>
  )
}

export default CreateCell;
