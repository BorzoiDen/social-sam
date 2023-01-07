import React from 'react';
import s from './MyPosts.module.css';
import Posts from "./Posts/Posts";

let postsData = [
    {
        id: 1,
        src: '#',
        postText: 'My first post!!!',
        likesCount: 71
    },
    {
        id: 2,
        src: '#',
        postText: 'My second post!!!',
        likesCount: 72
    },
]

const MyPosts = () => {
  return (
      <div className={s.posts}>
            <h2 className={s.posts__title}>My Posts</h2>
            <textarea className={s.posts__textarea}></textarea>
            <button className={s.posts__submitButton}>Опубликовать</button>
            <Posts data={postsData}/>
      </div>
  );
}

export default MyPosts;