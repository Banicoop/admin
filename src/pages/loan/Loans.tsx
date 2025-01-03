import React, { useState } from 'react'
import Info from '../../components/infos/Info';
import Btn from '../../components/buttons/Btn';
import Widget from '../../components/Widget';




const list = [
  {
    label: 'Today'
  },
  {
    label: 'Last 7 days'
  },
  {
    label: 'Last 30 Days'
  },
  {
    label: 'All Time'
  },
  {
    label: 'Custom'
  },
]

const Loans = () => {

  const [activeItem, setActiveItem] = useState('Today');

  return (
    <div className='h-full flex flex-col w-full px-2 md:px-8 gap-3'>
      <div className="flex flex-col lg:flex-row w-full">
          <div className="flex-[2] flex gap-4 flex-col w-full justify-between">
            <div className="flex w-full justify-between my-2">
                <Info text='Overview'/>

                <div className="hidden md:flex items-center gap-4">
                {list.map((i) => (
                    <Btn onClick={() => setActiveItem(i.label)} activeItem={activeItem} label={i.label} key={i.label}/>
                  ))
                  }
                </div>
            </div>
            <div className="flex flex-col justify-center md:justify-between md:flex-row flex-wrap gap-5">
                <Widget className='w-full md:w-[48%]' type='loan1'/>
                <Widget className='w-full md:w-[48%]' type='loan2'/>
                <Widget className='w-full md:w-[48%]' type='loan3'/>
                <Widget className='w-full md:w-[48%]' type='loan4'/>
                <Widget className='w-full md:w-[48%]' type='loan5'/>
                <Widget className='w-full md:w-[48%]' type='loan6'/>
            </div>
          </div>


          <div className="flex-1 flex w-full">1
            
          </div>
      </div>

      <div className=""></div>
    </div>
  )
}

export default Loans;
