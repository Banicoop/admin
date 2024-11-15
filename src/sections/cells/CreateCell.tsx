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
  duration: '',
  startDate: '',
  endDate: ''
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


  const handleSubmit = async () => {
    console.log(inputs);
  }


  return (
    <div className='h-full overflow-y-auto'>
      <BasicModal h2='Create New Cell' p='Enter cell information to continue.' open={open} onClose={onClose}>
        <hr className="h-1" />

        <div className="flex flex-col w-full gap-3">

          <div className="flex flex-col md:flex-row md:flex-wrap w-full gap-2">
            <Input type='text' placeholder='Cell Name' name='cellName' value={inputs.cellName} onChange={handleInputsChange}/>
            <Input type='tel' placeholder='Duration' name='duration' value={inputs.duration} onChange={handleInputsChange}/>

            <Input type='tel' placeholder='Max. Number of Participant' name='totalUsers' value={inputs.totalUsers} onChange={handleInputsChange}/>
            <Input type='tel' placeholder='Min. Number of Participant' name='realUser' value={inputs.realUser} onChange={handleInputsChange}/>

            <Select options={options} name='Collection Frequency' id='collection' onChange={handleSelectChange}/>
            <Input type='text' placeholder='Contribution Amount (Naira)' value={inputs.contributionAmount} name='contributionAmount' onChange={handleInputsChange}/>

            <DateInput value={inputs.startDate} name='startDate' onChange={handleInputsChange} text='Start Date'/>
            <DateInput value={inputs.endDate} name='endDate' onChange={handleInputsChange} text='End Date'/>
          </div>
        <TextArea text='Cell Description' name='description' value={inputs.description} onChange={handleInputsChange}/>
        </div>


        <div className="flex items-center gap-2 justify-center">
          <Button text='Create New Cell' onClick={handleSubmit}/>
          <Button text='Cancel' cancel onClick={onClick}/>
        </div>

      </BasicModal>
    </div>
  )
}

export default CreateCell;
