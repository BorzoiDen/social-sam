import React from 'react';
import Friend, {FriendType} from "./Friend/Friend";
import s from './Friends.module.css'

export type FriendsType = {
    friends: FriendType[]
}

export const Friends = (props: FriendsType) => {
    return (
        <div key={Number(new Date())} className={s.friendList}>
            <h3 className={s.friendList__title}>Friends</h3>
            <div className={s.friendList__items}>
                {props.friends.map((f, index)=> <Friend key={index} name={f.name} id={f.id} src={f.src}/>)}
            </div>
        </div>
    );
};
