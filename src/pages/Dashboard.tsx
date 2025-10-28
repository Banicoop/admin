import React from 'react';
import Chart from '../sections/Chart';
import { Welcome, Widget } from '../components';

const Dashboard = () => {
  return (
    <div className='flex flex-col py-4 w-full gap-5 px-2 md:px-8 '>
      <Welcome/>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-between gap-4 py-2 w-full">
          <Widget className='w-full md:w-[30%]' type='transactions'/>
          <Widget className='w-full md:w-[30%]' type='customers'/>
          <Widget className='w-full md:w-[30%]' type='cells'/>
          <Widget className='w-full md:w-[30%]' type='transactions'/>
          <Widget className='w-full md:w-[30%]' type='customers'/>
          <Widget className='w-full md:w-[30%]' type='cells'/>
      </div>
        <Chart/>
    </div>
  )
}

export default Dashboard;
