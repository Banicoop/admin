import React, { ChangeEvent, FC, useCallback, useReducer, useState } from 'react'
import SmallCard from './SmallCard';
import BtnCard from './Box'
import { Link } from 'react-router-dom';
import DeleteModal from '../../components/modals/DeleteModal';
import { AuthInput } from '../../components/inputs/Input';
import TextArea from '../../components/inputs/TextArea';
import OtpInput from '../../components/inputs/OtpInput';
import reducer from './reducer';
import ActionBtn from '../../components/buttons/ActionBtn';
import { useNavigate } from 'react-router-dom';
import { useBankQuery } from '../../utils/api';
import AddFundsCard from './AddFundsCard';
import { Option } from '../../components/inputs/Select';
import SERVER from '../../utils/server';
import { toast } from 'react-toastify';
import { toastOptions } from '../../utils/toastOptions';
import { WType } from '../../type';



const WalletCard:FC<WType> = ({title, url, item}) => {


  const initailDetailState = {
    amount: 0,
    narration: '',
    // sourceAccountNumber: ''
  }

      const { data } = useBankQuery();


      const options = data?.payload?.map((bank: any) => {
      
        return {
          value: String(bank?.id),
          label: bank?.name,
          bankName: bank?.name,
          bankCode: bank?.code,
          bankAccountName: bank?.accountName,
          key: bank?.id
        };
      }) || [];
  

      const initialState = {
        activeItem: 'Today',
        modalState: 'closed', 
      };

      const navigate = useNavigate();

      const [details, setDetails] = useState(initailDetailState)
      const [pin, setPin] = useState('');
      const [selectedBank, setSelectedBank] = useState<Option | null>(null);

      const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        const selected = options.find((option: Option) => option.value === selectedValue);
        if (selected) {
          setSelectedBank(selected);
        }
      };

      const handlePinChange = (val: string) => {
        setPin(val)
      }


      const handleDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setDetails({...details, [name]: value})
      }


      const [state, dispatch] = useReducer(reducer, initialState);
      const [openAddFund, setOpenAddFund] = useState(false);
      const [success, setSuccess] = useState(false);


      const openSendFundsModal = useCallback(() => dispatch({ type: 'SET_MODAL_STATE', payload: 'inputs' }), []);
      const closeModal = useCallback(() => dispatch({ type: 'CLOSE_MODAL' }), []);
      const proceedToOtp = useCallback(() => dispatch({ type: 'SET_MODAL_STATE', payload: 'otp' }), []);
      const proceedToSuccess = useCallback(() => dispatch({ type: 'SET_MODAL_STATE', payload: 'success' }), []);
      const goToDashboard = useCallback(() => navigate('/wallet'), [navigate]);



      const handleSubmit = async () => {
        const payload = {
          bankName: selectedBank?.bankName,
          bankCode: selectedBank?.bankCode,
          bankAccountName: selectedBank?.bankAccountName,
          amount: details.amount,
          narration: details.narration,
          walletNumber: item?.walletNumber,
          pin
        }
       
        try {
          const res = await SERVER.post('/admin/transfer/wallet/bank', payload);
          toast.success('Transaction completed successfully!', {...toastOptions})
          setSuccess(true);
          setDetails(initailDetailState);
          return res.data
        } catch (error: any) {
          if(error){
            const err = error?.response?.data?.message || "Something went wrong. Please try again.";
            toast.error(`${err}`, {...toastOptions})
          }
          setSuccess(false)
        }
      }


      const isButtonEnabled = pin.length === 4;
      
      const isFormComplete =
          // details.sourceAccountNumber.trim() !== '' &&
          details.amount > 0 &&
          details.narration.trim() !== '' &&
          selectedBank !== null;

    

  return (
    <>
        <div className='bg-[#E6E6E626] rounded-[28px] p-[30px] h-[343px] w-full lg:w-[47%] flex gap-5 justify-between '>
            <div className="flex flex-col gap-3 justify-between">
                <Link to={url ?? "#"} className="text-[#000000]">{title}</Link>

                <div className="flex flex-col gap-2">
                    <h4 className="text-[#6922D1] text-sm font-[400]">Available Balance</h4>
                    <p className="text-[#333333] text-[20px] lg:text-[37px] font-[600]">₦{item.availableBalance}</p>
                </div>

                <div className="flex items-center gap-4">
                    <SmallCard title='Acct. Number' text={item.accountNumber}/>
                    <SmallCard title='Acct. Name' text={item.accountName} />
                    <SmallCard title='Bank Name' text={item.bank.name}/>
                </div>
            </div>

            <div className="flex flex-col gap-2 justify-between">
                <BtnCard className='bg-bgWhite cursor-pointer' img='/wallet/minus.png' onClick={() => {}}/>
                <BtnCard 
                  className='bg-bgWhite cursor-pointer' 
                  img='/wallet/wallet-add.png' 
                  onClick={() => {
                  setOpenAddFund(true)}}/>

                <BtnCard 
                  className='bg-bgPurple cursor-pointer' 
                  img='/wallet/send-2.png' 
                  onClick={openSendFundsModal}/>
            </div>
        </div>


        {/* Modal */}
        <DeleteModal open={state.modalState !== 'closed'} onClose={closeModal}>
        <div className="flex flex-col gap-4 p-6 max-w-[700px]">
          { state.modalState !== 'success' && 
          <>
            <img src="/admin/x.svg" alt="" className="h-[16px] w-[16px] flex ml-auto cursor-pointer" onClick={closeModal} />
            <h4 className='text-[#000000] font-[500] text-[16px]'>{state.modalState === 'otp' ? 'Enter Pin': 'Send Funds'}</h4>
          </>
          }
            
            {state.modalState === 'inputs' &&
            <div className="flex flex-col gap-4">
              {/* <AuthInput placeholder='Enter Account/Wallet Number' value={details.sourceAccountNumber} name='sourceAccountNumber' type='tel' onChange={handleDetailsChange}/> */}
              <AuthInput placeholder='Enter Amount' name='amount' value={details.amount} type='tel' onChange={handleDetailsChange}/>

              <div className="'py-3 h-[70px]">
                <select onChange={handleSelectChange} className='w-full h-full border-[1px] outline-none rounded-lg px-2 bg-white'>
                <option value="">Select Bank/Wallet</option>
                {options.map((option: any) => (
                    <option key={option.id} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="">
                <TextArea text='Narration' onChange={handleDetailsChange} value={details.narration} name='narration'/>
              </div>

                <ActionBtn 
                  className='flex items-center text-center justify-center mx-auto gap-3  shadow-lg px-[20px] py-[12px] border-[1px] rounded-[16px] bg-bgPurple text-bgWhite font-[400] h-[48px] w-[160px]' 
                  text='Proceed' 
                  disabled={!isFormComplete}
                  onClick={proceedToOtp}  
                  img='/wallet/send.svg' className2='h-[16px] w-[16px]'/>
            </div>
            }

            {state.modalState === 'otp' &&
            <div className="flex flex-col gap-7">
              <OtpInput onChange={handlePinChange} className=''/>

                <div className="flex justify-center items-center gap-[20px]">
                <ActionBtn 
                  className='flex items-center text-center justify-center mx-auto gap-3  shadow-lg px-[20px] py-[12px] border-[1px] rounded-full bg-[#6922D10A] text-bgPurple font-[400] h-[48px] w-[160px]' 
                  text='Go Back' 
                  onClick={() => dispatch({ type: 'SET_MODAL_STATE', payload: 'inputs' })}  />

   
                <ActionBtn className='flex items-center text-center justify-center mx-auto gap-3  shadow-lg px-[20px] py-[12px] border-[1px] rounded-full bg-bgPurple text-bgWhite font-[400] h-[48px] w-[160px]' 
                text='Proceed' 
                disabled={!isButtonEnabled}
                onClick={() => {
                  handleSubmit()
                  proceedToSuccess()
                }} /> 
                </div>
            </div>
              }

              {state.modalState === 'success'  &&
                <div className="flex flex-col gap-4 p-6 max-w-[700px]">
                  <img src="/admin/x.svg" alt="" className="h-[16px] w-[16px] flex ml-auto cursor-pointer" onClick={closeModal} />

                  <div className="flex flex-col justify-center items-center gap-5">
                    <img src={success ? "/wallet/archive-tick.svg": '/wallet/remove.svg'} alt="" className="h-[64px] w-[64px]" />

                    <h4 className='font-[500] text-[18px] text-bgBlack leading-[100%]'>
                      {success ? 'Transaction Successful': 'Transaction Unsuccessful' }
                      </h4>
                    <span className="font-[300] text-[12px] text-bgBlack leading-[100%]">
                      {success ? 
                      'Your transaction has been successfully completed.': 
                      'Your transaction was not successful'}
                      </span>

                    <div className="flex justify-center items-center gap-[10px] w-full">
                      <ActionBtn 
                        className='flex items-center text-center justify-center shadow-lg px-[20px] py-[12px] border-[1px] rounded-full bg-[#6922D10A] text-bgPurple font-[400]' 
                        text='Go to Dashboard' 
                        onClick={goToDashboard}  />

                      <ActionBtn 
                        className='flex items-center text-center justify-center shadow-lg px-[20px] py-[12px]  border-[1px] rounded-full bg-bgPurple text-bgWhite font-[400]' 
                        text='View Details' 
                        onClick={closeModal} />
                      </div>
                  </div>
                </div>
              }
        </div>
        
    </DeleteModal>


    <DeleteModal open={openAddFund} onClose={() => setOpenAddFund(false)}>
        <div className="flex flex-col gap-4 p-6 max-w-[700px]">
          <img src="/admin/x.svg" alt="" className="h-[16px] w-[16px] flex ml-auto cursor-pointer" onClick={() => setOpenAddFund(false)} />
          <h4 className="text-[#000000] font-[500] text-[16px]'">Add Funds</h4>


          <div className="flex flex-col gap-7">
            <AddFundsCard bankType='Wallet Acct Number' acctName={item.accountName} bankName={item.bank.name} acctNum={item.accountNumber}/>
            <AddFundsCard bankType='NUBAN Acct Number' acctName={item.accountName} bankName={item.bank.name} acctNum={item.accountNumber}/>
          </div>

        </div>
    </DeleteModal>
    </>
  )
}

export default WalletCard;
