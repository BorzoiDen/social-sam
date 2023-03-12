import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Posts from "./Posts/Posts";
import {PostDataType} from "../../../../redux/store";
import {ProfileResponseType} from "../ProfileContainer";


type Props = {
    addPost: () => void
    onPostChange: (text: string) => void
    posts: PostDataType[]
    newPostText: string,
}

const MyPosts = (props: Props) => {

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
         props.onPostChange(text);
    }

  return (
      <div className={s.posts}>
            <h2 className={s.posts__title}>My Posts</h2>
            <textarea value={props.newPostText} className={s.posts__textarea} onChange={ onPostChange }></textarea>
            <button className={s.posts__submitButton} onClick={props.addPost}>Опубликовать</button>
            <Posts postsState={props.posts}/>
      </div>
  );
}

export default MyPosts;