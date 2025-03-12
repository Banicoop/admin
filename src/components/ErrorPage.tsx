import React from 'react'
import  ActionBtn  from './buttons/ActionBtn';

const ErrorPage = ({onClick}: any) => {
  return (
    <div className='h-full w-full'>
      <div className="flex flex-col justify-center items-center h-full w-1/2 mx-auto text-center gap-4">
        <h1 className='text-[#E2DBEC] text-[100px] font-semibold'>Oops!</h1>
        <p className='text-bgBlack text-[32px] font-[600]'>Something Went Wrong</p>
        <span className='text-[#4B3D5E] text-[16px] font-[400]'>We're currently experiencing technical difficulties and our servers are temporarily down. Please try again in a few minutes.</span>
        <span className='text-bgPurple text-[16px] font-[400]'>Contact Support</span>

        <ActionBtn 
          className='py-[12px] px-[24px] bg-bgPurple text-bgWhite rounded-[24px] w-full' text='Retry' 
          onClick={onClick} />

      </div>
    </div>
  )
}

export default ErrorPage;
