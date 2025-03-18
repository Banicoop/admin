import React from 'react'
import { AuthInput } from '../../components/inputs/Input';
import { AuthBtn } from '../../components/buttons/ExportBtn';
import { Link } from 'react-router-dom';



const ResetPassoword = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-3 lg:p-[2rem] gap-[1rem] lg:gap-[2rem]'>
      <h1 className='hidden text-xl md:text-2xl xl:text-4xl font-semibold md:flex justify-start items-start mr-auto gap-2'>Create New Password</h1>
      <p className='text-xs lg:text-sm text-left flex self-start'>Enter your email addrsss to continue</p>

      <div className="flex flex-col gap-3 w-full">
         <AuthInput className='w-full' 
          img='/password-check.svg' placeholder='Enter New Password' 
          type='password' onChange={() => {}}/>

          <AuthInput className='w-full' 
          img='/password-check.svg' placeholder='Confirm New Password' 
          type='password' onChange={() => {}}/>
      </div>

      <div className="flex justify-between items-center w-full px-1">
          <AuthBtn text='Continue' onClick={() => {}}/>
          <Link to='/auth/verification' className="text-bgPurple cursor-pointer font-[500] text-[14px]">Back to Login?</Link>
      </div>

    </div>
  )
}

export default ResetPassoword;
