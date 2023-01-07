import React from 'react';
import s from "../../MyPosts.module.css";

export type PostPropsType = {
    id: number,
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
