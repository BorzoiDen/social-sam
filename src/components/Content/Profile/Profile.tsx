import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppDispatch} from "../../../redux/redux-store";
import {ProfileDataType} from "../../../redux/profileReducer";

type Props = {
    dispatch: AppDispatch
    profileData: ProfileDataType
}

const Profile = (props: Props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;