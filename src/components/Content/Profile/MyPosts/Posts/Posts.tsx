import React from 'react';
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../../../redux/state";

type PostsType = {
    postsState: PostsDataType[]
}

const Posts = ({postsState}: PostsType) => {
    return (
        <>
            {postsState.map((p) => <Post key={p.id} id={p.id} src={p.src} postText={p.postText} likesCount={p.likesCount}/>)}
        </>
    );
}

export default Posts;