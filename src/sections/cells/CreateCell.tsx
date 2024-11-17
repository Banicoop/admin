import React, { ChangeEvent, FC, MouseEventHandler, useState } from 'react'
import BasicModal from '../../components/modals/BasicModal';
import Input from '../../components/inputs/Input';
import TextArea from '../../components/inputs/TextArea';
import Button from '../../components/buttons/Button';
import DateInput from '../../components/inputs/DateInput';
import Select from '../../components/inputs/Select';
import { useDispatch } from 'react-redux';
import { createCell } from '../../redux/slice/cellSlice';
import type { Dispatch } from '../../redux/store';


interface cType {
  open: boolean;
  onClose: any;
  onClick: MouseEventHandler<HTMLButtonElement>
}


interface IInput {
  cellName: string;
  totalUsers: number
  realUser: number;
  contributionAmount: number
  description: string;
  duration: number
  launchDate: string;
  endDate: string;
}

const options = [
  { value: "", label: "Collection Frequency" },
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "monthly", label: "Monthly" },
];


const initialState= {
  cellName: '',
  totalUsers: 0, 
  realUser: 0, 
  contributionAmount: 0, 
  description: '',
  duration: 0, 
  launchDate: '',
  endDate: '',
}


const CreateCell:FC<cType> = ({open, onClose, onClick}) => {


  const dispatch = useDispatch<Dispatch>();

  
  const [inputs, setInputs] = useState<IInput>(initialState);
  const [type, setType] = useState<string | null>(null);
  
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
   setType(event.target.value);
  };

  const handleInputsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: name === 'totalUsers' || name === 'realUser' || name === 'contributionAmount' || name === 'duration'
        ? parseInt(value, 10) || 0
        : value,
    });
  }


  const handleSubmit = async () => {
    const { cellName, totalUsers, realUser, contributionAmount, description, duration, launchDate, endDate } = inputs
    try {
      dispatch(createCell({cellName, totalUsers, realUser, contributionAmount, description, duration, launchDate,  endDate, type}));
      onClose();
    } catch (error) {
      console.log(error)
    }
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

            <DateInput value={inputs.launchDate} name='launchDate' onChange={handleInputsChange} text='Start Date'/>
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
