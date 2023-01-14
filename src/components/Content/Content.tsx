import React from 'react';
import {Route} from "react-router-dom";
import s from './Content.module.css';
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Photos from "./Photos/Photos";
import Music from "./Music/Music";
import Games from "./Games/Games";
import Settings from "./Settings/Settings";
import {DialogsDataType, ProfileDataType, StateType} from "../../state";

export type ContentStateType = {
    contentState: StateType
}

const Content = ({contentState}: ContentStateType) => {
    const {profileData: ProfileDataType, dialogsData: DialogsDataType} = contentState
    return (
        <>
            <Route  path='/profile' render={() => <Profile profileState={contentState.profileData}/>}/>
            <Route  path='/dialogs' render={() => <Dialogs dialogsState={contentState.dialogsData}/>}/>
            <Route  path='/photos' render={() => <Photos/>}/>
            <Route  path='/Music' render={() => <Music/>}/>
            <Route  path='/games' render={() => <Games/>}/>
            <Route  path='/settings' render={() => <Settings/>}/>
        </>
  );
}

export default Content;