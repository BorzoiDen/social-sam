import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileDataType} from "../../../state";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props: any) => {
    console.log(props)
  return (
      <>
      <div className={s.profile}>
          <ProfileInfo/>
          <MyPosts addPost={props.addPost} myPostsState={props.state.profileData} updateNewPostText={props.updateNewPostText}/>
      </div>
      </>
  );
}

export default Profile;