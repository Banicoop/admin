import React from 'react';
import './App.css';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main>
      <Provider store={store}>
        <Routes/>
        <ToastContainer />
      </Provider>
    </main>
  );
}

export default App;
