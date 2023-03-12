import ava4 from "../img/13.png";
import ava1 from "../img/781.jpg";
import {ProfileResponseType} from "../components/Content/Profile/ProfileContainer";
import {PostDataType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
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
        profile: {
        "aboutMe": "я круто чувак 1001%",
            "contacts": {
            "facebook": "facebook.com",
                "website": null,
                "vk": "vk.com/dimych",
                "twitter": "https://twitter.com/@sdf",
                "instagram": "instagra.com/sds",
                "youtube": null,
                "github": "github.com",
                "mainLink": null
        },
        "lookingForAJob": true,
            "lookingForAJobDescription": "не ищу, а дурачусь",
            "fullName": "samurai dimych",
            "userId": 55,
            "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    }
}

type InitialStateType = {
    postsData: PostDataType[],
    newPostText: string,
    profile: ProfileResponseType
}

const profileReducer = (state: InitialStateType = initialState, action: AddPostAT | UpdatePostAT | setUserProfileAT): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postsData.length + 1,
                src: ava4,
                postText: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
         }
         case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export type AddPostAT = ReturnType <typeof addPostActionCreator>

export const setUserProfile = (profile: ProfileResponseType) => ({type: SET_USER_PROFILE, profile} as const);
export type setUserProfileAT = ReturnType <typeof setUserProfile>

export const updateNewPostTextActionCreator = (newText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)
export type UpdatePostAT = ReturnType <typeof updateNewPostTextActionCreator>


export default  profileReducer;
