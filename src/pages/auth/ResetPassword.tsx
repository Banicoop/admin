import React, { ChangeEvent, useState } from 'react'
import { AuthInput } from '../../components/inputs/Input';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastOptions } from '../../helpers/toastOptions';
import { useDispatch } from 'react-redux';
import { Dispatch } from '../../redux/store';
import { resetPassword } from '../../redux/slice/authSlice';
import Button from '../../components/buttons/Button';



const ResetPassoword = () => {

  const dispatch = useDispatch<Dispatch>();

  const [payload, setPayload] = useState({
    password: '',
    otp: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setPayload(payload => ({...payload, [name]: value}))
  }


  const handleSubmit = () => {
    const { password, otp } = payload;

    if(!otp || !password){
      toast.warn('No Empty field', {...toastOptions});
      return;
    }
    dispatch(resetPassword({password, otp}));
  }


  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full h-full p-3 lg:p-[1rem] gap-[1rem]'>
      <h1 className='hidden text-xl xl:text-3xl font-semibold md:flex justify-start items-start mr-auto gap-2'>Create New Password</h1>
      <p className='text-xs lg:text-sm text-left flex self-start'>Enter your the 4-digits pin sent to your email and create new password</p>

      <div className="flex flex-col gap-3 w-full">
         <AuthInput className='w-full no-arrows' 
            img='/password-check.svg' 
            placeholder='Enter OTP' 
            min={0}
            type='number'
            name='otp'
            value={payload.otp}
            onChange={handleChange}/>

          <AuthInput className='w-full' 
            img='/password-check.svg' 
            placeholder='Enter New Password' 
            value={payload.password}
            type='password' 
            name='password'
            onChange={handleChange}/>
      </div>

      <div className="flex justify-between items-center w-full px-1">
          <Button
              type='submit'
              className='text-bgWhite rounded-3xl py-2 px-7 bg-bgPurple'
              rightIcon={<img src="/autharr.svg" alt="" className="flex my-auto" />} 
            >
                Continue
            </Button>

          <Link to='/auth/login' className="text-bgPurple cursor-pointer font-[500] text-[14px]">Back to Login?</Link>
      </div>

    </form>
  )
}

export default ResetPassoword;
