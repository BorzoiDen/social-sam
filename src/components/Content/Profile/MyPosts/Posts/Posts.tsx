import React from 'react';
import {Post, PostPropsType} from "./Post/Post";

type PostsType = {
    data: PostPropsType[]
}

const Posts = ({data}: PostsType) => {
    return (
        <>
            {data.map((p) => <Post key={p.id} id={p.id} src={p.src} postText={p.postText} likesCount={p.likesCount}/>)}
        </>
    );
}

export default Posts;