import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileDataType} from "../../../state";

type ProfileType = {
    profileState: ProfileDataType;
    addPost: (postText: string) => void
}

const Profile = (props:ProfileType) => {

  return (
      <>
      <div className={s.profile}>
          <img className={s.cover} src={'https://images.template.net/' +
              'wp-content/uploads/2014/11/best-natural-cover-photo-of-forest.jpg'} alt={'cover'}/>
          <div className={s.userInfo}>
              <div className={s.userAvatar}>
                  <img className={s.avatar} src={'https://thumbs.dreamstime.com/' +
                      'b/black-cat-logo-sticker-white-background-black-cat-logo-sticker-128909199.jpg'} alt={'avatar'}/>
              </div>
              <div className={s.personalInfo}>
                  <div className={s.fullName}>
                        <span className={s.firstName}>Denis</span><span className={s.lastName}> Borozenets</span>
                  </div>
              </div>
          </div>
          <MyPosts myPostsState={props.profileState} addPost={props.addPost}/>
      </div>
      </>
  );
}

export default Profile;