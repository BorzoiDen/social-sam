import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {RootState} from "../../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

let mapStateToProps = (state: RootState) => {
    const {profileData} = state
    return {
        posts: profileData.postsData,
        newPostText: profileData.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) =>{
    return {
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))},
        addPost: () => {
            dispatch(addPostActionCreator())}
    }
}

export let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
