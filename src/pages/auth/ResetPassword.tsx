import React from 'react'
import { AuthInput } from '../../components/inputs/Input';
import { AuthBtn } from '../../components/buttons/ExportBtn';
import { Link } from 'react-router-dom';



const ResetPassoword = () => {

  const handleSubmit = () => {
    window.location.replace('/auth/verified')
  }


  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-3 lg:p-[2rem] gap-[1rem] lg:gap-[2rem]'>
      <h1 className='hidden text-xl xl:text-3xl font-semibold md:flex justify-start items-start mr-auto gap-2'>Create New Password</h1>
      <p className='text-xs lg:text-sm text-left flex self-start'>Enter your the 4-digits pin sent to your email and create new password</p>

      <div className="flex flex-col gap-3 w-full">
         <AuthInput className='w-full' 
            // img='/password-check.svg' 
            placeholder='Enter OTP' 
            min={0}
            type='number' onChange={() => {}}/>

          <AuthInput className='w-full' 
          img='/password-check.svg' placeholder='Enter New Password' 
          type='password' onChange={() => {}}/>
      </div>

      <div className="flex justify-between items-center w-full px-1">
          <AuthBtn text='Continue' onClick={handleSubmit}/>
          <Link to='/auth/login' className="text-bgPurple cursor-pointer font-[500] text-[14px]">Back to Login?</Link>
      </div>

    </div>
  )
}

export default ResetPassoword;
