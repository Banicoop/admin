import React, { useEffect, useState, ChangeEvent } from 'react'
import Info from '../../components/infos/Info';
import Btn from '../../components/buttons/Btn';
import Search from '../../components/Search';
import ExportBtn from '../../components/buttons/ExportBtn';
import BasicModal from '../../components/modals/DeleteModal';
import { useDispatch } from 'react-redux';
import type { Dispatch } from '../../redux/store'; 
import { sendInvite } from '../../redux/slice/adminSlice';
import Select from '../../components/inputs/Select';
import Button from '../../components/buttons/Button';
import { motion } from 'framer-motion';



const list = [
    {
        id: 0,
        label: 'All Admin'
    },
    {
        id: 1,
        label: 'Super Admin'
    },
    {
        id: 2,
        label: 'Standard Admin'
    },
]

const Header = () => {

    const [activeItem, setActiveItem] = useState('All Admin');
    const [open, setOpen] = useState(false);


    const [type, setType] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [adminId, setAdminId] = useState<string | null>(null);


    const dispatch = useDispatch<Dispatch>();



    useEffect(() => {
      const loginDataString = localStorage.getItem('loginData');
      if (loginDataString) {
          const loginData = JSON.parse(loginDataString);
          setAdminId(loginData.id);
      }
  }, []);
  
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setType(e.target.value);
    }
  
    const handleOpen = () => {
      setOpen(true)
    }
  
  
    const handleAdd = async () => {
      dispatch(
        sendInvite({
          admin: { email, role: type },
          adminId })
      )
    }


  return (
    <>
    <div className='flex flex-col lg:flex-row items-center  w-full gap-2'>
        <div className="flex items-center justify-between gap-2 w-full">
            <Info text='Admin Management'/>
            {
                list.map((l) => (
                    <Btn onClick={() => setActiveItem(l.label)} label={l.label} key={l.label} activeItem={activeItem}/>
                ))
            }
        </div>

        <div className="flex items-center justify-between gap-2 w-full">
            <Search onClick={() => {}} placeholder='Seacrh Admin'/>
            <ExportBtn text='Add an Admin' img='/admin/admin-add.svg' onClick={handleOpen}/>
        </div>
    </div>

    {open &&
        <BasicModal onClose={() => setOpen(false)} open={open}>
            <motion.div className="flex flex-col gap-5 p-3"  
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                  duration: 0.8,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}>
            <div className="flex items-end justify-end justify-self-end">
                <img src="/admin/x.svg" alt="" className="h-4 w-4 cursor-pointer" onClick={() => setOpen(false)} />
            </div>
                <h1 className='font-semibold text-2xl'>Add an Admin</h1>

            <input type="email" required className="p-2 outline-none border-[1px]" onChange={(e:any) => setEmail(e.target.value)} placeholder='Enter admin Email address'/>
            <Select options={options} name='Select Admin Role' onChange={handleSelectChange} className='w-full h-[50px]'/>
            <Button text='Send an invite' onClick={handleAdd}/>
            </motion.div>
        </BasicModal>
    }
    </>
  )
}

const options = [
    { value: "", label: "Select Admin Role" },
    { value: "super_admin", label: "Super Admin" },
    { value: "admin", label: "Admin" },
  ];

export default Header;
