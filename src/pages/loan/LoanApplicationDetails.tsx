import React, { useEffect, useState } from 'react'
import ActionBtn from '../../components/buttons/ActionBtn';
import ApplicationCard from '../../sections/loans/ApplicationCard';
import LoadWidgetCard from '../../sections/loans/LoadWidgetCard';
import Progress from '../../components/Progress';
import ExportBtn from '../../components/buttons/ExportBtn';
import Info from '../../components/infos/Info';
import LoanHistoryTable from '../../sections/loans/LoanHistoryTable';
import ReferalCard from '../../sections/loans/ReferalCard';
import EmptyState from '../../components/EmptyState';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '../../redux/store';
import { getLoanDetails } from '../../redux/slice/loanSlice';



const LoanApplicationDetails = () => {


  const { id } = useParams();

  const dispatch = useDispatch<Dispatch>();
  const { status, loans } = useSelector((state: any) => state.loan);
  const loan = loans.length ? loans[0] : null;

  console.log(loan?.payload?.loan);

  var refs = false;
  const [ approved, setApproved ] = useState(false);


  useEffect(() => {
    if (id) {
      dispatch(getLoanDetails(id));
  }
  }, [id, dispatch])




  return (
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-8 lg:gap-[50px] my-6'>
      <div className="flex gap-7">
        <div className="">
          <img src="/loan/user.png" alt="" className="h-[100px] w-[100px] rounded-full object-cover" />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h2 className='text-[#1E0D37] font-semibold text-[24px]'>Dada Oladimeji</h2>
              <span className="bg-[#E6E6E680] px-[12px] py-[6px] rounded-2xl text-[#B9B4C1] text-[12px] font-[400]">Review Pending</span>
            </div>

            <div className="flex items-center gap-4">
              {
                approved ? <ExportBtn text='Export' onClick={() => {}}/>:
                <>
                  <ActionBtn text='Approve Loan' onClick={() => setApproved(true)} className='bg-[#6922D10A] text-bgPurple px-6 py-2 rounded-2xl text-[12px] font-[400] cursor-pointer' />
                  <ActionBtn text='Reject Loan' onClick={() => {}} className='px-6 py-2 rounded-2xl text-[12px] font-[400] border-[1px] text-[#6B6B6B] cursor-pointer'/>
                </>
              }
            </div>
          </div>


            <div className="flex flex-wrap justify-between mt-[30px] w-full">
              <ApplicationCard text='NGN 150,000.00' title='Loan Amount' title1='Interest Rate' text1='5% per annum'/>
              <ApplicationCard text='December 31, 2024' title='Submission Date' title1='Monthly Repayment' text1='N13,000'/>
              <ApplicationCard text='NGN 100,000.00' title='Monthly Income' title1='Referrer' text1='Dada Oladimeji' img='/loan/profile.png'/>
              <ApplicationCard text='12 months' title='Repayment Tenure' title1='Referrer Code' text1='Banicoop12Dada'/>
            </div>

        </div>
      </div>

          { approved &&
            <div className="flex gap-2 items-center">
              <label htmlFor="progress" className='text-[#000] text-xs font-[500]'>Progress</label>
                <Progress/>
               <p className='text-[#000] text-xs font-[500]'>50%</p>

          </div>
          }

          <div className="flex items-center justify-between w-full gap-4">
            <LoadWidgetCard text='Credit Score'>
              <div className="flex items-center justify-between gap-2 p-3 h-full">
                <div className="h-[40px] w-[40px] rounded-full bg-red-50 p-2 flex items-center justify-center">
                  <img src="/loan/Icon.png" alt="" className="h-[16px] w-[16px] object-cover" />
                </div>

                <div className="flex flex-col gap-2 w-[80%]">
                    <span className="text-xs text-[#000]">Credit Score: 720/850</span>
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
                  <span className="text-[#545454] text-xs">+234 810 123 4567</span>
                </div>

                <div className="flex justify-start items-center gap-2">
                  <img src="/loan/sms.png" alt="" className="h-[16px] w-[16px]" />
                  <span className="text-[#545454] text-xs">dadasamuel208@gmail.com</span>
                </div>
              </div>
            </LoadWidgetCard>


            <LoadWidgetCard text='Proof of Income'>
              <div className="p-4 flex items-center h-full">
                <div className="flex items-center gap-3">
                  <img src="/loan/image.png" alt="" className="h-[16px] w-[16px]" />
                  <span className="">012223.img</span>
                </div>
              </div>
            </LoadWidgetCard>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <Info text='Loan History & Repayment'/>
              <ExportBtn text='Export' onClick={() => {}}/>
            </div>
              <LoanHistoryTable />
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
