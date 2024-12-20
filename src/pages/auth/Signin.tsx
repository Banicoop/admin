import React, { useState } from 'react';
import { AuthBtn, BackBtn } from '../../components/buttons/ExportBtn';
import { useNavigate } from 'react-router-dom';
import { AuthInput } from '../../components/inputs/Input';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slice/authSlice';
import type { Dispatch } from '../../redux/store';


const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<Dispatch>();

    const [email, setEnail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
      try {
        dispatch(login({email, password}))
      } catch (error) {
        console.error(error)
      }
    }


  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-[2rem] gap-[2rem]'>
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold flex justify-start items-start mr-auto flex-col gap-2'>Welcome to <br /><span className='text-bgPurple flex flex-row gap-2'>Banicoop <br /><span className='text-[#000]'>Admin</span> </span> Dashboard!</h1>

        <p className='text-sm'>Your role as an admin helps foster secure, collaborative savings. Get started with by logging in to your admin dashboard</p>

        <AuthInput className='w-full' img='/profile.svg' placeholder='Email address' type='email' onChange={(e:any) => setEnail(e.target.value)}/>
        <AuthInput className='w-full' img='/password-check.svg' placeholder='Password' type='password' onChange={(e:any) => setPassword(e.target.value)}/>

        <div className="flex flex-col md:flex-row md:justify-between w-full">
            <BackBtn onClick={() => navigate('/auth/welcome')} text='Go Back'/>
            <AuthBtn onClick={handleSubmit} text='Continue'/>
        </div>
    </div>
  )
}

export default Signin;
