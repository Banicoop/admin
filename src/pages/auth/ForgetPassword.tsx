import React, { useState } from 'react'
import { AuthInput } from '../../components/inputs/Input';
import { AuthBtn } from '../../components/buttons/ExportBtn';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '../../redux/store';
import { forgetPassword } from '../../redux/slice/authSlice';
import { toastOptions } from '../../utils/toastOptions';
import { toast } from 'react-toastify'




const ForgetPassword = () => {

    const dispatch = useDispatch<Dispatch>()
    const [email, setEmail] = useState('');


    const { status } = useSelector((state: any) => state.auth)

    const handleSubmit = () => {
        if(!email){
            toast.warn('Field cannot be empty', {...toastOptions});
            return;
        }
        dispatch(forgetPassword({email}))
    }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-3 lg:p-[2rem] gap-[1rem]'>
        <h1 className='hidden text-xl xl:text-3xl font-semibold md:flex justify-start items-start mr-auto gap-2'>Forget Password?</h1>
        <p className='text-xs lg:text-sm text-left flex self-start'>Enter your email addrsss to continue</p>

        <AuthInput className='w-full' 
            img='/profile.svg' placeholder='Email address' 
            type='email' onChange={(e:any) => setEmail(e.target.value)}/>

        <div className="flex justify-between items-center w-full px-1">
            <AuthBtn text='Continue' onClick={handleSubmit} loading={status}/>

            <Link to='/auth/login' className="text-bgPurple cursor-pointer font-[500] text-[14px]">Back to Login?</Link>
        </div>
    </div>
  )
}

export default ForgetPassword;
