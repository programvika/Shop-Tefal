import React from "react";
import Header from "./pages/Header/Header";
import styles from './App.module.scss'
import Slider from "./Components/Slider/Slider";
import Auth from "./Components/Auth/Auth";



function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <Slider/>
      <Auth/>
    </div>
  );
}

export default App;
