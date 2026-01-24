import React, { ChangeEvent, FC, MouseEventHandler, useState } from 'react'
import BasicModal from '../../components/modals/BasicModal';
import Input from '../../components/inputs/Input';
import TextArea from '../../components/inputs/TextArea';
import Button from '../../components/buttons/Button1';
import DateInput from '../../components/inputs/DateInput';
import Select from '../../components/inputs/Select';
import { useDispatch, useSelector } from 'react-redux';
import { createCell, getCells } from '../../redux/slice/cellSlice';
import type { Dispatch } from '../../redux/store';
import { toast } from 'react-toastify';
import { toastOptions } from '../../helpers/toastOptions';


interface cType {
  open: boolean;
  onClose: () => void
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
  const { status } = useSelector((state: any) => state.cell)
 
  
  const [inputs, setInputs] = useState<IInput>(initialState);
  const [type, setType] = useState<string | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);


  const calculateDuration = (type: string | null, launchDate: string, endDate: string): number => {
    if (!launchDate || !endDate) return 0;

    const launchDateObj = new Date(launchDate);
    const endDateObj = new Date(endDate);
    const diffInMs = endDateObj.getTime() - launchDateObj.getTime();
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    switch (type) {
      case 'daily':
        return diffInDays;
      case 'weekly':
        return diffInDays / 7;
      case 'monthly':
        return diffInDays / 28;
      default:
        return 0;
    }
  };


  const updateDuration = () => {
    const newDuration = calculateDuration(type, inputs.launchDate, inputs.endDate);
    setInputs((prevInputs) => ({
      ...prevInputs,
      duration: Math.max(0, Math.floor(newDuration)),
    }));
  };
  
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
   setType(event.target.value);
   setTimeout(updateDuration, 0); 
  };

  const handleInputsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: name === 'totalUsers' || name === 'realUser' || name === 'contributionAmount' || name === 'duration'
        ? parseInt(value, 10) || 0
        : value,
    });

    if (name === 'launchDate' || name === 'endDate') {
      setTimeout(updateDuration, 0);
    }
  }


  const handleSubmit = async () => {
    const { cellName, totalUsers, realUser, contributionAmount, description, launchDate, endDate } = inputs
    if( !cellName || !totalUsers || !realUser || !contributionAmount || !description || !launchDate || !endDate) {
        toast.warn(`Please fill out the fields`, {...toastOptions});
        return;
    }

    try {
      dispatch(createCell({cellName, totalUsers, realUser, contributionAmount, description, launchDate,  endDate, type}));
        if (status === 'succeeded') {
          // setInputs(initialState);
          // onClose(); 
          return;
        }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(getCells());
    }
  }



  const showAllFields = () => {
    const { cellName, launchDate, endDate } = inputs;
    if (cellName.trim() && type && launchDate.trim() && endDate.trim()) {
      setShowAll(true);
      updateDuration();
    } 
  }


  return (
    <div className='h-full overflow-y-auto'>
      <BasicModal h2='Create New Cell' p='Enter cell information to continue.' open={open} onClose={onClose}>
        <hr className="h-1" />

        <div className="flex flex-col w-full gap-3">

          <div className="flex flex-col md:flex-row md:flex-wrap w-full gap-5 justify-between">

            <Input 
              type='text' 
              placeholder='Cell Name' 
              name='cellName' 
              className='w-[342px] md:w-[47%]'
              value={inputs.cellName} onChange={handleInputsChange}/>

            <Select 
              className='w-[342px] h-[50px] md:w-[47%]' 
              options={options} name='Collection Frequency' 
              id='collection' onChange={handleSelectChange}/>

            <DateInput 
              value={inputs.launchDate} 
              name='launchDate' 
              className='w-[342px] md:w-[47%]'
              onChange={handleInputsChange} text='Start Date'/>

            <DateInput 
              value={inputs.endDate} 
              name='endDate' 
              className='w-[342px] md:w-[47%]'
              onChange={handleInputsChange} text='End Date'/>
          </div>
            
            {!showAll &&
              <div className="flex justify-center mx-auto">
                <Button text='Continue' onClick={showAllFields}/>
              </div>}
          
          { showAll &&
          <>
           <div className="flex flex-col md:flex-row w-full gap-3">

            <Input type='tel' placeholder={inputs.duration} name='duration'  value={inputs.duration || ''} onChange={handleInputsChange}  readOnly/>

            <Input type='tel' placeholder='Max. Number of Participant' name='totalUsers' value={inputs.totalUsers} onChange={handleInputsChange}/>

            <Input type='tel' placeholder='Must be 2 less than Max user' name='realUser' value={inputs.realUser} onChange={handleInputsChange}/>

            <Input type='text' placeholder='Contribution Amount (Naira)' value={inputs.contributionAmount} name='contributionAmount' onChange={handleInputsChange}/>

          </div>
          <TextArea text='Must be more than 10 words' name='description' value={inputs.description} onChange={handleInputsChange}/>
          </>
          }
        </div>

      { showAll &&
        <div className="flex items-center gap-2 justify-center">
          <Button 
            loading={status}
            text={`${status === 'pending' ? 'Processing...' : 'Create New Cell'}`} 
            onClick={handleSubmit} />

          <Button text='Cancel' cancel onClick={onClick}/>
        </div>}

      </BasicModal>
    </div>
  )
}

export default CreateCell;
