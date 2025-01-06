import React, { useState, useEffect } from 'react';
// import { adminData } from '../../constant/menuData';
import  ActionBtn  from '../../components/buttons/ActionBtn';
import Table from '../../components/tables/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '../../redux/store';
import { changeStatus, getAllAdmin } from '../../redux/slice/adminSlice';
import BasicModal from '../../components/modals/DeleteModal';
import { motion } from 'framer-motion';


const columns = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Role",
    accessor: "role",
    className: "hidden md:table-cell",
  },
  {
    header: "Status",
    accessor: "status",
    className: "hidden md:table-cell",
  },
  // {
    // header: "Last Login",
    // accessor: "last_login",
    // className: "hidden lg:table-cell",
  // },
  {
    header: "Actions",
    accessor: "actions",
  },
];


const AdminTable = () => {

  const [ open, setOpen ] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState<string | null>(null);

  const dispatch = useDispatch<Dispatch>();
  const { allAdmin, status } = useSelector((state: any) => state.admin)

  useEffect(() => {
    dispatch(getAllAdmin())
  }, [dispatch])



  let adminData = allAdmin?.admins;

  const changeAdminStatus = () => {
    if (selectedAdminId) {
      dispatch(changeStatus(selectedAdminId)); 
      setOpen(false); 
    }
  }

  const renderRow = (item: any) => (
    <tr className='border-b border-gray-100 even:bg-slate-50 text-sm py-4'>
      <td className="flex items-center gap-4 py-4 px-2">
        <span className="flex items-center gap-4">
          <img src={item?.profileImage || '/admin/profile.png'} alt="" className="h-5 w-5 rounded-full" />
          <span className="">{`${item.firstName} ${item.lastName}`}</span>
        </span>
      </td>
      <td className='py-4'>{item?.role === 'super_admin' ? 'Super Admin': 'Admin'}</td>
      <td className='py-4'>
      <ActionBtn text={item?.disabled === false ? 'Active': 'Disabled'} onClick={() => {}} className='px-2 py-1 text-sm rounded-2xl bg-[#EAF7EF] text-[#27AE60] border-[1px] cursor-pointer w-max'/>
      </td>
      {/* <td className='py-4'>{item?.last_login}</td> */}
      <td className='py-4'>
        <span className="flex items-center gap-4">
          <ActionBtn text='View' onClick={() => {}} className='px-4 py-2 text-sm rounded-3xl bg-[#E6E6E680] text-[#6922D1] border-[1px] border-[#6922D1] cursor-pointer'/>

          <ActionBtn 
            text={item?.disabled === false ? 'Deactivate': 'Activate'} 
            onClick={() => setSelectedAdminId(item._id)} 
            className='px-4  py-2 rounded-3xl bg-[#fff] text-[#6922D1] border-[1px] border-[#6922D1] cursor-pointer w-[95px]'/>
        </span>
      </td>

    </tr>
  )


  return (
    <div className='relative'>
      <Table columns={columns} data={adminData} renderRow={renderRow} status={status}/>

      { open &&
           <BasicModal onClose={() => setOpen(false)} open={open}>
              <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                  duration: 0.4,
                  scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
              className="flex flex-col p-3">
                <h2 className=''>Are you sure want to change admin status?</h2>

                <div className="flex p-4 justify-between items-center">
                  <ActionBtn text='Yes, Proceed' onClick={changeAdminStatus} className='px-4 py-2 text-sm rounded-3xl bg-[#E6E6E680] text-[#6922D1] border-[1px] border-[#6922D1] cursor-pointer'/>

                  <ActionBtn text='Cancel' onClick={() => setOpen(false)} className='px-4  py-2 rounded-3xl bg-[#fff] text-[#6922D1] border-[1px] border-[#6922D1] cursor-pointer w-[95px]'/>
                </div>
              </motion.div>
           </BasicModal>
      }
    </div>
  )
}

export default AdminTable;
