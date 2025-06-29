import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthBtn } from '../../components/buttons/ExportBtn';

const Verified = () => {

    const navigate = useNavigate();

  return (
    <div className='rounded-3xl shadow-lg bg-bgWhite p-[2rem] flex flex-col justify-center items-center gap-[1rem]'>
        <img src='/success.svg' alt='' className=''/>

        <h1 className='text-4xl font-semibold text-[#000]'>Verification Successful!</h1>
        <p className='w-2/3 text-center'>You’re all set! Your account has been successfully verified, and you’re now securely logged in.</p>
        <AuthBtn onClick={() => navigate('/')} text='Proceed to Dashboard'/>
    </div>
  )
}

export default Verified;
