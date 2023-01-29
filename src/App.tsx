import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";


const App = (props : any) =>{

  return (
          <div className={s.appWrapper}>
              <Header/>
              <Navbar  navbarState={props.state.navbarState.friendList}/>
              <Content state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
          </div>
  );
}

export default App;
