import React, { useState } from 'react';
import Header from '../../sections/admins/Header';
import AdminTable from '../../sections/admins/AdminTable';


const list = [
    {
        label: 'Active Admin'
    },
    {
        label: 'Deactivated Admin'
    },
]


const Admins = () => {

  const [activeItem, setActiveItem] = useState(list[0].label);

  return (
    <main className='flex flex-col py-4 px-8 w-full gap-4'>
        <Header list={list} activeItem={activeItem} setActiveItem={setActiveItem} />
        <AdminTable activeItem={activeItem}/>
    </main>
  )
}

export default Admins;
