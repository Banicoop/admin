import React from 'react'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Welcome from './components/Welcome';
import Widget from './components/Widget';
import Cells from './pages/cells/Cells';

function DashboardLayout1(){
  return(
    <div className="flex min-h-screen min-w-full">
        <Sidebar/>
      <div className="flex flex-col h-full w-full">
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  )
}


function CellLayout(){
  return(
    <div className="flex min-h-screen min-w-full">
        <Sidebar/>
      <div className="flex flex-col h-full w-full">
        <Navbar/>
        <Welcome/>

        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center gap-5 p-8">
            <Widget type='transactions'/>
            <Widget type='customers'/>
            <Widget type='cells'/>
        </div>
        <Outlet/>
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <CellLayout/>,
    children: [
      {
        path: '/',
        element: <Dashboard/>
      },
      {
        path: '/cells',
        element: <Cells/>
      }
    ]
  },
])

function Routes (){
  return (
    <RouterProvider router={router} />
  )
}

export default Routes;
