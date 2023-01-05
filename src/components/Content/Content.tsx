import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import s from './Content.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Photos from "./Photos/Photos";
import Music from "./Music/Music";
import Games from "./Games/Games";
import Settings from "./Settings/Settings";



const Content = () => {
    return (
        <>
            <Route  path='/profile' render={() => <Profile/>}/>
            <Route  path='/dialogs' render={() => <Dialogs/>}/>
            <Route  path='/photos' render={() => <Photos/>}/>
            <Route  path='/Music' render={() => <Music/>}/>
            <Route  path='/games' render={() => <Games/>}/>
            <Route  path='/settings' render={() => <Settings/>}/>
        </>
  );
}

export default Content;