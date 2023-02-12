import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileDataType} from "../../../redux/state";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props: any) => {
  return (
      <>
      <div className={s.profile}>
          <ProfileInfo/>
          <MyPosts state={props.state.postsData}
                   newPostText={props.state.newPostText}
                   dispatch={props.dispatch}/>
      </div>
      </>
  );
}

export default Profile;