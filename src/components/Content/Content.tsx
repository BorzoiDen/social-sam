import React from 'react';
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import Photos from "./Photos/Photos";
import Music from "./Music/Music";
import Games from "./Games/Games";
import Settings from "./Settings/Settings";
import {AppDispatch, RootState} from "../../redux/redux-store";
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {UsersContain, UsersContainer} from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";

type Props = {
    state: RootState
    dispatch: AppDispatch
}

const Content = (props: Props) => {
    return (
        <>
            <Route  path='/profile' render={() => <ProfileContainer />}/>
            <Route  path='/dialogs' render={() => <DialogsContainer />}/>
            <Route  path='/users' render={() => <UsersContainer />}/>
            <Route  path='/photos' render={() => <Photos />}/>
            <Route  path='/Music' render={() => <Music />}/>
            <Route  path='/games' render={() => <Games />}/>
            <Route  path='/settings' render={() => <Settings />}/>
        </>
  );
}

export default Content;