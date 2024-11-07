import React from 'react';
import './App.css';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <main>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </main>
  );
}

export default App;
