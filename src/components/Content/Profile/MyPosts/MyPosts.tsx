import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import {addPostActionCreator, ProfileDataType, updateNewPostTextActionCreator} from "../../../../state";


const MyPosts = (props: any) => {

    const addPost = () => {
        props.dispatch(addPostActionCreator);
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        let action = updateNewPostTextActionCreator(newText);
        props.dispatch(action)
    }

  return (
      <div className={s.posts}>
            <h2 className={s.posts__title}>My Posts</h2>
            <textarea value={props.newPostText} className={s.posts__textarea} onChange={ onPostChange }></textarea>
            <button className={s.posts__submitButton} onClick={ addPost }>Опубликовать</button>
            <Posts postsState={props.state}/>
      </div>
  );
}

export default MyPosts;