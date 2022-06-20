import React from "react";
import Header from "./Components/Header/Header";
import styles from './App.module.scss'
import Slider from "./Components/Slider/Slider";
import Auth from "./Components/Auth/Auth";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppRouter from "./Components/AppRouter";



function App() {
  return (
    <div className={styles.wrapper}>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
