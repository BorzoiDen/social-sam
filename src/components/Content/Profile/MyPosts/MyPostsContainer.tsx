import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {AppDispatch} from "../../../../redux/redux-store";
import {PostDataType} from "../../../../redux/store";

type Props = {
    postsData:PostDataType[]
    newPostText: string
    dispatch: AppDispatch
}

const MyPostsContainer = (props: Props) => {
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

  return (
      <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={props.postsData} newPostText={props.newPostText}/>
  );
}

export default MyPostsContainer;