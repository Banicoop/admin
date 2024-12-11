import React from 'react';
import './App.css';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes/>
        <ToastContainer />
      </PersistGate>
      </Provider>
    </main>
  );
}

export default App;
