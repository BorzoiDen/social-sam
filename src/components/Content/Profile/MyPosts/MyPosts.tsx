import React from 'react';
import s from './MyPosts.module.css';


type PostPropsType = {
    src: string,
    postText: string,
    likesCount: number
}

 export const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <img src={props.src} className={s.post__userAvatar} alt={'ava'}/>
            <div className={s.post__postText}>{props.postText}</div>
            <div className={s.post__likesCount}>Likes: {props.likesCount}</div>
        </div>
    );
}

const MyPosts = () => {
  return (
      <div className={s.posts}>
            <h2 className={s.posts__title}>My Posts</h2>
            <textarea className={s.posts__textarea}></textarea>
            <button className={s.posts__submitButton}>Опубликовать</button>

            <Post src={'#'} postText={'My first post!!!'} likesCount={71}/>
            <Post src={'#'} postText={'My second post!!!'} likesCount={72}/>
      </div>
  );
}

export default MyPosts;