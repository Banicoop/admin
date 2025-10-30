import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid,  ResponsiveContainer, Legend } from 'recharts';


const data = [
    {
      name: '01',
      'Last 6 days': 4000,
      'Last week': 2400,
      amt: 2400,
    },
    {
      name: '02',
      'Last 6 days': 3000,
      'Last week': 1398,
      amt: 2210,
    },
    {
      name: '03',
      'Last 6 days': 2000,
      'Last week': 9800,
      amt: 2290,
    },
    {
      name: '04',
      'Last 6 days': 2780,
      'Last week': 3908,
      amt: 2000,
    },
    {
      name: '05',
      'Last 6 days': 1890,
      'Last week': 4800,
      amt: 2181,
    },
    {
      name: '06',
      'Last 6 days': 2390,
      'Last week': 3800,
      amt: 2500,
    },
    {
      name: '07',
      'Last 6 days': 3490,
      'Last week': 4300,
      amt: 2100,
    },
    {
      name: '08',
      'Last 6 days': 3000,
      'Last week': 1398,
      amt: 2210,
    },
    {
      name: '09',
      'Last 6 days': 2000,
      'Last week': 9800,
      amt: 2290,
    },
    {
      name: '10',
      'Last 6 days': 2780,
      'Last week': 3908,
      amt: 2000,
    },
    {
      name: '11',
      'Last 6 days': 1890,
      'Last week': 4800,
      amt: 2181,
    },
    {
      name: '12',
      'Last 6 days': 2390,
      'Last week': 3800,
      amt: 2500,
    },
  ];

const Chart = () => {
  return (
    <div className='flex flex-col p-5 border-[1px] rounded-3xl'>
        <div className="flex justify-between items-center">
            <h1 className="text-xs md:text-[16px] text-[#000] ">Transaction Overview</h1>

            <div className="flex items-center border-[1px] rounded-[20px] gap-3 py-5 px-6">
                <span className="text-xs md:text-[14px] font-[500]">Money Transfer</span>
                <img src="/arrow-down.svg" alt="" className="h-4 w-4" />
            </div>
        </div>
        <div className="w-[300px] md:w-[600px] lg:w-[900px] h-[400px] flex justify-center items-center mt-3">
        <ResponsiveContainer width="100%" height="90%">
            <BarChart
                data={data}
                
            >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
            <XAxis dataKey="name" tickLine={false}/>
            <Legend
            align="left"
          />
            <Bar dataKey="Last 6 days" fill="#6922D1" barSize={10}  radius={[10, 10, 10, 10]}/>
            <Bar dataKey="Last week" fill="#E6E8EC" barSize={10}  radius={[10, 10, 10, 10]}/>
            </BarChart>
        </ResponsiveContainer>

        </div>

    </div>
  )
}

export default Chart;
