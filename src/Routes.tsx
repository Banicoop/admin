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
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard';
import { getTokenExpirationTime } from './utils/jwtDecode';
import CellUserDetails from './pages/cells/CellUserDetails';
import Register from './pages/admins/Register';
import Admins from './pages/admins/Admins';
import { WelcomeImage } from './constant/images';
import { logout } from './redux/slice/authSlice';
import { LoanApplicationDetails, Loans, PendingLoan } from './pages/loan';
import { Wallet, InvestorWallet } from './pages/wallet';




function DashboardLayout(){
  return(
    <main className="flex min-h-screen w-full">
      <Sidebar/>

      <section className="flex flex-col h-full w-full">
        <Navbar/>
        <div className="px-8 py-3">
          <Welcome/>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap items-center px-2 md:px-8 gap-6 py-2">
            <Widget className='w-full md:w-[30%]' type='transactions'/>
            <Widget className='w-full md:w-[30%]' type='customers'/>
            <Widget className='w-full md:w-[30%]' type='cells'/>
            <Widget className='w-full md:w-[30%]' type='transactions'/>
            <Widget className='w-full md:w-[30%]' type='customers'/>
            <Widget className='w-full md:w-[30%]' type='cells'/>
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
      <div className="rounded-3xl shadow-lg bg-bgWhite flex md:h-[420px] lg:h-[540px] xl:h-[690px]">
        <div className="w-1/2 hidden md:block h-full ">
          <img src={WelcomeImage} alt="" className="w-fit h-full" />
        </div>
        <div className="w-full md:w-1/2 h-full">
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



  const token = useSelector((state: any) => state.auth.accessToken);
  const dispatch = useDispatch();


  useEffect(() => {
    if (token) {
        const expirationTime = getTokenExpirationTime(token);
        const currentTime = Date.now();

        if (!expirationTime) return; 

        const timeLeft = expirationTime - currentTime;

        if (timeLeft <= 0) {
            dispatch(logout());
        } else {
            const timer = setTimeout(() => dispatch(logout()), timeLeft);
            return () => clearTimeout(timer);
        }
    }

}, [token, dispatch]);



const router = createBrowserRouter([
  {
    path: '/',
    element:(
      <ProtectedRoute user={token}>
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
      <ProtectedRoute user={token}>
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
        path: '/cells/:id/:user',
        element: <CellUserDetails/>
      },
      {
        path: '/admin',
        element: <Admins/>
      },
      {
        path: '/loans',
        element: <Loans/>
      },
      {
        path: '/loan/pending',
        element: <PendingLoan/>
      },
      {
        path: '/loans/application/:id',
        element: <LoanApplicationDetails/>
      },
      
      //wallet section
      {
        path: '/wallet',
        element: <Wallet/>
      },
      {
        path: '/investorwallet',
        element: <InvestorWallet/>
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
  {
    path: '/register',
    element: <Register/>
  }
])


  return (
    <RouterProvider router={router} />
  )
}

export default Routes;
