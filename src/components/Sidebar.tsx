import React, {  ChangeEvent, useState } from 'react'
import { menuData } from '../constant/menuData';
import { Link } from 'react-router-dom';
import BasicModal from './modals/BasicModal';
import Select from './inputs/Select';
import Button from './buttons/Button';
import { useDispatch } from 'react-redux';
import type { Dispatch } from '../redux/store';
import { sendInvite } from '../redux/slice/adminSlice';

const Sidebar = () => {

  const handleLogout = async () => {
    localStorage.removeItem('loginData'); 
    localStorage.removeItem('user');
    window.location.replace('/auth/login');
  }

  const options = [
    { value: "", label: "Select Admin Role" },
    { value: "super_admin", label: "Super Admin" },
    { value: "admin", label: "Admin" },
  ];


  const dispatch = useDispatch<Dispatch>();

  const [open, setOpen] = useState(false);
  const [type, setType] = useState<string | null>(null);
  const [email, setEmail] = useState('')

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  }

  const handleOpen = () => {
    setOpen(true)
  }


  const handleAdd = async () => {
    dispatch(sendInvite({type, email}))
  }
  

  return (
    <>
    <div className='w-[250px] min-h-full border-r-[1px] flex flex-col mb-4'>
      <div className="px-1 py-6">
        <div className="flex gap-4 items-center ml-[20px]">
          <img src="/logo1.svg" alt="" className="" />
          <img src="/banicoop.svg" alt="" className="" />
        </div>

         { menuData.map((item) => (
          <Link to={item.url} key={item.name} className="flex items-center gap-2 p-3 hover:bg-[#fafafa] hover:text-[#6922D1] rounded-full mt-2">
            <img src={item.icon} alt="" className="md:ml-[10px] text-bgPurple" />
            <span className='hidden md:block text-sm'>{item.name}</span>
          </Link>
         ))}

         <div className="flex items-center gap-2 p-3 hover:bg-[#fafafa] hover:text-[#6922D1] rounded-full mt-2 cursor-pointer" onClick={handleOpen}>
          <img src="/verify.svg" alt="" className="md:ml-[10px] text-bgPurple" />
          <span className="hidden md:block text-sm">Admins</span>
         </div>
        </div>



    {/* BOTTOM */}
      <div className="mt-auto border-t-[1px] flex items-center px-3 py-6 gap-3 cursor-pointer" onClick={handleLogout}>
        <img src='/logout.svg' alt="" className="md:ml-[10px] text-bgPurple" />
        <span className='hidden md:block text-sm'>Log Out</span>
      </div>
    </div>

    {open && 
      <BasicModal h2='' p='' onClose={() => setOpen(false)} open={open}>
        <div className="flex flex-col gap-5 p-3">
          <h1 className='font-semibold text-2xl'>Add an Admin</h1>
          <input type="email" required className="p-2 outline-none border-[1px]" onChange={(e:any) => setEmail(e.target.value)} placeholder='Enter admin Email address'/>
          <Select options={options} name='Select Admin Role' onChange={handleSelectChange} className='w-full h-[50px]'/>
          <Button text='Send an invite' onClick={handleAdd}/>
        </div>
      </BasicModal>
    }
    </>
  )
}

export default Sidebar;
