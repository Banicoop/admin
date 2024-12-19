import React from 'react'
import { AuthInput } from '../../components/inputs/Input';
import { AuthBtn } from '../../components/buttons/ExportBtn';

const Register = () => {
 
  const handleSubmit = async () => {

  }
  
  return (
    <main className='bg-bgR flex h-[100vh] w-full justify-center items-center'>
      <form className="flex flex-col bg-white rounded-lg shadow-lg p-2 md:p-6 w-3/4 md:w-1/2 gap-3">
        <h2 className='text-[#000000] text-xl font-semibold'>Setup your Account</h2>
        <p className='text-xs '>Your role as an admin helps foster secure, collaborative savings. Get started with by setting up your admin account.</p>

        <div className="flex flex-col md:flex-row flex-wrap gap-4">
          <AuthInput type='text' placeholder='First Name' img='/auth/username.svg' onChange={() => {}}/>
          <AuthInput type='text' placeholder='Last Name' img='/auth/username.svg' onChange={() => {}}/>
          <AuthInput type='text' placeholder='Username'  img='/auth/password.svg'onChange={() => {}}/>
          <AuthInput type='password' placeholder='Password' img='/auth/password.svg' onChange={() => {}}/>
        </div>

        <div className="flex items-center justify-between mt-8 mb-2">
          <AuthBtn  text='Continue' onClick={handleSubmit}/>
        </div>
      </form>
    </main>
  )
}

export default Register;
