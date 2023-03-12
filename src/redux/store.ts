
import {FriendType} from "../components/Navbar/Friends/Friend/Friend";
import  ava1 from '../img/781.jpg'
import  ava2 from '../img/769.jpg'
import  ava3 from '../img/785.jpg'
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

// let store = {
//     _state: {
//         navbarState : {
//             friendList: [
//                 {
//                     id: 1,
//                     src: ava1,
//                     name: 'Julia'
//                 },
//                 {
//                     id: 2,
//                     src: ava2,
//                     name: 'Sergio'
//                 },
//                 {
//                     id: 3,
//                     src: ava3,
//                     name: 'Anna'
//                 },
//             ]
//         },
//         profileData: {
//             postsData: [
//                 {
//                     id: 1,
//                     src: ava1,
//                     postText: 'My first post!!!',
//                     likesCount: 71
//                 },
//                 {
//                     id: 2,
//                     src: ava1,
//                     postText: 'My second post!!!',
//                     likesCount: 72
//                 }
//             ],
//             newPostText: '',
//         },
//         dialogsData: {
//             dialogsData: [
//                 {id: 1, name: 'Анна'},
//                 {id: 2, name: 'Андрей'},
//                 {id: 3, name: 'Юлия'},
//                 {id: 4, name: 'Мария'},
//                 {id: 5, name: 'Светлана'},
//                 {id: 6, name: 'Сергей'}
//             ],
//             messagesData: [
//                 {id: 1, message: 'Привет'},
//                 {id: 2, message: 'Что нового?'},
//                 {id: 3, message: 'Как дела?'}
//             ],
//             newMessageText: ''
//         }
//     },
//     _callSubscriber (state: any){
//     },
//     getState(){
//         return this._state
//     },
//     subscribe(observer: (state: StateType) => void){
//         this._callSubscriber = observer
//     },
//
//     dispatch(action: any){
//         this._state.profileData = profileReducer(this._state.profileData, action)
//         this._state.dialogsData = dialogsReducer(this._state.dialogsData, action)
//         this._state.navbarState = navbarReducer(this._state.navbarState, action)
//
//         this._callSubscriber(this._state);
//     }
// }

export type PostDataType = {
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
type ProfileDataType = {
    postsData: PostDataType[],
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

//export default store;



