import React from 'react'
import Welcome from '../components/Welcome';
import Widget from '../components/Widget';

const Dashboard = () => {
  return (
    <div className='flex flex-col p-8 w-full gap-5'>
        <Welcome/>

        <div className="flex items-center gap-5 w-full">
            <Widget type='transactions'/>
            <Widget type='customers'/>
            <Widget type='cells'/>
        </div>
    </div>
  )
}

export default Dashboard;
