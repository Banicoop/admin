import React from 'react'
import { AuthBtn } from '../../components/buttons/ExportBtn';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const NextPage = () => {
    navigate('/auth/login')
  }

  return (
    <div className='flex flex-col items-center justify-center p-[4rem] gap-[2rem]'>
        <h1 className='text-5xl font-semibold flex self-start justify-start flex-col'>Empowering <br />Communities through <br /><span className="text-bgPurple">Financial Freedom</span></h1>

        <h4 className="">Welcome to Banicoop’s Admin Panel, where you play a key role in helping individuals and communities manage their finances, save collaboratively, and achieve financial stability.</h4>

        <div className="bg-[#F0E9F9] rounded-lg p-6 flex flex-col gap-3">
            <span className="text-bgPurple font-semibold">Get Started</span>
            <p className="">This admin panel provides powerful tools and insights, giving you full control to oversee and manage your organization’s financial activities, monitor transactions, and support our user community.</p>
        </div>

        <div className="flex justify-end self-end">
            <AuthBtn text='Continue' onClick={NextPage}/>
        </div>
    </div>
  )
}

export default WelcomePage;
