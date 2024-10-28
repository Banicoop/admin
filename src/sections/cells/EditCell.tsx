import React, { FC, MouseEventHandler } from 'react';
import BasicModal from '../../components/modals/BasicModal';
import Input from '../../components/inputs/Input';
import Button from '../../components/buttons/Button';

interface cType {
  open: boolean;
  onClose: any;
  onClick: MouseEventHandler<HTMLButtonElement>
}

const EditCell:FC<cType> = ({open, onClose, onClick}) => {
  return (
    <div className='h-full overflow-y-auto'>
      <BasicModal h2='Edit Cell Details' p='Enter new cell information to continue.' open={open} onClose={onClose}>
        <hr className="h-1" />

        <Input type='text' placeholder='Cell Name'/>
        <Input type='tel' placeholder='No of Participants'/>
        <Input type='tel' placeholder='Contribution Amount'/>
        <Input type='tel' placeholder='Duration'/>


        <div className="flex items-center gap-2 justify-between">
          <Button text='Create New Cell' onClick={() => {}}/>
          <Button text='Cancel' cancel onClick={onClick}/>
        </div>

      </BasicModal>
    </div>
  )
}

export default EditCell;
