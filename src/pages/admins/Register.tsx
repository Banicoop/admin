import React, { ChangeEvent, useState } from 'react'
import { AuthInput } from '../../components/inputs/Input';
import { AuthBtn } from '../../components/buttons/ExportBtn';
import { registerAdmin } from '../../redux/slice/adminSlice';
import type { Dispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';


const imitialSate = {
  firstName: "",
  lastName: "",
  username: "",
  password: ""
}

const Register = () => {

  const dispatch = useDispatch<Dispatch>();

  const [newAdmin, setNewAdmin] = useState(imitialSate)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    const {name, value} = e.target;

    setNewAdmin({...newAdmin, [name]: value})
  }
 
  const handleSubmit = async () => {
    dispatch(registerAdmin({...newAdmin}))
  }

  
  return (
    <main className='bg-bgR flex h-[100vh] w-full justify-center items-center'>
      <form className="flex flex-col bg-white rounded-lg shadow-lg p-2 md:p-6 w-3/4 md:w-1/2 gap-3">
        <h2 className='text-[#000000] text-xl font-semibold'>Setup your Account</h2>
        <p className='text-xs '>Your role as an admin helps foster secure, collaborative savings. Get started with by setting up your admin account.</p>

        <div className="flex flex-col md:flex-row flex-wrap gap-4">
          <AuthInput type='text' placeholder='First Name' img='/auth/username.svg' name='firstName' value={newAdmin.firstName} onChange={handleChange}/>
          <AuthInput type='text' placeholder='Last Name' img='/auth/username.svg' name='lastName' value={newAdmin.lastName} onChange={handleChange}/>
          <AuthInput type='text' placeholder='Username'  img='/auth/password.svg' name='username' value={newAdmin.username} onChange={handleChange}/>
          <AuthInput type='password' placeholder='Password' img='/auth/password.svg' name='password' value={newAdmin.password} onChange={handleChange}/>
        </div>

        <div className="flex items-center justify-between mt-8 mb-2">
          <AuthBtn  text='Continue' onClick={handleSubmit}/>
        </div>
      </form>
    </main>
  )
}

export default Register;
