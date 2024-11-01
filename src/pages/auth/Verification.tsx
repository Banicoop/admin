import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthBtn, BackBtn } from '../../components/buttons/ExportBtn';
import { OtpInput } from '../../components/inputs/Input';

const Verification = () => {

    const navigate = useNavigate();

  return (
    <div className='rounded-3xl shadow-lg bg-bgWhite p-[3rem] flex flex-col justify-center items-center gap-[2rem]'>
        <div className="flex gap-3 items-center">
            <img src="/frame.svg" alt="" className="" />
            <h1 className="text-5xl font-semibold">Two-Factor <br /> Authentication</h1>
        </div>

        <p className='text-lg text-[#000] text-center'>Check your email inbox for a 6-digit OTP. Enter it below</p>

        <div className="flex gap-2 w-full justify-between">
            <OtpInput/>
            <OtpInput/>
            <OtpInput/>
            <OtpInput/>
            <OtpInput/>
            <OtpInput/>
        </div>

        <div className="flex justify-between w-full">
            <BackBtn onClick={() => navigate('/auth/welcome')} text='Go Back'/>
            <AuthBtn onClick={() => navigate('/auth/verified')} text='Continue'/>
        </div>
    </div>
  )
}

export default Verification;
