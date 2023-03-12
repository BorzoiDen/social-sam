import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppDispatch, RootState} from "../../../redux/redux-store";
import { setUserProfile} from "../../../redux/profileReducer";
import axios from "axios";
import {UsersResponseType, UserType} from "../Users/UsersContainer";
import Profile from "./Profile";
import {connect} from "react-redux";


type ContactsType = {
    "facebook": string | null,
    "website": string | null,
    "vk": string | null,
    "twitter": string | null,
    "instagram": string | null,
    "youtube": string | null,
    "github": string | null,
    "mainLink": string | null
}

type PhotosType = {
    small: string | null,
    "large":  string | null
}

export type ProfileResponseType = {
    aboutMe: string | null,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    "photos": PhotosType
}


class ProfileContainer extends React.Component<CommonPropsType>{
    componentDidMount() {
        axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                this.props.setUserProfile(response.data);
            })
    }
    render(){
        return (
            <Profile {...this.props} profile = {this.props.profile}/>
        )
    }
}


let mapStateToProps = (state: RootState) => ({
    profile: state.profileData.profile
})

type MSTP = {
    profile: ProfileResponseType
}

type MDTP = {
    setUserProfile: (profile: ProfileResponseType) => void
}

export type CommonPropsType = MSTP & MDTP


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);