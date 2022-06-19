import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import DeviceStore from './store/DeviceStore';

export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    device: new DeviceStore(),
  }}>
      <App />
  </Context.Provider>

);

