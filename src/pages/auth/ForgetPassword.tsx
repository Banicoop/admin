import React, { useState } from 'react'
import { AuthInput } from '../../components/inputs/Input';
import { AuthBtn } from '../../components/buttons/ExportBtn';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Dispatch } from '../../redux/store';
import { reset } from '../../redux/slice/authSlice';




const ForgetPassword = () => {

    const dispatch = useDispatch<Dispatch>()
    const [email, setEmail] = useState('');

    const handleClick = () => {
        dispatch(reset({email}))
    }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-3 lg:p-[2rem] gap-[1rem] lg:gap-[2rem]'>
        <h1 className='hidden text-xl md:text-2xl xl:text-4xl font-semibold md:flex justify-start items-start mr-auto gap-2'>Forget Password?</h1>
        <p className='text-xs lg:text-sm text-left flex self-start'>Enter your email addrsss to continue</p>

        <AuthInput className='w-full' 
            img='/profile.svg' placeholder='Email address' 
            type='email' onChange={(e:any) => setEmail(e.target.value)}/>

        <div className="flex justify-between items-center w-full px-1">
            <AuthBtn text='Continue' onClick={handleClick}/>

            <Link to='/auth/login' className="text-bgPurple cursor-pointer font-[500] text-[14px]">Back to Login?</Link>
        </div>
    </div>
  )
}

export default ForgetPassword;
