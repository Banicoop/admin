import React, { useState } from 'react';
import { AuthBtn, BackBtn } from '../../components/buttons/ExportBtn';
import { useNavigate } from 'react-router-dom';
import { AuthInput } from '../../components/inputs/Input';


const Signin = () => {
    const navigate = useNavigate();

    const [email, setEnail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
      console.log('Something')
    }

  return (
    <div className='flex flex-col items-center justify-center w-full p-[4rem] gap-[2rem]'>
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold'>Welcome to <span className='text-bgPurple'>Banicoop </span>Admin Dashboard!</h1>

        <p className='text-sm'>Your role as an admin helps foster secure, collaborative savings. Get started with by logging in to your admin dashboard</p>

        <AuthInput img='/profile.svg' placeholder='Email address' type='email' onChange={(e:any) => setEnail(e.target.value)}/>
        <AuthInput img='/password-check.svg' placeholder='Password' type='password' onChange={(e:any) => setPassword(e.target.value)}/>

        <div className="flex justify-between w-full">
            <BackBtn onClick={() => navigate('/auth/welcome')} text='Go Back'/>
            <AuthBtn onClick={() =>{
              handleSubmit()
               navigate('/auth/verification')
            }} text='Continue'/>
        </div>
    </div>
  )
}

export default Signin;
