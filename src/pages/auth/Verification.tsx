import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthBtn, BackBtn } from '../../components/buttons/ExportBtn';
import OtpInput from '../../components/inputs/OtpInput';
import SERVER from '../../utils/server';

const Verification = () => {

    const navigate = useNavigate();
    
    const [otp, setOtp] = useState('');
    const [adminId, setAdminId] = useState<string | null>(null);
    
    const handleOtpChange = (val: string) => {
        setOtp(val);
    };
    
    const isButtonEnabled = otp.length === 4;

    useEffect(() => {
        // Retrieve saved login data from local storage
        const loginDataString = localStorage.getItem('loginData');
        if (loginDataString) {
            const loginData = JSON.parse(loginDataString);
            setAdminId(loginData.id); // Set user ID from login data
        }
    }, []);



    const verifyOtp = async () => {
        try {
            const res = await SERVER.post('admin/auth/verifyToken',{
                otp,
                adminId
            });
            console.log(res.data)
            navigate('/auth/verified')
        } catch (error) {
            
        }
    }


  return (
    <div className='rounded-3xl shadow-lg bg-bgWhite p-[3rem] flex flex-col justify-center items-center gap-[2rem]'>
        <div className="flex gap-3 items-center">
            <img src="/frame.svg" alt="" className="" />
            <h1 className="text-5xl font-semibold">Two-Factor <br /> Authentication</h1>
        </div>

        <p className='text-lg text-[#000] text-center'>Check your email inbox for a 4-digit OTP. Enter it below</p>

        <div className="">
            <OtpInput onChange={handleOtpChange}/>
        </div>

        <div className="flex justify-between w-full">
            <BackBtn onClick={() => navigate('/auth/login')} text='Go Back'/>
            <AuthBtn onClick={verifyOtp} text='Continue'  disabled={!isButtonEnabled}/>
        </div>
    </div>
  )
}

export default Verification;
