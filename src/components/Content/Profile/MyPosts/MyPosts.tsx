import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import {PostsDataType, ProfileDataType} from "../../../../state";


type MyPostsType = {
    myPostsState: ProfileDataType
    addPost: (postText: string) => void
}

const MyPosts = (props: MyPostsType) => {
    const [post, setPost] = useState('')

    const pureSetPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.currentTarget.value)
    }

    const addPost = () => {
        props.addPost(post)
        setPost('')
    }


  return (
      <div className={s.posts}>
            <h2 className={s.posts__title}>My Posts</h2>
            <textarea value={post} className={s.posts__textarea} onChange={pureSetPost}></textarea>
            <button className={s.posts__submitButton} onClick={addPost}>Опубликовать</button>
            <Posts postsState={props.myPostsState.postsData}/>
      </div>
  );
}

export default MyPosts;