import React, { useState } from 'react';
import { AuthBtn, BackBtn } from '../../components/buttons/ExportBtn';
import { useNavigate, Link } from 'react-router-dom';
import { AuthInput } from '../../components/inputs/Input';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slice/authSlice';
import type { Dispatch } from '../../redux/store';
import { toastOptions } from '../../utils/toastOptions';
import { toast } from 'react-toastify'


const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<Dispatch>();


    const { status } = useSelector((state: any) => state.auth)

    const [email, setEnail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: any) => {
      e.preventDefault()
      if(!email || !password){
        toast.warn('Fields cannot be empty', {...toastOptions});
        return;
      }
      try {
        dispatch(login({email, password}))
      } catch (error) {
        console.error(error)
      }
    }


  return (
    <form className='flex flex-col items-center justify-center w-full md:h-full p-2 lg:p-[1rem] gap-[1rem]'>
        <h1 className='hidden text-xl md:text-2xl xl:text-3xl font-semibold md:flex justify-start items-start mr-auto gap-2'>Welcome to <span className='text-bgPurple'>Banicoop</span></h1>
        <h1 className='hidden text-xl md:text-2xl xl:text-3xl font-semibold md:flex justify-start items-start mr-auto gap-2'>Admin Dashboard</h1>


        <h1 className='md:hidden text-xl font-semibold text-left'>Welcome to <span className='text-bgPurple'>Banicoop</span> </h1>
       <h1 className='md:hidden text-xl font-semibold text-left'> Admin Dashboard!</h1>

        <p className='text-xs lg:text-sm'>Your role as an admin helps foster secure, collaborative savings. Get started with by logging in to your admin dashboard</p>

        <AuthInput className='w-full' img='/profile.svg' placeholder='Email address' type='email' onChange={(e:any) => setEnail(e.target.value)}/>
        <AuthInput className='w-full' img='/password-check.svg' placeholder='Password' type='password' onChange={(e:any) => setPassword(e.target.value)}/>

        <div className="flex justify-between items-center w-full px-1">
          <div className="flex items-center gap-1 ">
            <input type="checkbox" className="text-bgPurple cursor-pointer bg-bgPurple" />
            <span className="text-bgBlack cursor-pointer font-[500] text-[14px]">Remember Me</span>
          </div>

          <Link to='/auth/forgot-password' className="text-bgPurple cursor-pointer font-[500] text-[14px]">Forgot Password?</Link>
        </div>

        <div className="flex flex-row justify-between w-full">
            <BackBtn onClick={() => navigate('/auth/welcome')} text='Go Back'/>

            <AuthBtn 
              loading={status}
              onClick={handleSubmit} 
              text={`${status === 'pending' ? 'Processing...': 'Continue'}`}/>
        </div>
    </form>
  )
}

export default Signin;
