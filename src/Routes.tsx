import React, { Suspense } from 'react'
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
import Verification from './pages/auth/Verification';
import Verified from './pages/auth/Verified';
import ProtectedRoute from './ProtectedRoute';

const user = false;




function CellLayout(){
  return(
    <div className="flex min-h-screen min-w-full overflow-y-scroll">
        <Sidebar/>
      <div className="flex flex-col h-full w-full">
        <Navbar/>
        <Welcome/>

        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center gap-2 px-2 md:px-8 py-2">
            <Widget type='transactions'/>
            <Widget type='customers'/>
            <Widget type='cells'/>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center gap-2 px-2 md:px-8 py-2">
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
    <div className="bg-bgR h-full w-full p-4 md:p-[3rem] lg:p-[5rem] flex items-center justify-center">
      <div className="rounded-3xl shadow-lg bg-bgWhite flex">
        <div className="flex-1 hidden md:block w-full h-full">
          <img src="/welcome.svg" alt="" className="w-full h-full" />
        </div>
        <div className="flex-1 w-full h-full">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

function AuthVerificationLayout(){
  return(
    <div className="bg-bgR h-[100vh] w-full flex justify-center items-center">
        <Outlet/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element:(
      <ProtectedRoute user={user}>
        <CellLayout/>
      </ProtectedRoute>
  ),
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
        element: (
          <Suspense fallback={<Splash/>}>
            <WelcomePage/>
          </Suspense>
      )
      },
      {
        path: '/auth/login',
        element: <Login/>
      },
    ]
  },
  {
    path: '/auth',
    element: <AuthVerificationLayout/>,
    children: [
      {
        path: '/auth/verification',
        element: <Verification/>
      },
      {
        path: '/auth/verified',
        element: <Verified/>
      },
    ]
  },
])

function Routes (){
  return (
    <RouterProvider router={router} />
  )
}

export default Routes;
