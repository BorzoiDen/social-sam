import React from 'react';
import {Route} from "react-router-dom";
import s from './Content.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Photos from "./Photos/Photos";
import Music from "./Music/Music";
import Games from "./Games/Games";
import Settings from "./Settings/Settings";
import {StateType} from "../../state";

export type ContentStateType = {
    contentState: StateType
    addPost: (postText: string) => void
}

const Content = (props: ContentStateType) => {
    return (
        <>
            <Route  path='/profile' render={() => <Profile profileState={props.contentState.profileData} addPost={props.addPost}/>}/>
            <Route  path='/dialogs' render={() => <Dialogs dialogsState={props.contentState.dialogsData}/>}/>
            <Route  path='/photos' render={() => <Photos/>}/>
            <Route  path='/Music' render={() => <Music/>}/>
            <Route  path='/games' render={() => <Games/>}/>
            <Route  path='/settings' render={() => <Settings/>}/>
        </>
  );
}

export default Content;