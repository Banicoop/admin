import React, { FC, MouseEventHandler } from 'react'
import BasicModal from '../../components/modals/BasicModal';
import Input from '../../components/inputs/Input';
import TextArea from '../../components/inputs/TextArea';
import Button from '../../components/buttons/Button';
import DateInput from '../../components/inputs/DateInput';

interface cType {
  open: boolean;
  onClose: any;
  onClick: MouseEventHandler<HTMLButtonElement>
}

const CreateCell:FC<cType> = ({open, onClose, onClick}) => {
  return (
    <div className='h-full overflow-y-auto'>
      <BasicModal h2='Create New Cell' p='Enter cell information to continue.' open={open} onClose={onClose}>
        <hr className="h-1" />

        <div className="flex flex-col w-full gap-3">

          <div className="flex flex-col md:flex-row w-full gap-2">
            <Input type='text' placeholder='Cell Name'/>
            <Input type='tel' placeholder='Target Amount (Naira)'/>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-2">
            <Input type='tel' placeholder='Max. Number of Participant'/>
            <Input type='tel' placeholder='Min. Number of Participant'/>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-2">
            <Input type='tel' placeholder='Duration'/>
            <Input type='text' placeholder='Contribution Amount (Naira)'/>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-2 mt-3">
            <DateInput text='Start Date'/>
            <DateInput text='End Date'/>
          </div>
        <TextArea text='Cell Description'/>
        </div>


        <div className="flex items-center gap-2 justify-between">
          <Button text='Create New Cell' onClick={() => {}}/>
          <Button text='Cancel' cancel onClick={onClick}/>
        </div>

      </BasicModal>
    </div>
  )
}

export default CreateCell;
