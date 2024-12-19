import React from 'react';
import Header from '../../sections/admins/Header';
import AdminTable from '../../sections/admins/AdminTable';


const Admins = () => {
  return (
    <main className='flex flex-col py-4 px-8 w-full gap-4'>
        <Header/>
        <AdminTable/>
    </main>
  )
}

export default Admins;
