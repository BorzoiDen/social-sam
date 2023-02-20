import ava4 from "../img/13.png";
import ava1 from "../img/781.jpg";
import ava2 from "../img/769.jpg";
import ava3 from "../img/785.jpg";
import {PostDataType} from "./store";

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

export type ProfileDataType = typeof initialState

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                src: ava4,
                postText: state.newPostText,
                likesCount: 0
            }
            if(state.newPostText.trim() !== ''){
                state.postsData.push(newPost);
            }
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText})

export default  profileReducer;