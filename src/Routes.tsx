import React, { Suspense, useEffect } from 'react'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Widget from './components/Widget';
import Cells from './pages/cells/Cells';
import CellDetails from './pages/cells/CellDetails';
import Splash from './pages/auth/Splash';
import WelcomePage from './pages/auth/WelcomePage';
import Login from './pages/auth/Signin';
import Verification from './pages/auth/Verification';
import Verified from './pages/auth/Verified';
import ProtectedRoute from './ProtectedRoute';
import { useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard';
import { getTokenExpirationTime } from './utils/jwtDecode';
import CellUserDetails from './pages/cells/CellUserDetails';



function DashboardLayout(){
  return(
    <main className="flex min-h-screen w-full">
      <Sidebar/>

      <section className="flex flex-col h-full w-full">
        <Navbar/>
        <div className="px-8">
          <Welcome/>
        </div>

        <div className="flex flex-wrap items-center gap-2 px-2 md:px-8 py-2">
            <Widget type='transactions'/>
            <Widget type='customers'/>
            <Widget type='cells'/>
            <Widget type='transactions'/>
            <Widget type='customers'/>
            <Widget type='cells'/>
        </div>
        <Outlet/>
      </section>
    </main>
  )
}


function CellLayout(){
  
  return(
    <div className="flex min-h-screen w-full">
        <Sidebar/>
      <div className="flex flex-col h-full w-full gap-3">
        <Navbar/>
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



function Routes (){

  const user = useSelector((state: any) => state.auth.user);
  console.log(user);

  useEffect(() => {
    if (user) {
        const expirationTime = getTokenExpirationTime(user);
        const currentTime = Date.now();

        if (!expirationTime) return; 

        const timeLeft = expirationTime - currentTime;

        if (timeLeft <= 0) {
            logoutUser();
        } else {
            const timer = setTimeout(() => logoutUser(), timeLeft);
            return () => clearTimeout(timer);
        }
    }

    function logoutUser() {
        localStorage.removeItem('loginData');
        localStorage.removeItem('user');
        localStorage.removeItem('token'); 
        window.location.replace('/auth/login');
    }
}, [user]);



const router = createBrowserRouter([
  {
    path: '/',
    element:(
      <ProtectedRoute user={user}>
        < DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/',
        element: <Dashboard/>
      }
    ]
  },
  {
    path: '/',
    element:(
      <ProtectedRoute user={user}>
        <CellLayout/>
      </ProtectedRoute>
  ),
    children: [
      {
        path: '/cells',
        element: <Cells/>
      },
      {
        path: '/cells/:id',
        element: <CellDetails/>
      },
      {
        path: '/cells/:id/user',
        element: <CellUserDetails/>
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


  return (
    <RouterProvider router={router} />
  )
}

export default Routes;
