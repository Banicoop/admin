import React, { useMemo } from 'react';
// import { adminData } from '../../constant/menuData';
import  ActionBtn  from '../../components/buttons/ActionBtn';
import Table from '../../components/tables/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '../../redux/store';
import { getAllAdmin } from '../../redux/slice/adminSlice';


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
  {
    header: "Last Login",
    accessor: "last_login",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "hidden lg:table-cell",
  },
];


const AdminTable = () => {

  const dispatch = useDispatch<Dispatch>();
  const { allAdmin } = useSelector((state: any) => state.admin)

  useMemo(() => {
    dispatch(getAllAdmin())
  }, [dispatch])

  console.log((allAdmin.admins));

  let adminData = allAdmin?.admins;

  const changeAdminStatus = () => {
    
  }

  const renderRow = (item: any) => (
    <tr className='border-b border-gray-100 even:bg-slate-50 text-sm py-4'>
      <td className="flex items-center gap-4 py-4 px-2">
        <div className="flex items-center gap-4">
          <img src={item?.profileImage || '/admin/profile.png'} alt="" className="h-5 w-5 rounded-full" />
          <span className="">{`${item.firstName} ${item.lastName}`}</span>
        </div>
      </td>
      <td className='py-4'>{item.role}</td>
      <td className='py-4'>
      <ActionBtn text={item?.status || 'Active'} onClick={() => {}} className='px-2 py-1 text-sm rounded-2xl bg-[#EAF7EF] text-[#27AE60] border-[1px] cursor-pointer w-max'/>
      </td>
      <td className='py-4'>{item?.last_login}</td>
      <td className='py-4'>
        <div className="flex items-center gap-4">
          <ActionBtn text='View' onClick={() => {}} className='px-4 py-2 text-sm rounded-3xl bg-[#E6E6E680] text-[#6922D1] border-[1px] border-[#6922D1] cursor-pointer'/>
          <ActionBtn text='Deactivate' onClick={() => {}} className='px-4  py-2 rounded-3xl bg-[#fff] text-[#6922D1] border-[1px] border-[#6922D1] cursor-pointer w-[95px]'/>
        </div>
      </td>

    </tr>
  )


  return (
    <div className=''>
      <Table columns={columns} data={adminData} renderRow={renderRow}/>
    </div>
  )
}

export default AdminTable;
