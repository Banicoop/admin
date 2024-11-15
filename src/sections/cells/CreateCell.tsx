import React, { ChangeEvent, FC, MouseEventHandler, useState } from 'react'
import BasicModal from '../../components/modals/BasicModal';
import Input from '../../components/inputs/Input';
import TextArea from '../../components/inputs/TextArea';
import Button from '../../components/buttons/Button';
import DateInput from '../../components/inputs/DateInput';
import Select from '../../components/inputs/Select';

interface cType {
  open: boolean;
  onClose: any;
  onClick: MouseEventHandler<HTMLButtonElement>
}

const options = [
  { value: "", label: "Collection Frequency" },
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
];


const initialState = {
  cellName: '',
  totalUsers: '',
  realUser: '',
  contributionAmount: '',
  description: '',
  duration: ''
}


const CreateCell:FC<cType> = ({open, onClose, onClick}) => {

  const handleSelectChange = (event: any) => {
    console.log(event.target.value);
  };

  const [inputs, setInputs] = useState(initialState);

  const handleInputsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({...inputs, [name]: value})
  }


  return (
    <div className='h-full overflow-y-auto'>
      <BasicModal h2='Create New Cell' p='Enter cell information to continue.' open={open} onClose={onClose}>
        <hr className="h-1" />

        <div className="flex flex-col w-full gap-3">

          <div className="flex flex-col md:flex-row w-full gap-2">
            <Input type='text' placeholder='Cell Name' onChange={handleInputsChange}/>
            <Input type='text' placeholder='Duration' onChange={handleInputsChange}/>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-2">
            <Input type='tel' placeholder='Max. Number of Participant' onChange={handleInputsChange}/>
            <Input type='tel' placeholder='Min. Number of Participant' onChange={handleInputsChange}/>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-2">
            <Select options={options} name='Collection Frequency' id='collection' onChange={handleSelectChange}/>
            <Input type='text' placeholder='Contribution Amount (Naira)' onChange={handleInputsChange}/>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-2 mt-3">
            <DateInput text='Start Date'/>
            <DateInput text='End Date'/>
          </div>
        <TextArea text='Cell Description' onChange={handleInputsChange}/>
        </div>


        <div className="flex items-center gap-2 justify-center">
          <Button text='Create New Cell' onClick={() => {}}/>
          <Button text='Cancel' cancel onClick={onClick}/>
        </div>

      </BasicModal>
    </div>
  )
}

export default CreateCell;
