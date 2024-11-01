import React from 'react'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Welcome from './components/Welcome';
import Widget from './components/Widget';
import Cells from './pages/cells/Cells';
import CellDetails from './pages/cells/CellDetails';
import Customers from './pages/Customers';
import Transaction from './pages/Transaction';
import Splash from './pages/auth/Splash';
import WelcomePage from './pages/auth/WelcomePage';

import Login from './pages/auth/Signin';




function CellLayout(){
  return(
    <div className="flex min-h-screen min-w-full overflow-y-scroll">
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


function AuthLayout(){
  return(
    <div className="bg-bgR h-full w-full p-[5rem]">
      <div className="rounded-3xl shadow-lg bg-bgWhite flex">
        <img src="/welcome.svg" alt="" className="h-[75%]" />
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
      },
      {
        path: '/cells/:id',
        element: <CellDetails/>
      },
      {
        path: '/transactions',
        element: <Transaction/>
      },
      {
        path: '/customers',
        element: <Customers/>
      },
    ]
  },
  {
    path: '/splash',
    element: <Splash/>
  },
  {
    path: '/auth',
    element: <AuthLayout/>,
    children: [
      {
        path: '/auth/welcome',
        element: <WelcomePage/>
      },
      {
        path: '/auth/login',
        element: <Login/>
      },
    ]

  }
])

function Routes (){
  return (
    <RouterProvider router={router} />
  )
}

export default Routes;
