import React from 'react';
import {FriendType} from "./components/Navbar/Friends/Friend/Friend";
import  ava1 from './img/781.jpg'
import  ava2 from './img/769.jpg'
import  ava3 from './img/785.jpg'
import  ava4 from './img/13.png'
import {rerenderEntireTree} from "./render";


export type PostsDataType = {
    id: number,
    src: string,
    postText: string,
    likesCount: number
}


export type DialogType = {
    id: number,
    name: string
}
export type MessagesDataType = {
    id: number,
    message: string
}



export type DialogsDataType = {
    dialogsData: DialogType[],
    messagesData: MessagesDataType[]
}
export type ProfileDataType = {
    postsData: PostsDataType[]
}


export type NavbarStateType = {
    friendList: FriendType[]
}


export type StateType = {
    navbarState: NavbarStateType,
    profileData: ProfileDataType,
    dialogsData: DialogsDataType
}

export let state: StateType = {
    navbarState : {
        friendList: [
            {
                id: 1,
                src: ava1,
                name: 'Julia'
            },
            {
                id: 2,
                src: ava2,
                name: 'Sergio'
            },
            {
                id: 3,
                src: ava3,
                name: 'Anna'
            },
        ]
    },
    profileData: {
        postsData: [
            {
                id: 1,
                src: ava1,
                postText: 'My first post!!!',
                likesCount: 71
            },
            {
                id: 2,
                src: ava1,
                postText: 'My second post!!!',
                likesCount: 72
            }
        ],
    },
    dialogsData: {
        dialogsData: [
            {id: 1, name: 'Анна'},
            {id: 2, name: 'Андрей'},
            {id: 3, name: 'Юлия'},
            {id: 4, name: 'Мария'},
            {id: 5, name: 'Светлана'},
            {id: 6, name: 'Сергей'}
        ],
        messagesData: [
            {id: 1, message: 'Привет'},
            {id: 2, message: 'Что нового?'},
            {id: 3, message: 'Как дела?'}
        ]
    }
};


export const addPost = (postText : string) => {
    let newPost = {
        id: state.profileData.postsData.length + 1,
        src: ava4,
        postText: postText,
        likesCount: 0
    }
    state.profileData.postsData.push(newPost);
    rerenderEntireTree(state);
}

