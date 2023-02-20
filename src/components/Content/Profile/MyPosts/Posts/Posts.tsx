import React from 'react';
import {Post} from "./Post/Post";
import {PostDataType} from "../../../../../redux/store";

type PostsType = {
    postsState: PostDataType[]
}

const Posts = (props: PostsType) => {
    return (
        <>
            {props.postsState.map((p) => <Post key={p.id} id={p.id} src={p.src} postText={p.postText} likesCount={p.likesCount}/>)}
        </>
    );
}

export default Posts;