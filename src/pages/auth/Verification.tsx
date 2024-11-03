import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthBtn, BackBtn } from '../../components/buttons/ExportBtn';
import OtpInput from '../../components/inputs/OtpInput';

const Verification = () => {

    const navigate = useNavigate();
    const [otp, setOtp] = useState('');

    const handleOtpChange = (val: string) => {
        setOtp(val);
    };

    const isButtonEnabled = otp.length === 6;

    console.log(otp, 'otp')

  return (
    <div className='rounded-3xl shadow-lg bg-bgWhite p-[3rem] flex flex-col justify-center items-center gap-[2rem]'>
        <div className="flex gap-3 items-center">
            <img src="/frame.svg" alt="" className="" />
            <h1 className="text-5xl font-semibold">Two-Factor <br /> Authentication</h1>
        </div>

        <p className='text-lg text-[#000] text-center'>Check your email inbox for a 6-digit OTP. Enter it below</p>

        <div className="">
            <OtpInput onChange={handleOtpChange}/>
        </div>

        <div className="flex justify-between w-full">
            <BackBtn onClick={() => navigate('/auth/welcome')} text='Go Back'/>
            <AuthBtn onClick={() => navigate('/auth/verified')} text='Continue'  disabled={!isButtonEnabled}/>
        </div>
    </div>
  )
}

export default Verification;
