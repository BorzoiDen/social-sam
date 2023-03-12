import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileResponseType} from "./ProfileContainer";

type ProfilePropsType = {
    profile: ProfileResponseType,
    setUserProfile: (profile: ProfileResponseType) => void
}

const Profile = (props: ProfilePropsType) => {
    const {profile, setUserProfile} = props
    return (
        <div className={s.profile}>
            <ProfileInfo profile={profile} setUserProfile={setUserProfile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;