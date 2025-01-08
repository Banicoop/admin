import React from 'react'
import ActionBtn from '../../components/buttons/ActionBtn';
import ApplicationCard from '../../sections/loans/ApplicationCard';
import LoadWidgetCard from '../../sections/loans/LoadWidgetCard';



const LoanApplicationDetails = () => {
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
              <ActionBtn text='Approve Loan' onClick={() => {}} className='bg-[#6922D10A] text-bgPurple px-6 py-2 rounded-2xl text-[12px] font-[400] cursor-pointer' />
              <ActionBtn text='Reject Loan' onClick={() => {}} className='px-6 py-2 rounded-2xl text-[12px] font-[400] border-[1px] text-[#6B6B6B] cursor-pointer'/>
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

      
          <div className="flex items-center justify-center w-full gap-4">
            <LoadWidgetCard text='Credit Score'>
              <div className=""></div>
            </LoadWidgetCard>

            <LoadWidgetCard text='Credit Score'>
              <div className=""></div>
            </LoadWidgetCard>


            <LoadWidgetCard text='Credit Score'>
              <div className=""></div>
            </LoadWidgetCard>
          </div>
    </div>
  )
}

export default LoanApplicationDetails;
