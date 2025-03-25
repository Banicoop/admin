import React, { useEffect } from 'react'
import ActionBtn from '../../components/buttons/ActionBtn';
import ApplicationCard from '../../sections/loans/ApplicationCard';
import LoadWidgetCard from '../../sections/loans/LoadWidgetCard';
import Progress from '../../components/Progress';
import ExportBtn from '../../components/buttons/ExportBtn';
import Info from '../../components/infos/Info';
import LoanHistoryTable from '../../sections/loans/LoanHistoryTable';
import ReferalCard from '../../sections/loans/ReferalCard';
import EmptyState from '../../components/EmptyState';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowBack } from '@mui/icons-material';
import { Dispatch } from '../../redux/store';
import { CircularProgress } from '@mui/material';
import { approveLoan, getLoanDetails, rejectLoan } from '../../redux/slice/loanSlice';
import moment from 'moment';



const LoanApplicationDetails = () => {


  const navigate = useNavigate()


  const { id } = useParams();

  const dispatch = useDispatch<Dispatch>();
  const { loans, status } = useSelector((state: any) => state.loan);
  const loan = loans.length ? loans[0] : null;


  const startDate = new Date(loan?.payload?.loan.createdAt).getTime()
  const endDate = new Date(loan?.payload?.loan.dueDate).getTime()


  let duration;

  if (!isNaN(startDate) && !isNaN(endDate)){
    const diffInMs = endDate - startDate
    duration = Math.round(diffInMs / (1000 * 60 * 60 * 24));
  } else {
    duration = 0;
  }



  var refs = false;


  useEffect(() => {
    if (!id) return;

    if (id) {
      dispatch(getLoanDetails(id));
  }
  }, [id, dispatch]);


  const AcceptLoan = async () => {
    if (!loan || !id) return;

    await dispatch(approveLoan(loan?.payload?.loan?._id));
    dispatch(getLoanDetails(id));
  }


  const RejecttLoan = async () => {
    if (!loan || !id) return;

    await dispatch(rejectLoan(loan?.payload?.loan?._id))
    dispatch(getLoanDetails(id));
  }


  const loanAmount = loan?.payload?.loan?.loanAmount;
  const interest = loan?.payload?.loan?.interestAmount;

  const totalAmount = loanAmount + interest;

  return (
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] my-6'>
      <div className="flex gap-7">
        <div className="">
          <img src="/loan/user.png" alt="" className="h-[100px] w-[100px] rounded-full object-cover" />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h2 className='text-[#1E0D37] font-semibold text-[24px]'>{loan?.payload?.user?.firstName} {loan?.payload?.user?.lastName}</h2>
              <span className="bg-[#E6E6E680] px-[12px] py-[6px] rounded-2xl text-[#B9B4C1] text-[12px] font-[400] capitalize">{loan?.payload?.loan?.approvalStatus}</span>
            </div>

            <div className="flex items-center gap-4">
              {
                loan?.payload?.loan.status !== 'pending' ? <ExportBtn text='Export' onClick={() => {}}/>:
                <>
                  <ActionBtn text='Approve Loan' onClick={AcceptLoan} className='bg-[#6922D10A] text-bgPurple px-6 py-2 rounded-2xl text-[12px] font-[400] cursor-pointer' />
                  <ActionBtn text='Reject Loan' onClick={RejecttLoan} className='px-6 py-2 rounded-2xl text-[12px] font-[400] border-[1px] text-[#6B6B6B] cursor-pointer'/>
                </>
              }
            </div>
          </div>


            <div className="flex flex-wrap justify-between mt-[30px] w-full">
              { status === 'pending' ? 

              <CircularProgress sx={{display: 'flex', margin: 'auto'}} />:

              <>
                <ApplicationCard text={`NGN ${loan?.payload?.loan?.loanAmount}`} title='Loan Amount' title1='Interest Amount' text1={`N ${loan?.payload?.loan?.interestAmount}`}/>
                <ApplicationCard text={`${moment(loan?.payload?.loan?.createdAt).format("MMM Do YY")}`} title='Submission Date' title1='Total Repayment' text1={totalAmount || 0} />
                <ApplicationCard text={`NGN ${loan?.payload?.user?.salary}`} title='Monthly Income' title1='Referrer' text1='--//--' img='/loan/profile.png'/>
                <ApplicationCard text={`${duration} days`} title='Repayment Tenure' title1='Referrer Code' text1='--//--'/>
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
                    <span className="text-xs text-[#000]">Credit Score: {loan?.payload?.user?.iScoreListing}</span>
                  <div className='flex items-center gap-4'>
                    <Progress />
                    <span className="text-[#000000] text-[10px]">Good</span>
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
                <a href={loan?.payload?.user?.proofOfSalary} download="proof-of-salary.pdf">
                  <img src="/loan/image.png" alt="Download Proof" className="h-[16px] w-[16px] cursor-pointer" />
                </a>

                <a href={loan?.payload?.user?.proofOfSalary} download="proof-of-salary.pdf" className="text-blue-500 underline">
                  Download
                </a>
                </div>
              </div>
            </LoadWidgetCard>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
              <ArrowBack style={{ color: 'gray', cursor: 'ponter' }} onClick={() => navigate('/loan/pending')}/>
              <Info text='Loan History & Repayment'/>
            </div>
              <ExportBtn text='Export' onClick={() => {}}/>
            </div>
              <LoanHistoryTable loanHistory={loan?.payload?.loanHistory} />
          </div>

          <div className="flex flex-col justify-start border-[1px] rounded-2xl p-4 gap-6">
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
          </div>


    </div>
  )
}

export default LoanApplicationDetails;
