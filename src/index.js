import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import DeviceStore from './store/DeviceStore';
import {Provider} from 'react-redux'
import {store} from './store/index'
import './firebase'


export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    device: new DeviceStore(),
  }}>
    <Provider store={store}>
      <App />
    </Provider>
  </Context.Provider>

);

