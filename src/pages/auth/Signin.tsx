import React from 'react';
import { AuthBtn, BackBtn } from '../../components/buttons/ExportBtn';
import { useNavigate } from 'react-router-dom';
import { AuthInput } from '../../components/inputs/Input';


const Signin = () => {
    const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center w-full p-[4rem] gap-[2rem]'>
        <h1 className='text-5xl font-semibold'>Welcome to <span className='text-bgPurple'>Banicoop </span>Admin Dashboard!</h1>

        <p className=''>Your role as an admin helps foster secure, collaborative savings. Get started with by logging in to your admin dashboard</p>

        <AuthInput img='/profile.svg' placeholder='Email address' type='email'/>
        <AuthInput img='/password-check.svg' placeholder='Password' type='password'/>

        <div className="flex justify-between w-full">
            <BackBtn onClick={() => navigate('/auth/welcome')} text='Go Back'/>
            <AuthBtn onClick={() => navigate('/auth/verification')} text='Continue'/>
        </div>
    </div>
  )
}

export default Signin;
