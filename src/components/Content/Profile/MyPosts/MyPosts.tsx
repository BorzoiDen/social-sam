import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import {PostsDataType, ProfileDataType} from "../../../../state";


type MyPostsType = {
    myPostsState: ProfileDataType
}

const MyPosts = ({myPostsState}: MyPostsType) => {
    const {postsData} = myPostsState
  return (
      <div className={s.posts}>
            <h2 className={s.posts__title}>My Posts</h2>
            <textarea className={s.posts__textarea}></textarea>
            <button className={s.posts__submitButton}>Опубликовать</button>
            <Posts postsState={postsData}/>
      </div>
  );
}

export default MyPosts;