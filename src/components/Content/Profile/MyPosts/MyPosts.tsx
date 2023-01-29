import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import {ProfileDataType} from "../../../../state";




const MyPosts = (props: any) => {
    // state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>

  return (
      // <div className={s.posts}>
      //       <h2 className={s.posts__title}>My Posts</h2>
      //       <textarea value={props.myPostsState.newPostText} className={s.posts__textarea} onChange={(e)=>props.myPostsState.updateNewPostText(e.currentTarget.value)}></textarea>
      //       <button className={s.posts__submitButton} onClick={()=>props.addPost()}>Опубликовать</button>
      //       <Posts postsState={props.myPostsState.postsData}/>
      // </div>
      <div className={s.posts}>
            <h2 className={s.posts__title}>My Posts</h2>
            <textarea value={props.myPostsState.newPostText} className={s.posts__textarea} onChange={(e)=>props.updateNewPostText(e.currentTarget.value)}></textarea>
            <button className={s.posts__submitButton} onClick={()=>props.addPost()}>Опубликовать</button>
            <Posts postsState={props.myPostsState.postsData}/>
      </div>
  );
}

export default MyPosts;