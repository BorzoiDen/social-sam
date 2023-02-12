import ava4 from "../img/13.png";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            console.log('!!!!')
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