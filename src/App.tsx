import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./state";


export type AppPropsType = {
    state: StateType
    addPost: (postText: string) => void
}

const App = (props : AppPropsType) =>{
  return (
      <BrowserRouter>
          <div className={s.appWrapper}>
              <Header/>
              <Navbar  navbarState={props.state.navbarState.friendList}/>
              <Content contentState={props.state} addPost={props.addPost}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
