import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import {RootState} from "./redux/redux-store";


type AppProps = {
    state: RootState
    dispatch: any
}

const App = (props: AppProps) => {
    return (
        <div className={s.appWrapper}>
            <Header/>
            <Navbar friends={props.state.navbarState.friendList}/>
            <Content state={props.state} dispatch={props.dispatch}/>
        </div>
    );
}

export default App;
