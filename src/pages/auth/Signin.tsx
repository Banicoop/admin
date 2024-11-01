import React from 'react';
import { AuthBtn } from '../../components/buttons/ExportBtn';


const Signin = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full p-[4rem] gap-[2rem]'>
        <h1 className='text-5xl font-semibold'>Welcome to <span className='text-bgPurple'>Banicoop </span>Admin Dashboard!</h1>

        <p className=''>Your role as an admin helps foster secure, collaborative savings. Get started with by logging in to your admin dashboard</p>

        <div className="flex justify-between w-full">
            <AuthBtn onClick={() => {}} text='Continue'/>
        </div>
    </div>
  )
}

export default Signin;
