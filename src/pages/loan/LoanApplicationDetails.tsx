import React, { useEffect, useState } from 'react'
import ActionBtn from '../../components/buttons/ActionBtn';
import ApplicationCard from '../../sections/loans/ApplicationCard';
import LoadWidgetCard from '../../sections/loans/LoadWidgetCard';
import Progress from '../../components/Progress';
import ExportBtn from '../../components/buttons/ExportBtn';
import Info from '../../components/infos/Info';
import LoanHistoryTable from '../../sections/loans/LoanHistoryTable';
// import ReferalCard from '../../sections/loans/ReferalCard';
// import EmptyState from '../../components/EmptyState';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowBack } from '@mui/icons-material';
import { Dispatch } from '../../redux/store';
import { CircularProgress } from '@mui/material';
import { approveLoan, getLoanDetails, rejectLoan } from '../../redux/slice/loanSlice';
import moment from 'moment';
import BasicModal from '../../components/modals/DeleteModal';
import { motion } from 'framer-motion';
import  {CheckboxInput} from '../../components/inputs/Input';
import TextArea from '../../components/inputs/TextArea';
import { useLoanHistory } from '../../utils/api';




const LoanApplicationDetails = () => {


  const reasons = [ 'Low credit score', 'Incomplete documentation', 'Outstanding loan balance', 'Other reasons (please specify)']


  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();


  const [openAccept, setOpenAccept] = useState(false);
  const [openRejectModal, setOpenRejectModal] = useState(false);
  const [narrationState, setNarrationState] = useState(false);

  const [narration, setNarration] = useState('');
  const [selectedReason, setSelectedReason] = useState('');




  const dispatch = useDispatch<Dispatch>();
  const { loans, status } = useSelector((state: any) => state.loan);
  const loan = loans.length ? loans[0] : null;


  // var refs = false;

  useEffect(() => {
    if (!id) return;
    dispatch(getLoanDetails(id));
  }, [id, dispatch]);


  const AcceptLoan = async () => {
    if (!loan || !id) return;

    await dispatch(approveLoan(loan?.payload?.loan?._id));
    dispatch(getLoanDetails(id));
    setOpenAccept(false);
  }


  const RejecttLoan = async () => {

    if (!loan || !id || !selectedReason) return;

    const payload = {
      loanId: loan?.payload?.loan?._id,
      reason: selectedReason === 'Other reasons (please specify)' ? narration: selectedReason
    }

    await dispatch(rejectLoan(payload))
    dispatch(getLoanDetails(id));
    setOpenRejectModal(false);
  }



  const loanAmount = Number(loan?.payload?.loan?.loanAmount) || 0;
  const interest = Number(loan?.payload?.loan?.interestAmount) || 0;

  const totalAmount = loanAmount + interest;


  const creditScore = Math.round((loan?.payload?.user?.identityScore / 100) * 850);

  const progressVal = Math.round(loan?.payload?.user?.identityScore)

  const { data: loanHistoryData } =  useLoanHistory(loan?.payload?.user?._id ?? '');


  return (
    <>
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] my-6'>
      <div className="flex gap-7">
        <div className="">
          <img src="/loan/user.png" alt="" className="h-[100px] w-[100px] rounded-full object-cover" />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h2 className='text-[#1E0D37] font-semibold text-[24px]'>{loan?.payload?.user?.firstName} {loan?.payload?.user?.lastName}</h2>
              <span className="bg-[#E6E6E680] px-[12px] py-[6px] rounded-2xl text-[#B9B4C1] text-[12px] font-[400] capitalize">{loan?.payload?.loan?.status}</span>
            </div>

            <div className="flex items-center gap-4">
              {
                loan?.payload?.loan?.status !== 'pending' ? <ExportBtn text='Export' onClick={() => {}}/>:
                <>
                  <ActionBtn text='Approve Loan' onClick={() => setOpenAccept(true)} className='bg-[#6922D10A] text-bgPurple px-6 py-2 rounded-2xl text-[12px] font-[400] cursor-pointer' />
                  <ActionBtn text='Reject Loan' onClick={() => setOpenRejectModal(true)} className='px-6 py-2 rounded-2xl text-[12px] font-[400] border-[1px] text-[#6B6B6B] cursor-pointer'/>
                </>
              }
            </div>
          </div>


            <div className="flex flex-wrap justify-between mt-[30px] w-full">
              { status === 'pending' ? 

              <CircularProgress sx={{display: 'flex', margin: 'auto'}} />:

              <>
                <ApplicationCard 
                  text={`NGN ${loan?.payload?.loan?.loanAmount?.toLocaleString() || 0}` } 
                  title='Loan Amount' 
                  title1='Interest Amount' 
                  text1={`N ${loan?.payload?.loan?.interestAmount.toLocaleString() || 0}`}/>

                <ApplicationCard 
                  text={`${moment(loan?.payload?.loan?.createdAt).format("MMM Do YY") || Date.now()}`} 
                  title='Submission Date' 
                  title1='Total Repayment' 
                  text1={`N ${totalAmount?.toLocaleString() || 0}`} />

                <ApplicationCard 
                  text={`NGN ${loan?.payload?.user?.salary?.toLocaleString()}` || 0} 
                  title='Monthly Income' title1='Due Date' 
                  text1={`${moment(loan?.payload?.loan?.dueDate).format('MMM Do YY')}` || 0} />
                
                <ApplicationCard 
                  text={`${loan?.payload?.loan?.duration} days`} 
                  title='Repayment Tenure' 
                  title1='Referrer Code'
                  text1='--//--'/>
              </>
              }
            </div>
        </div>
      </div>

          {/* { status === 'pending' ?
           <CircularProgress sx={{display: 'flex', margin: 'auto'}} />:
           
            <>
             { loan?.payload?.loan.status !== 'pending'  &&
                <div className="flex gap-2 items-center">
                  <label htmlFor="progress" className='text-[#000] text-xs font-[500]'>Progress</label>
                    <Progress/>
                  <p className='text-[#000] text-xs font-[500]'>50%</p>

              </div>}
            </>
          } */}

          <div className="flex items-center justify-between w-full gap-4">
            <LoadWidgetCard text='Credit Score'>
              <div className="flex items-center justify-between gap-2 p-3 h-full">
                <div className="h-[40px] w-[40px] rounded-full bg-red-50 p-2 flex items-center justify-center">
                  <img src="/loan/Icon.png" alt="" className="h-[16px] w-[16px] object-cover" />
                </div>

                <div className="flex flex-col gap-2 w-[80%]">
                    <span className="text-xs text-[#000]">Credit Score: {creditScore || 0}</span>
                  <div className='flex items-center gap-4'>
                    <Progress value={progressVal}/>
                    <span className="text-[#000000] text-[10px] capitalize">{loan?.payload?.user?.identityDescription || 'Status'}</span>
                  </div>
                </div>
              </div>
            </LoadWidgetCard>

            <LoadWidgetCard text='Contact Info'>
              <div className="flex flex-col p-4 gap-3">
                <div className="flex justify-start items-center gap-2">
                  <img src="/loan/call.png" alt="" className="h-[16px] w-[16px]" />
                  <span className="text-[#545454] text-xs">{loan?.payload?.user?.phoneNumber}</span>
                </div>

                <div className="flex justify-start items-center gap-2">
                  <img src="/loan/sms.png" alt="" className="h-[16px] w-[16px]" />
                  <span className="text-[#545454] text-xs">{loan?.payload?.user?.email}</span>
                </div>
              </div>
            </LoadWidgetCard>


            <LoadWidgetCard text='Proof of Income'>
              <div className="p-4 flex items-center h-full">
                <div className="flex items-center gap-3">
                  <a href={loan?.payload?.user?.proofOfSalary} target="_blank" rel="noopener noreferrer" download="proof-of-salary.pdf" className='flex items-start gap-2'>
                    <img src="/loan/image.png" alt="Download Proof" className="h-[16px] w-[16px] cursor-pointer" />
                    <span className="text-blue-500 underline">Download</span>
                  </a>

                </div>
              </div>
            </LoadWidgetCard>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
              <ArrowBack style={{ color: 'gray', cursor: 'ponter' }} onClick={() => navigate('/loans')}/>
              <Info text='Loan History & Repayment'/>
            </div>
              <ExportBtn text='Export' onClick={() => {}}/>
            </div>
              <LoanHistoryTable loanHistory={loanHistoryData?.history ?? []} key={loanHistoryData?.history?._id} />
          </div>

          {/* <div className="flex flex-col justify-start border-[1px] rounded-2xl p-4 gap-6">
            <span className="text-[#000000] text-[14px] font-[500]">Referral List (0)</span>

            {
              refs ?
            <div className="flex flex-wrap gap-8 justify-between">
              <ReferalCard/>
              <ReferalCard/>
              <ReferalCard/>
              <ReferalCard/>
              <ReferalCard/>
              <ReferalCard/>
              <ReferalCard/>
              <ReferalCard/>
              <ReferalCard/>
            </div> :
            <EmptyState text='No referrer yet' />
            }
            </div> */}

    </div>


        <BasicModal onClose={() => setOpenAccept(false)} open={openAccept}>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="flex flex-col p-2 gap-3 justify-center items-center w-[320px]">
    
               <img src="/wallet/archive-tick.svg" alt="" className="h-[64px] w-[64px]" />
    
              <span className="text-center font-[500] text-[16px]">Confirm Loan Approval</span>
    
              <span className='text-center font-[300] text-[12px]'>Are you sure you want to approve this loan request?</span>
    
              <div className="flex p-4 justify-between items-center w-full">
                <ActionBtn text='Cancel' 
                  onClick={() => setOpenAccept(false)} 
                  className='px-[24px] py-[12px] rounded-3xl bg-[#fff] text-[#6922D1] border-[1px] border-[#6922D1] text-[12px] cursor-pointer leading-[100%]'/>
    
                <ActionBtn 
                  text='Approve' 
                  onClick={AcceptLoan} 
                  className='px-[24px] py-[12px] rounded-3xl bg-bgPurple text-bgWhite border-[1px] border-[#6922D1] text-[12px] cursor-pointer leading-[100%]'/>
              </div>
            </motion.div>
        </BasicModal>

          <BasicModal onClose={() => setOpenRejectModal(false)} open={openRejectModal}>

              { 
              !narrationState &&
                <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                }}
                className="flex flex-col  p-2 gap-3 justify-center items-center w-[320px]">
        
                    <img src="/wallet/remove.svg" alt="" className="h-[64px] w-[64px]" />
        
                    <span className="text-center font-[500] text-[16px]">Confirm Loan Rejection</span>
        
                    <span className='text-center font-[300] text-[12px]'>Are you sure you want to reject this loan request? 
                    Please provide a reason for rejection.</span>
        
                  <div className="flex p-4 justify-between items-center w-full">
                    <ActionBtn text='Cancel' 
                      onClick={() => setOpenRejectModal(false)} 
                      className='px-[24px] py-[12px] text-[12px] rounded-3xl bg-[#fff] text-[#6922D1] border-[1px] border-[#6922D1] cursor-pointer'/>
        
                    <ActionBtn 
                      text='Reject' 
                      onClick={() => setNarrationState(true)} 
                      className='px-[24px] py-[12px] text-[12px] rounded-3xl bg-bgPurple text-bgWhite cursor-pointer'/>
                  </div>
                </motion.div>
                }


              {  
                narrationState &&
                <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 }
                }}
                className="flex flex-col  p-2 w-[420px]">
                    <div className="w-full flex flex-col gap-4">

                      <img src="/admin/x.svg" alt="" className="h-[24px] w-[24px] flex ml-auto cursor-pointer" onClick={() => setOpenRejectModal(false)} />

                      <span className="text-[14px] font-[400] text-[#1E0D37]">Please Provide a reason for rejection</span>

                      {reasons.map((reason) => (
                        <CheckboxInput 
                          label={reason} 
                          name='reason' key={reason} 
                          onChange={() => setSelectedReason(reason)}
                          checked={selectedReason === reason}/>
                      ))
                      }
                    
                    {selectedReason === 'Other reasons (please specify)' && (
                      <TextArea text='Specify here...' onChange={(e: any) => setNarration(e.target.value)} />
                    )}

                      <ActionBtn 
                        text='Reject' 
                        onClick={RejecttLoan} 
                        className='px-[24px] py-[12px] text-[14px] font-[500] rounded-3xl bg-bgPurple text-bgWhite cursor-pointer flex items-center justify-center mx-auto w-[188px]'/>
                    </div>
                </motion.div>
                }
          </BasicModal>

    </>
  )
}

export default LoanApplicationDetails;
