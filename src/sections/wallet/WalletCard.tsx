import React, { FC, useCallback, useReducer, useState } from 'react'
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
import Select from '../../components/inputs/Select';
import { useBankQuery } from '../../utils/api';




type WType = {
    title: string;
    url?: string;
    item: any
}


const WalletCard:FC<WType> = ({title, url, item}) => {

  const { data } = useBankQuery();

  console.log(data);


  const options = [
    { value: "", label: "Select Bank/Wallet" },
    { value: "daily", label: "Access Bank" },
    { value: "weekly", label: "First Bank Ltd" },
    { value: "monthly", label: "GTB" },
  ];


    const walletDetails = [
        {
          name: 'Wallet Number',
          details: '00112233445588'
        },
        {
          name: 'Acct. Name',
          details: 'Pochi'
        },
        {
          name: 'Bank Name',
          details: 'Bank of NG'
        },
      ]
      
      


    const initialState = {
        activeItem: 'Today',
        modalState: 'closed', 
      };

        const navigate = useNavigate();


      const [state, dispatch] = useReducer(reducer, initialState);
      const [openAddFund, setOpenAddFund] = useState(false);


          const openSendFundsModal = useCallback(() => dispatch({ type: 'SET_MODAL_STATE', payload: 'inputs' }), []);
          const closeModal = useCallback(() => dispatch({ type: 'CLOSE_MODAL' }), []);
          const proceedToOtp = useCallback(() => dispatch({ type: 'SET_MODAL_STATE', payload: 'otp' }), []);
          const proceedToSuccess = useCallback(() => dispatch({ type: 'SET_MODAL_STATE', payload: 'success' }), []);
          const goToDashboard = useCallback(() => navigate('/wallet'), [navigate]);
      
    

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
            <div>
              {/* <AuthInput placeholder='Enter Account/Wallet Number' type='' onChange={() => {}}/> */}
              <AuthInput placeholder='Enter Amount' type='tel' onChange={() => {}}/>
              <Select className='py-3 h-[70px]' options={options} onChange={() => {}} name='Select Bank/Wallet' />
              {/* <AuthInput placeholder='Select Bank/Wallet' type='' onChange={() => {}}/> */}

              <div className="">
                <TextArea text='Narration'/>
              </div>

              <ActionBtn className='flex items-center text-center justify-center mx-auto gap-3  shadow-lg px-[20px] py-[12px] border-[1px] rounded-[16px] bg-bgPurple text-bgWhite font-[400] h-[48px] w-[160px]' 
              text='Proceed' 
              onClick={proceedToOtp}  
              img='/wallet/send.svg' className2='h-[16px] w-[16px]'/>
            </div>
            }

            {state.modalState === 'otp' &&
            <div className="flex flex-col gap-7">
              <OtpInput onChange={() => {}} className=''/>

                <div className="flex justify-center items-center gap-[20px]">
                <ActionBtn 
                  className='flex items-center text-center justify-center mx-auto gap-3  shadow-lg px-[20px] py-[12px] border-[1px] rounded-full bg-[#6922D10A] text-bgPurple font-[400] h-[48px] w-[160px]' 
                  text='Go Back' 
                  onClick={() => dispatch({ type: 'SET_MODAL_STATE', payload: 'inputs' })}  />

                <ActionBtn className='flex items-center text-center justify-center mx-auto gap-3  shadow-lg px-[20px] py-[12px] border-[1px] rounded-full bg-bgPurple text-bgWhite font-[400] h-[48px] w-[160px]' 
                text='Proceed' 
                onClick={proceedToSuccess} />
                </div>
            </div>
              }

              {state.modalState === 'success'  &&
                <div className="flex flex-col gap-4 p-6 max-w-[700px]">
                  <img src="/admin/x.svg" alt="" className="h-[16px] w-[16px] flex ml-auto cursor-pointer" onClick={closeModal} />

                  <div className="flex flex-col justify-center items-center gap-5">
                    <img src="/wallet/archive-tick.svg" alt="" className="h-[64px] w-[64px]" />

                    <h4>Transaction Successful</h4>
                    <span className="">Your transaction has been successfully completed.</span>

                    <div className="flex justify-center items-center gap-[20px]">
                      <ActionBtn 
                        className='flex items-center text-center justify-center mx-auto gap-3  shadow-lg px-[20px] py-[12px] border-[1px] rounded-full bg-[#6922D10A] text-bgPurple font-[400] h-[48px] w-[160px]' 
                        text='Go to Dashboard' 
                        onClick={goToDashboard}  />

                      <ActionBtn 
                        className='flex items-center text-center justify-center mx-auto gap-3  shadow-lg px-[20px] py-[12px] border-[1px] rounded-full bg-bgPurple text-bgWhite font-[400] h-[48px] w-[160px]' 
                        text=' View Details' 
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
          <h4 className="'text-[#000000] font-[500] text-[16px]'">Add Funds</h4>

          <div className="flex items-center gap-4 justify-between">
            {
              walletDetails.map((d) => (
              <div className="flex flex-col gap-2" key={d.name}>
                  <h4 className="text-[#6922D1] text-sm font-[400]">{d.name}</h4>
                  <p className="text-[#333333] text-[14px] font-[500]">{d.details}</p>
              </div>
              ))
            }
          </div>
        </div>
    </DeleteModal>
    </>
  )
}

export default WalletCard;
