import ava4 from "../img/13.png";
import ava1 from "../img/781.jpg";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
}

const profileReducer = (state = initialState, action: AddPostAT | UpdatePostAT) => {
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const updateNewPostTextActionCreator = (newText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)
export type AddPostAT = ReturnType <typeof addPostActionCreator>
export type UpdatePostAT = ReturnType <typeof updateNewPostTextActionCreator>
export default  profileReducer;

export class ProfileDataType {
}