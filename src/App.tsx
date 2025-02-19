import React from 'react';
import './App.css';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient()

  return (
    <main>
        <Provider store={store}>
         <QueryClientProvider client={queryClient}>
          <Routes/>
          <ToastContainer />
          </QueryClientProvider>
        </Provider>
    </main>
  );
}

export default App;
