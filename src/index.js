import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import DeviceStore from './store/DeviceStore';
import './firebase'
import { CartProvider } from 'react-use-cart';
import { AuthContextProvider } from './store/AuthContext/AuthContext';


export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    device: new DeviceStore(),
  }}>
    <AuthContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthContextProvider>
  </Context.Provider>

);

