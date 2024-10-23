import React from 'react'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

function DashboardLayout(){
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout/>,
    children: [
      {
        path: '/',
        element: <Dashboard/>
      }
    ]
  }
])

function Routes (){
  return (
    <RouterProvider router={router} />
  )
}

export default Routes;
