import React, { useState } from 'react'
import Info from '../../components/infos/Info';
import Btn from '../../components/buttons/Btn';
import Search from '../../components/Search';


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


  return (
    <div className='flex justify-between items-center py-4 px-8 w-full '>
        <div className="flex items-center gap-2">
            <Info text='Admin Management'/>
            {
                list.map((l) => (
                    <Btn onClick={() => setActiveItem(l.label)} label={l.label}  activeItem={activeItem}/>
                ))
            }
        </div>

        <div className="flex items-center gap-2">
            <Search onClick={() => {}} placeholder='Seacrh Cell'/>
        </div>
    </div>
  )
}

export default Header;
