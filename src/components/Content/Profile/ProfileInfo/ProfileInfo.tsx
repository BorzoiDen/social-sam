import React from 'react';
import s from "../Profile.module.css";
import {ProfileResponseType} from "../ProfileContainer";


type ProfileInfoPropsType = {
    profile: ProfileResponseType,
    setUserProfile: (profile: ProfileResponseType) => void
}




const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <>
            <img className={s.cover} src={'https://images.template.net/' +
                'wp-content/uploads/2014/11/best-natural-cover-photo-of-forest.jpg'} alt={'cover'}/>
            <div className={s.userInfo}>
                <div className={s.userAvatar}>
                    <img className={s.avatar} src={props.profile.photos.small as string} alt={'avatar'}/>
                </div>
                <div className={s.personalInfo}>
                    <div className={s.userStatus}>
                        {props.profile.aboutMe}
                    </div>
                </div>
            </div>
            <div className={s.fullName}>
                <span className={s.firstName}>{props.profile.fullName}</span>
            </div>
        </>
    );
};

export default ProfileInfo;