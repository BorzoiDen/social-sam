import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div className={s.appWrapper}>
              <Header/>
              <Navbar/>
              <Content/>
          </div>
      </BrowserRouter>
  );
}

export default App;
