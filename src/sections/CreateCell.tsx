import React, { FC } from 'react'
import BasicModal from '../components/modals/BasicModal';
import Input from '../components/inputs/Input';
import TextArea from '../components/inputs/TextArea';
import Button from '../components/buttons/Button';

interface cType {
  open: boolean;
  onClose: any
}

const CreateCell:FC<cType> = ({open, onClose}) => {
  return (
    <div className='min-h-full overflow-y-scroll'>
      <BasicModal h2='Create New Cell' p='Enter cell information to continue.' open={open} onClose={onClose}>
        <hr className="h-1" />

        <Input type='text' placeholder='Cell Name'/>
        <Input type='tel' placeholder='No of Participants'/>
        <Input type='tel' placeholder='Minimum no of Participants'/>
        <Input type='tel' placeholder='Contribution Amount'/>
        <Input type='tel' placeholder='Duration'/>
        <textarea placeholder='Cell Description' className='px-2 py-3 rounded-2xl border-[1px] w-full h-40 outline-none resize-none'/>
        {/* <Input type='tel' placeholder='Duration'/>
        <Input type='tel' placeholder='Duration'/>
        <Input type='tel' placeholder='Duration'/> */}
        {/* <TextArea/> */}

        <div className="flex items-center gap-2 justify-between">
          <Button text='Create New Cell'/>
          <Button text='Cancel' cancel/>
        </div>

      </BasicModal>
    </div>
  )
}

export default CreateCell;
