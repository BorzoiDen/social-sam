import React from 'react';

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



export type StateType = {
    profileData: ProfileDataType,
    dialogsData: DialogsDataType
}


export let state: StateType = {
    profileData: {
        postsData: [
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
