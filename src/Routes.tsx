import React, { Suspense, useEffect } from 'react'
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard';
import { getTokenExpirationTime } from './utils/jwtDecode';
import Register from './pages/admins/Register';
import Admins from './pages/admins/Admins';
import { WelcomeImage } from './constant/images';
import { logout } from './redux/slice/authSlice';
import {  Navbar, Sidebar } from './components';
import { Cells, CellDetails, CellUserDetails} from './pages/cells';
import { Signin, ForgetPassword, Verification, Verified, WelcomePage, Splash, ResetPassword } from './pages/auth'
import { LoanApplicationDetails, Loans, PendingLoan } from './pages/loan';
import { Wallet, InvestorWallet, WalletTransaction } from './pages/wallet';
import Merchant from './pages/merchant/Merchant';
import Customers from './pages/customer/Customers';





function AppLayout(){
  
  return(
    <div className="flex flex-col min-h-screen w-full">
      <Navbar/>
      <div className="flex max-w-[1400px] w-full mx-auto relative">
        <Sidebar/>
      <div className="flex h-full w-full py-4">
        <Outlet/>
      </div>
      </div>
    </div>
  )
}


function AuthLayout(){
  return(
    <div className="bg-bgR h-[100vh] w-full p-4 md:p-[3rem] lg:p-[5rem] flex items-center justify-center">
      <div className="rounded-3xl w-full lg:w-[1024px] shadow-lg bg-bgWhite flex md:h-[420px] xl:h-[560px]">
        <div className="w-1/2 hidden md:block h-full ">
          <img src={WelcomeImage} alt="" className="w-fit md:h-[420px] xl:h-[560px]" />
        </div>
        <div className="w-[400px] flex mx-auto md:w-1/2 md:h-[420px] xl:h-[560px]">
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

  console.log(token)

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
        <AppLayout/>
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
        path: '/wallet/:id',
        element: <InvestorWallet/>
      },
      {
        path: '/wallet/:id/transaction',
        element: <WalletTransaction/>
      },

      //merchant system
      {
        path: '/merchant',
        element: <Merchant/>
      },

      //customer mgt
      {
        path: 'customers',
        element: <Customers/>
      }
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
        element: <Signin/>
      },
      {
        path: '/auth/forgot-password',
        element: <ForgetPassword/>
      },
      {
        path: '/auth/reset-password',
        element: <ResetPassword/>
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
