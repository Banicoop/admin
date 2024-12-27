import React from 'react';
import { adminData } from '../../constant/menuData';
import  ActionBtn  from '../../components/buttons/ActionBtn';
import Table from '../../components/tables/Table';


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

  const renderRow = (item: any) => (
    <tr className='border-b border-gray-100 even:bg-slate-50 text-sm py-4'>
      <td className="flex items-center gap-4 p-4">
        <div className="flex items-center gap-4">
          <img src={item.profile.img} alt="" className="h-5 w-5 rounded-full" />
          <span className="">{item.profile.name}</span>
        </div>
      </td>
      <td className=''>{item.role}</td>
      <td className=''>{item.role}</td>
      <td className=''>{item.last_login}</td>
      <td className=''>
        <div className="flex items-center gap-4">
          <ActionBtn text='View' onClick={() => {}} className='px-2 py-1 text-sm rounded-lg bg-[gray] text-[#000] border-[1px] cursor-pointer'/>
          <ActionBtn text='Deactivate' onClick={() => {}} className='px-2  py-1 rounded-lg bg-[gray] text-[#000] border-[1px] cursor-pointer'/>
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
