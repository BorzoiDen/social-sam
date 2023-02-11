import React from 'react';
import {FriendType} from "./components/Navbar/Friends/Friend/Friend";
import  ava1 from './img/781.jpg'
import  ava2 from './img/769.jpg'
import  ava3 from './img/785.jpg'
import  ava4 from './img/13.png'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

let store = {
    _state: {
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
            newPostText: '',
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
            ],
            newMessageText: ''
        }
    },
    _callSubscriber (state: any){
        console.log(state)
    },
    getState(){
        return this._state
    },
    subscribe(observer: (state: StateType) => void){
        this._callSubscriber = observer
    },

    dispatch(action: any){
        if(action.type === ADD_POST){
            let newPost = {
                id: this._state.profileData.postsData.length + 1,
                src: ava4,
                postText: this._state.profileData.newPostText,
                likesCount: 0
            }
            if(this._state.profileData.newPostText.trim() !== ''){
                this._state.profileData.postsData.push(newPost);
            }
            this._state.profileData.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profileData.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsData.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }  else if (action.type === SEND_NEW_MESSAGE){
            let newMessage = this._state.dialogsData.newMessageText
            this._state.dialogsData.newMessageText = ''
            this._state.dialogsData.messagesData.push({id: 6, message: newMessage});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (newText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText})

export const sendMessageCreator = () => ({type: SEND_NEW_MESSAGE})
export const updateNewMessageTextCreator = (newText: string) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: newText})


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
    messagesData: MessagesDataType[],
    newMessageText: string

}
export type ProfileDataType = {
    postsData: PostsDataType[],
    newPostText: string,
    addPost: ()=>void,
}

export type NavbarStateType = {
    friendList: FriendType[]
}

export type StateType = {
    navbarState: NavbarStateType,
    profileData: ProfileDataType,
    dialogsData: DialogsDataType
}

export default store;



